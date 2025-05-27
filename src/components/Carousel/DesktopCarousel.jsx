import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";
import nextArrow from "../../assets/next.png";

import styles from "./DesktopCarousel.module.css";

import carousel1 from "../../assets/carousel1.webp";
import carousel2 from "../../assets/carousel2.webp";
import carousel3 from "../../assets/carousel3.webp";
import carousel4 from "../../assets/carousel4.webp";
import carousel5 from "../../assets/carousel5.webp";
import carousel6 from "../../assets/carousel6.webp";

import eyeIcon from "../../assets/eye.png";
import stopwatchIcon from "../../assets/stopwatch.png";

const slides = [
  carousel4,
  carousel1,
  carousel2,
  carousel3,
  carousel5,
  carousel6,
];

const DesktopCarousel = () => {
  return (
    <section className={styles.caruselSection}>
      {/* <div className={styles.newsArticleHeader}>
        <h1>რეიტინგული სტატიები</h1>
        <div className={styles.newsArticleHeaderLine}></div>
      </div> */}

      <div className={styles.desktopCarouselTitle}>
        <h1>რეიტინგული სტატიები</h1>
        <div className={styles.titleLine}></div>
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`}>
        <img src={nextArrow} alt="Previous" />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`}>
        <img src={nextArrow} alt="Next" />
      </button>

      <div className={styles.container}>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          className={`tranding-slider ${styles.swiper}`}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="2.5"
          loop={true}
          initialSlide={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: `.${styles.arrowRight}`,
            prevEl: `.${styles.arrowLeft}`,
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <img src={img} alt={`Slide ${index + 1}`} />
              <div className={styles.overlayBottom}>
                <div className={styles.overlayTop}>
                  <h1>
                    ვინ იყო ვახტანგ გორგასლის
                    <br />
                    დედა?
                  </h1>
                </div>
                <div className={styles.overlayBottomInfo}>
                  <div className={styles.infoItem}>
                    <img src={eyeIcon} alt="Views" />
                    <span>180,000 ნახვა</span>
                  </div>
                  <div className={styles.infoItem}>
                    <img src={stopwatchIcon} alt="Time" />
                    <span>3 წუთის საკითხავი</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DesktopCarousel;
