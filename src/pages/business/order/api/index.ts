import http from 'utils/http';
import { Http } from 'utils/http/interface';

type PromiseResp<T> = Promise<Http.ServerResponse<T>>;
type PromisePageResp<T> = Promise<Http.ServerResponse<common.PageResult<T>>>;

/**
 * 查询订单
 */
export function fetchOrderPage(params: Order.FetchParams): PromisePageResp<Order.OrderItem> {
  // return http.get('/order/getOrderList', { params });
  return new Promise((resolve, reject) => {
    const data = {
      apiStatus: '0',
      data: {
        dataList: [
          { orderNum: '5442134567543', statusText: '待付款', mobile: '234923492394', finalPrice: 134, orderDate: '2019-10-11', status: 10 }
        ],
        pageIndex: 1,
        pageSize: 15,
        total: 0
      },
      info: '订单列表查询成功',
      sysStatus: '0',
      timestamp: 1570781965423
    };
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}
