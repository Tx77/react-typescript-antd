import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Layout, Tabs } from 'antd';
import ListPayment from '../components/ListPayment';
import ListPreDeliver from '../components/ListPreDeliver';
import ListDelivered from '../components/ListDelivered';
import ListCompleted from '../components/ListCompleted';
import './style.less';

interface Props extends RouteComponentProps {}

function Index(props: Props) {
  return (
    <Layout className="layout">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="待付款订单" key="1">
          <ListPayment />
        </Tabs.TabPane>
        <Tabs.TabPane tab="待发货订单" key="2">
          <ListPreDeliver />
        </Tabs.TabPane>
        <Tabs.TabPane tab="待收货订单" key="3">
          <ListDelivered />
        </Tabs.TabPane>
        <Tabs.TabPane tab="已完成订单" key="4">
          <ListCompleted />
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

export default withRouter(Index);
