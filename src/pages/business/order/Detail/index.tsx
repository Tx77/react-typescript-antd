import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Layout, Row, Col, Button } from 'antd';
import * as API from '../api';
import './style.less';
import Title from 'antd/lib/typography/Title';

interface Props extends RouteComponentProps {}

function Index(props: Props) {
  const { match } = props;
  const params: any = match.params;

  const [visible, setVisible] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<number>(0);
  const [orderProperties, setOrderProperties] = useState<Array<any>>([]);
  const [orderGoods, setOrderGoods] = useState<Array<any>>([]);
  const [orderRefundProperties, setOrderRefundProperties] = useState<Array<any>>([]);
  const [deliveryInfos, setDeliveryInfos] = useState<Array<any>>([]);
  const [deliverEditInfo, setDeliverEditInfo] = useState<any>({});

  return (
    <Layout className="layout">
      <Row type="flex">
        <Col span={12} className="flexRow">
          <Button>返回列表</Button>
          <Title level={3} type="secondary">
            待付款
          </Title>
        </Col>
        <Col span={12} className="flexRowRight">
          Col
        </Col>
      </Row>
      <h1>这是订单详情</h1>
    </Layout>
  );
}

export default withRouter(Index);
