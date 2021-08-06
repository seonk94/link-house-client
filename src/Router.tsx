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
import Appbar from './modules/Appbar';

const Home = lazy(() => import('src/pages/Home'));
const SignIn = lazy(() => import('src/pages/SignIn'));
const SignUp = lazy(() => import('src/pages/SignUp'));

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
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(userActions.fetchUser());
    }
  }, []);
  return (
    <Layout style={{
      minHeight: '100vh',
    }}
    >
      <Appbar />
      <Content style={{ padding: '24px' }}>
        <Router history={history}>
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
            </Switch>
          </Suspense>
        </Router>
      </Content>
    </Layout>
  );
};
export default Root;
