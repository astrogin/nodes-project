<?php

namespace App\Services\Settlement;

use App\Events\AcceptedLeaveFromNode;
use App\Masternode;
use App\Types\SettlementType;

/**
 * Class EqualService
 * @package App\Services\Settlement
 */
class EqualService implements SettlementInterface
{
    /**
     * @var SettlementType
     */
    private $type;

    /**
     * EqualService constructor.
     * @param SettlementType $type
     */
    public function __construct(SettlementType $type)
    {
        $this->type = $type;
    }

    public function solve()
    {
        $this->type->getMainNode()->getConnection()->transaction(function () {

            $userService = app(UserSettlementService::class,[
                'type' => $this->type
            ]);

            $userService->updateBill();

            $secondaryNodeService = app(SecondaryNodeService::class, [
                'node' => $this->type->getSecondaryNode()
            ]);

            $mainNodeService = app(MainNodeService::class, [
                'node' => $this->type->getMainNode(),
                'secondaryNode' => $this->type->getSecondaryNode()
            ]);

            $investors = $secondaryNodeService->getInvestorsByAmount(
                $this->type->getInvestment()->amount
            );

            $this->type->getInvestment()->delete();

            $mainNodeService->migrate($investors);

            $secondaryNodeService->deleteGivenInvestors();

            $this->type->getSecondaryNode()->bill()->delete();
            $this->type->getSecondaryNode()->investments()->delete();
            $this->type->getSecondaryNode()->delete();

            $this->type->getMainNode()->update([
                'state' => Masternode::STABLE_STATE
            ]);

            event(new AcceptedLeaveFromNode($this->type->getUser()));
        });
    }
}