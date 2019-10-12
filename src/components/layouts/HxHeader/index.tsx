import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import './style.less';

const { Header } = Layout;

const logo = require('assets/images/200x60.png');

interface Props extends RouteComponentProps {
  routes?: Array<HxRoute.RouteItem>;
}

function HxHeader(props: Props) {
  const { routes, history } = props;

  function handleSelect({ key }) {
    history.push(`${key}/home`);
  }

  return (
    <Header className="hxHeader">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }} />
      {routes && routes.length > 0 ? (
        <Menu mode="horizontal" defaultSelectedKeys={[routes[0].path]} className="menu" onClick={handleSelect}>
          {routes.map((router) => {
            return router.isMenu ? <Menu.Item key={router.path}>{router.title}</Menu.Item> : null;
          })}
        </Menu>
      ) : null}
    </Header>
  );
}

export default withRouter(HxHeader);
