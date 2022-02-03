import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter, Redirect, Route, Router, Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Spin } from 'antd';
import { History } from 'history';
import User from './models/User';
import userActions from './store/module/auth/actions';
import Appbar from './components/modules/Appbar';
import { statusService } from './services/status';
import { getToken } from './libs/helper';

const Home = lazy(() => import('src/pages/Home'));
const SignIn = lazy(() => import('src/pages/SignIn'));
const SignUp = lazy(() => import('src/pages/SignUp'));
const FindPassword = lazy(() => import('src/pages/FindPassword'));
const InitPassword = lazy(() => import('src/pages/InitPassword'));

function AuthRoute({
  user, component, path, exact,
} : {
  user: User | null,
  exact: boolean,
  component: React.LazyExoticComponent<() => JSX.Element>,
  path: string,
}) {
  return (
    user
      ? (
        <Route
          exact={exact}
          path={path}
          component={component}
        />
      )
      : <Redirect to={{ pathname: '/signin' }} />
  );
}

const Root = ({ history } : { history: History }) => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    statusService.getStatus();
  };

  useEffect(() => {
    checkStatus();

    const token = getToken();
    if (token) {
      dispatch(userActions.fetchUser());
    }
  }, []);

  return (
    <Router history={history}>
      <Layout style={{
        minHeight: '100vh',
      }}
      >
        <Appbar />
        <Content style={{ padding: '24px', marginTop: '64px' }}>

          <Suspense fallback={(
            <Row justify="center" align="middle">
              <Spin size="large" />
            </Row>
            )}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/find-password" component={FindPassword} />
              <Route exact path="/init-password" component={InitPassword} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Router>
  );
};
export default Root;
