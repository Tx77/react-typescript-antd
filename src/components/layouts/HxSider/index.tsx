import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import './style.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface Props extends RouteComponentProps {
  routes?: Array<HxRoute.RouteItem>;
}

function HxSider(props: Props) {
  const { routes, history } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  function handleToggle() {
    setCollapsed(!collapsed);
  }

  function handleSelect({ key }) {
    history.push(key);
  }

  return (
    <Sider className="sider" trigger={null} collapsedWidth={80} collapsible collapsed={collapsed}>
      <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleToggle} />
      {routes && routes.length > 0 ? (
        <Menu mode="inline" onClick={handleSelect}>
          {routes.map((router) => {
            if (router.component) {
              return router.isMenu ? <Menu.Item key={router.path}>{router.title}</Menu.Item> : null;
            } else {
              return (
                <SubMenu key={router.path} title={router.title}>
                  {router.routes &&
                    router.routes.map((item) => {
                      return item.isMenu ? <Menu.Item key={item.path}>{item.title}</Menu.Item> : null;
                    })}
                </SubMenu>
              );
            }
          })}
        </Menu>
      ) : null}
    </Sider>
  );
}

export default withRouter(HxSider);
