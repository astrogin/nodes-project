<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class TwoFaSecretNotExists extends Exception
{
    public function render($request)
    {
        if ($request->expectsJson()) {

            return response(['message' => 'something wrong'],Response::HTTP_INTERNAL_SERVER_ERROR);

        }
    }
}