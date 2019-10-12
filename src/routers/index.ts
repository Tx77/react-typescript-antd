import Login from 'pages/common/Login';
import Index from 'pages/common/Index/index';
import System from 'pages/common/System/index';
import { unionPath } from './util';
import indexChildren from './business/index';

const routes: Array<HxRoute.RouteItem> = [
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/',
    component: Index,
    routes: [
      {
        path: '/business',
        indexPath: 'home',
        title: '商家系统',
        component: System,
        routes: unionPath('/business', indexChildren),
        isMenu: true
      }
    ]
  }
];

export default routes;
