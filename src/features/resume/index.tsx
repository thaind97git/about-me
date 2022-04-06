import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/store/slices/appSlice';
import {
  selectCurrentUser,
  selectResumes,
  setResumes,
} from '@/store/slices/authSlice';
import { getResumeLst } from '@/apis/resume';

import MainLayout from '@/components/main-layout';
import RightContent from './right-content';
import { ensureArray } from '@/utils';
import { Resume } from './@types';
import EmptyRecord from '@/components/empty-record';

interface IProps {
  hidden?: boolean;
}

const ResumePage: React.FC<IProps> = ({ hidden = false }) => {
  const dispatch = useDispatch();
  const resumes = useSelector(selectResumes);

  const profile = useSelector(selectCurrentUser);

  const fetchResumeLst = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      if (resumes?.length > 0) {
        return resumes;
      }
      const { data } = await getResumeLst();
      dispatch(setResumes(data));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, resumes]);

  useEffect(() => {
    fetchResumeLst();
  }, [fetchResumeLst]);

  const content = (
    <div className="resume" id="cv">
      <div className="resume__header">
        <div className="resume__header--left">
          {[profile?.lastName, profile?.middleName, profile?.firstName]
            .filter(Boolean)
            .join(' ')}
        </div>
        <div className="resume__header--right">
          <span>{profile?.email}</span>
          <br />
          <span>{profile?.phone}</span>
          <br />
          <span>{profile?.address}</span>
        </div>
      </div>
      {ensureArray(resumes).map((resume: Resume) => {
        return (
          <section key={resume.id} className="resume__section">
            <div className="resume__section--left">{resume.title}</div>
            <div className="resume__section--right">
              <RightContent sections={resume.sections} />
            </div>
          </section>
        );
      })}
    </div>
  );

  if (hidden) {
    return <div className="resume-hidden">{content}</div>;
  }

  if (!resumes?.length) {
    return (
      <MainLayout>
        <EmptyRecord />
      </MainLayout>
    );
  }

  return <MainLayout>{content}</MainLayout>;
};

export default ResumePage;
