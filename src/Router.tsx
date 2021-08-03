import Layout, { Content } from 'antd/lib/layout/layout';
import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Spin } from 'antd';
import User from './models/User';
import userActions from './store/module/auth/actions';
import { RootState } from './store';

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

const Root = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(userActions.userFetchRequest());
    }
  }, []);
  return (
    <Layout style={{
      minHeight: '100vh',
    }}
    >
      <Content>
        <BrowserRouter>
          <Suspense fallback={(
            <Row justify="center" align="middle">
              <Spin size="large" />
            </Row>
            )}
          >
            <Switch>
              <AuthRoute exact path="/" user={user} component={Home} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Content>
    </Layout>
  );
};
export default Root;
