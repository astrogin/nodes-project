import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/Index.vue'
import Login from '../components/login/Login.vue'
import Login2fa from '../components/login/Login2fa.vue'
import SingUp from '../components/singup/SingUp.vue'
import Faq from '../components/faq/Faq.vue'
import Contact from '../components/contacts/Contact.vue'
import NavBar from '../components/header/Header.vue'
import FooTer from '../components/footer/Footer.vue'
import ForgotPassword from '../components/login/forgotten/ForgotPassword.vue'
import ResetPassword from '../components/login/forgotten/ResetPassword.vue'
import Terms from '../components/views/Terms.vue'

import Masternodes from '../components/user/paper/Dashboard/Views/Masternodes.vue'
import DashboardLayout from '../components/user/paper/Dashboard/Layout/DashboardLayout.vue'
import UserProfile from '../components/user/paper/Dashboard/Views/UserProfile.vue'
import ConfirmEmail from '../components/user/confirmEmail/ConfirmEmail.vue'
import NotFoundPage from '../components/user/paper/GeneralViews/NotFoundPage.vue'
import DashboardContent from '../components/user/paper/Dashboard/Views/DashboardContent.vue'
import Overview from '../components/user/paper/Dashboard/Views/Overview.vue'
import UserBills from '../components/user/paper/Dashboard/Views/UserBills.vue'
import AdminUsersBills from '../components/user/paper/Dashboard/Views/Admin/UserBills.vue'
import AdminUsers from '../components/user/paper/Dashboard/Views/Admin/Users.vue'
import Commissions from '../components/user/paper/Dashboard/Views/Admin/Commissions.vue'
import Nodes from '../components/user/paper/Dashboard/Views/Admin/Nodes.vue'
import Currency from '../components/user/paper/Dashboard/Views/Admin/Currencies.vue'
import NodeWithdrawals from '../components/user/paper/Dashboard/Views/Admin/NodeWithdrawals.vue'
import MoneyWithdrawals from '../components/user/paper/Dashboard/Views/Admin/MoneyWithdrawals.vue'

Vue.use(Router)

const siteComponenst = (def) => {
  return {
    default: def,
    nav: NavBar,
    footer: FooTer
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'index', components: siteComponenst(Index)},
    {path: '/login', name: 'login', components: siteComponenst(Login)},
    {path: '/login/twofa', name: 'login2fa', components: siteComponenst(Login2fa)},
    {path: '/password/forgot', components: siteComponenst(ForgotPassword)},
    {path: '/password/reset/:token', components: siteComponenst(ResetPassword)},
    {path: '/singup', components: siteComponenst(SingUp)},
    {path: '/faq', components: siteComponenst(Faq)},
    {path: '/contact', components: siteComponenst(Contact)},
    {path: '/terms', name: 'terms', components: siteComponenst(Terms)},
    {
      path: '/user',
      name: 'user',
      component: DashboardLayout,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardContent
        },
        {
          path: 'profile',
          name: 'profile',
          component: UserProfile
        },
        {
          path: 'nodes',
          name: 'nodes',
          component: Masternodes
        },
        {
          path: 'bills',
          name: 'bill',
          component: UserBills
        },
        {
          path: '/admin/users',
          name: 'users',
          component: AdminUsers
        },
        {
          path: '/admin/users/bills',
          name: 'User bills',
          component: AdminUsersBills
        },
        {
          path: '/admin/commissions',
          name: 'Commissions',
          component: Commissions
        },
        {
          path: '/admin/nodes',
          name: 'Masternodes',
          component: Nodes
        },
        {
          path: '/admin/nodes/withdrawals',
          name: 'Node withdrawals',
          component: NodeWithdrawals
        },
        {
          path: '/admin/money/withdrawals',
          name: 'Money withdrawals',
          component: MoneyWithdrawals
        },
        {
          path: '/admin/currencies',
          name: 'Currency',
          component: Currency
        }
      ]
    },
    {path: '/admin/icons', name: 'icons', component: Overview},
    {path: '/email/confirm/:token', component: ConfirmEmail},
    {path: '*', component: NotFoundPage}
  ]
})
