import Layout, { Content } from 'antd/lib/layout/layout';
import Home from 'src/pages/Home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => (
  <Layout>
    <Content>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Content>
  </Layout>
);
export default Root;
