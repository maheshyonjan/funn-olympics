import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'




// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import UserList from '../components/UserList/UserTable.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Home from '../components/UserSideApp/Home.vue'
// import UserHome from '@/components/UserSideApp/userDashboard/UserHome.vue'


import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    name: "home"
  },
  {
    path: '/livebroadcast',
    name: 'livebroadcast',
    component: () => import('@/components/UserSideApp/LiveBroadcast/LiveBroadcast.vue')
  },
  {
    path: '/sports',
    name: 'sports',
    component: () => import('@/components/UserSideApp/Sports.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/components/UserSideApp/News.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Forms/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/Forms/Register.vue')
  },
  {
    path: '/resetpassword',
    name: 're-set password',
    component: () => import('@/components/Forms/ResetPassword.vue')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import('@/components/UserSideApp/AboutUs.vue')
  },
  {
    path: '/userprofile',
    name: 'userProfilie',
    component: () => import('@/components/UserSideApp/UserProfile/UserProfile.vue')
  },
  {
    path: '/user',
    name: 'userhome',
    component: () => import('@/components/UserSideApp/userDashboard/UserHome.vue'),
    children: [

    ]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'userlist',
        name: 'User List',
        component: UserList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

// const router = new Router({
//   mode: 'history',
//   routes: routes,
// })


/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
