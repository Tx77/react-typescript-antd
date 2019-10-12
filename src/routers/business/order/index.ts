import OrderIndex from 'pages/business/order/Index';
import OrderDetail from 'pages/business/order/Detail';

const routes: Array<HxRoute.RouteItem> = [
  {
    path: '/list',
    title: '订单列表',
    component: OrderIndex,
    isMenu: true
  },
  {
    path: '/detail/:orderNum',
    title: '订单详情',
    component: OrderDetail
  }
];

export default routes;
