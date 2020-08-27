import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Home from './Home';
import Category from './Category';
import Categories from './Categories';
import News from './News';
import Results from './Results';
import Article from './Article';
import Project from './Project';
import NoRoute from './NoRoute';
import Layout from '../components/Layout/Layout';
import About from './About';
import EditProject from './EditProject';

const MainRouter: React.FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Categories} />
        <Route path="/category/:id?" component={Category} />
        <Route exact path="/news" component={News} />
        <Route path="/news/:id?" component={Article} />
        <Route path="/results" component={Results} />
        <Route path="/about" component={About} />
        <Route path="/project/:id" component={Project} />
        <ProtectedRoute
          restrictedPath="/project/:id?/settings"
          authenticationPath="/"
          component={EditProject}
          isAuthenticated
          isAllowed
        />
        {/* <ProtectedRoute */}
        {/*  restrictedPath="/settings/:id?" */}
        {/*  authenticationPath="/" */}
        {/*  component={Settings} */}
        {/*  isAuthenticated */}
        {/*  isAllowed */}
        {/* /> */}
        <Route exact path="/settings" render={() => <Redirect to="/" />} />
        <Route exact path="/project" render={() => <Redirect to="/" />} />
        <Route component={NoRoute} />
      </Switch>
    </Layout>
  </Router>
);

export default MainRouter;
