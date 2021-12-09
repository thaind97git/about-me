import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { history } from '@/store';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import Layout from '@/layouts';
import PageLoading from '@/components/page-loading';

// multi language
import '@/locales/i18n';

import '@/services/axios-base';

// load swiper styles
import '@/static/css/swiper.min.css';

// load app SCSS styles
import '@/styles/App.scss';

// import '@/static/css/style.css';
import '@/static/fonts/fontawesome-free-5.15.4/css/all.css';

// load Toast styles
import 'react-toastify/dist/ReactToastify.css';

const ReactApp: React.FC = () => {
  return (
    <Router>
      <Helmet titleTemplate="%s - Alden nguyen" defaultTitle="Alden nguyen">
        <meta name="description" content="A simple resume about alden nguyen" />
      </Helmet>

      <ConnectedRouter history={history}>
        <Suspense fallback={<PageLoading show />}>
          <Layout />
          <PageLoading />
        </Suspense>
      </ConnectedRouter>

      <ToastContainer />
    </Router>
  );
};

export default ReactApp;
