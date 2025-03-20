import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ProjectsCarousel.css";

type ProjectsCarouselProps = {
  className: string | undefined;
};

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  className = "",
}) => {
  return (
    <div className={className}>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="/project1_boxing_site_sm.jpg"
            alt="Project 1 Rebels Boxing Website"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="/project2_mutton_design_sm.jpg"
            alt="Project 2 Mutton Brook Redesign"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="/project3_newjeseryparents_site_sm.jpg"
            alt="Project 3 New Jersey Parents' Caucus Website"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="/project4_raymour_site_sm.jpg"
            alt="Project 4 Raymour & Flanigan Website"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
