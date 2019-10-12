import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router';
import { HxHeader } from 'components';
import { Layout } from 'antd';
import './style.less';

interface Props extends RouteComponentProps {
  routes?: Array<HxRoute.RouteItem>;
}

function Index(props: Props) {
  const { routes, history } = props;

  useEffect(() => {
    const hash = window.location.hash;
    if (routes && routes.length > 0 && hash === '#/') {
      history.push(routes[0].path);
    }
  }, []);

  return (
    <Layout className="layout">
      <HxHeader routes={routes} />
      <HashRouter>
        {routes &&
          routes.map((router, index) => (
            <Route
              exact={router.exact}
              key={index}
              path={router.path}
              render={(props) => {
                return <router.component {...props} routes={router.routes} />;
              }}
            />
          ))}
      </HashRouter>
    </Layout>
  );
}

export default withRouter(Index);
