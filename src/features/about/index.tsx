import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import SwiperCore, { Pagination } from 'swiper';
import { selectCurrentUser } from '@/store/slices/authSlice';

import MainLayout from '@/components/main-layout';

import FPT from '@/static/images/clients/fpt.png';
import Wao from '@/static/images/clients/wao.png';
import Dino from '@/static/images/clients/dino.png';

SwiperCore.use([Pagination]);
const About: React.FC = () => {
  const profile = useSelector(selectCurrentUser);
  const params = {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 300,
    grabCursor: true,
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };

  return (
    <MainLayout className="about">
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
      <div className="box-inner box-inner--rounded">
        <h2 className="title title--h3">Clients</h2>
        <Swiper
          containerClass="js-carousel-clients swiper-container swiper-container-horizontal"
          {...params}
        >
          <a href="#">
            <img className="logo" src={FPT} alt="FPT" />
            <label>Fpt Software</label>
          </a>
          <a href="#">
            <img className="logo" src={Wao} alt="Wao" />
            <label>Wao Studio</label>
          </a>
          <a href="#">
            <img className="logo" src={Dino} alt="Dinovative" />
            <label>Dinovative</label>
          </a>
        </Swiper>
      </div>
    </MainLayout>
  );
};

export default About;
