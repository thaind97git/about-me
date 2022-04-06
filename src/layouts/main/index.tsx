import React, { useCallback, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '@/apis/profile';
import {
  ILayout,
  selectDisplayLayout,
  setDisplayLayout,
} from '@/store/slices/layoutSlice';
import { selectCurrentUser, setCurrentUser } from '@/store/slices/authSlice';
import { setLoading } from '@/store/slices/appSlice';

import ResumePage from '@/features/resume';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import { compareTwoObject } from '@/utils';
import routes from '@/router';

const Main: React.FC = () => {
  const layout: ILayout = useShallowEqualSelector(selectDisplayLayout);
  const dispatch = useDispatch();
  const location = useLocation();

  const profile = useSelector(selectCurrentUser);

  const isResumePage = location.pathname === '/resume';

  const updateDisplayLayout = (currentLayout: ILayout, layout: ILayout) => {
    const layoutUpdated = currentLayout
      ? { header: !!currentLayout.header, footer: !!currentLayout.footer }
      : { header: true, footer: true };

    if (!compareTwoObject(layoutUpdated, layout)) {
      setTimeout(() => dispatch(setDisplayLayout(layoutUpdated)));
    }
  };

  const fetchProfile = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getProfile();
      dispatch(setCurrentUser(data));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!profile?.id) {
      fetchProfile();
    }
  }, [profile, fetchProfile]);

  return (
    <div id="main" className="main">
      {!isResumePage && <ResumePage hidden />}
      <Switch>
        {routes.map(
          ({
            component: Component,
            path,
            layout: currentLayout,
            ...rest
          }: {
            component: any;
            path: string;
            layout: object;
          }) => {
            return (
              <Route
                key={path}
                path={path}
                render={props => {
                  updateDisplayLayout(currentLayout, layout);
                  /**
                   * Use this code for authorization like admin page
                   */
                  // return (
                  //   <Auth>
                  //     <Component {...props} />
                  //   </Auth>
                  // );
                  return <Component {...props} />;
                }}
                {...rest}
              />
            );
          },
        )}
      </Switch>
    </div>
  );
};

export default Main;
