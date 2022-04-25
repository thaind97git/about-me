import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { history } from '@/store';
import { selectCurrentUser } from '@/store/slices/authSlice';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import Layout from '@/layouts';
import SEO from './components/seo';
import PageLoading from '@/components/page-loading';
import env from '@/constants/env';

import { b64toBlob, createObjectURL } from './utils';
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
  const profile = useSelector(selectCurrentUser);
  const [image, setImage] = useState<null | string>();
  const avatar = profile?.avatar;

  useEffect(() => {
    if (avatar && env.enableBlobAvatarSEO) {
      const blob = b64toBlob(avatar.split(',')[1]);
      const blobUrl = createObjectURL(blob);
      setImage(blobUrl);
    }
  }, [avatar]);
  return (
    <Router>
      <SEO imageHeader={image} url={env.originUrl} />

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
