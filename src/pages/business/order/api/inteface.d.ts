declare namespace Order {
  /**
   * 查询参数
   */
  interface FetchParams extends common.PageParams {
    status?: number;
  }

  /**
   * 登录结果
   */
  interface OrderItem {
    orderNum: string;
    statusText: string;
    mobile: string;
    finalPrice: number;
    orderDate: string;
    status: number;
  }
}
