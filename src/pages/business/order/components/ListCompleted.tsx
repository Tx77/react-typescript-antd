import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Table, Button } from 'antd';
import usePagination from 'hooks/usePagination';
import * as API from '../api';

const Column = Table.Column;

interface Props extends RouteComponentProps {}

function ListCompleted(props: Props) {
  const { history } = props;

  const { loading, list, paginationConfig } = usePagination<Order.OrderItem>(API.fetchOrderPage, { status: 40 });

  function handleDetail(id) {
    history.push(`/business/order/detail/${id}`);
  }

  return (
    <Table dataSource={list} size="middle" rowKey="orderNum" loading={loading} pagination={paginationConfig}>
      <Column title="订单编号" dataIndex="orderNum" />
      <Column title="订单状态" dataIndex="statusText" />
      <Column title="手机号" dataIndex="mobile" />
      <Column title="订单金额" dataIndex="finalPrice" />
      <Column title="下单日期" dataIndex="orderDate" />
      <Column
        title="操作"
        render={(text: string, record: Order.OrderItem) => {
          return <Button onClick={() => handleDetail(record.orderNum)}>查看详情</Button>;
        }}
      ></Column>
    </Table>
  );
}

export default withRouter(ListCompleted);
