import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import routers from 'routers';
import stores from 'stores';

import 'styles/common.less';

import Test from './test';

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

// function App() {
//   const token = localStorage.getItem('TOKEN');

//   const [redirect, setRedirect] = useState<boolean>(false);

//   useEffect(() => {
//     if (!token || token == null) {
//       setRedirect(true);
//     }
//   }, []);
//   return (
//     <ConfigProvider locale={zhCN}>
//       <Provider {...stores}>
//         <HashRouter>
//           {routers.map((router, index) => (
//             <Route
//               exact={router.exact}
//               key={index}
//               path={router.path}
//               render={(props) => {
//                 return <router.component {...props} routes={router.routes} />;
//               }}
//             />
//           ))}
//           {redirect ? <Redirect to="/login" /> : null}
//         </HashRouter>
//       </Provider>
//     </ConfigProvider>
//   );
// }

declare let module: object;

export default hot(module)(App);
