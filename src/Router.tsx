import Layout, { Content } from 'antd/lib/layout/layout';
import Home from 'src/pages/Home';
import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import User from './models/User';

function AuthRoute({ user, component, path } : {
  user: User,
  component: React.LazyExoticComponent<() => JSX.Element>,
  path: string,
}) {
  return (
    user
      ? (
        <Route
          path={path}
          component={component}
        />
      )
      : <Redirect to={{ pathname: '/signin' }} />
  );
}

const Root = () => (
  <Layout style={{
    minHeight: '100vh',
  }}
  >
    <Content>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </Content>
  </Layout>
);
export default Root;
