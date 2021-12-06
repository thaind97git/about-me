import React, { useCallback, useEffect, useState } from 'react';
import MainLayout from '@/components/main-layout';
import { useDispatch } from 'react-redux';
import { IProfile } from 'config/@types/app.d';
import { getProfile } from '@/apis/profile';
import { setLoading } from '@/store/slices/appSlice';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<IProfile>();

  const fetchProfile = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getProfile();
      setProfile(data);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <MainLayout>
      {/* About */}
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          About Me
        </h1>
        {profile && (
          <div dangerouslySetInnerHTML={{ __html: profile.introHtml }} />
        )}
      </div>
      {/* What */}
      <div className="box-inner pb-0">
        <h2 className="title title--h3">{"What I'm Doing"}</h2>
        <div className="what-wrap">
          <div className="what-item">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-dev.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Web Development</h3>
                <p className="case-item__caption">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>
          <div className="what-item">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-app.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Mobile Apps</h3>
                <p className="case-item__caption">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
