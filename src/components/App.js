import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// configs
import routes from '../configs/routes';
// components
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Spiner from './Spiner/Spiner';
import Footer from './Footer/Footer';
// pages
import HomePage from '../pages/HomePage';

// styles
// import styles from './App.module.css';

const AsyncBlogPage = lazy(() =>
  import('../pages/AsyncBlogPage' /* webpackChunkName: "blog-page" */),
);

const AsyncServicesPage = lazy(() =>
  import('../pages/AsyncServicesPage' /* webpackChunkName: "services-page" */),
);

const AsyncAboutPage = lazy(() =>
  import('../pages/AsyncAboutPage' /* webpackChunkName: "about-page" */),
);

const AsyncContactsPage = lazy(() =>
  import('../pages/AsyncContactsPage' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <HomePage />
        <Suspense fallback={Spiner}>
          <Switch>
            <Route exact path={routes.MAIN} component={HomePage} />
            <Route exact path={routes.BLOG} component={AsyncBlogPage} />
            <Route exact path={routes.SERVICES} component={AsyncServicesPage} />
            <Route exact path={routes.ABOUT} component={AsyncAboutPage} />
            <Route exact path={routes.CONTACT} component={AsyncContactsPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
