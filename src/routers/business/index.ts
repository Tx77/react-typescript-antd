import { unionPath } from '../util';
import orderChildren from './order/index';
import Home from 'pages/business/Home';

const routes: Array<HxRoute.RouteItem> = [
  {
    path: '/home',
    title: '首页',
    component: Home
  },
  {
    path: '/order',
    title: '订单管理',
    routes: unionPath('/order', orderChildren),
    isMenu: true
  },
  {
    path: '/seller',
    title: '商家管理',
    component: Home,
    isMenu: true
  },
  {
    path: '/express',
    title: '运费管理',
    component: Home,
    isMenu: true
  }
];

export default routes;
