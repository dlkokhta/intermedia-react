import { useEffect, useRef, useState } from "react";
import styles from "./MobileCarousel.module.css";

import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.png";
import eyeIcon from "../../assets/eye.png";
import stopwatchIcon from "../../assets/stopwatch.png";
import nextArrow from "../../assets/next.png";

const slidesData = [carousel4, carousel1, carousel2, carousel3, carousel5];

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className={styles.caruselSection}>
      <div className={styles.newsArticleHeader}>
        <h1>სიახლეები</h1>
        <div className={styles.newsArticleHeaderLine}></div>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <div className={styles.slides} ref={slidesRef}>
            {slidesData.map((src, i) => (
              <div className={styles.slide} key={i}>
                <img src={src} alt={`Slide ${i + 1}`} />
                <div className={styles.overlayBottom}>
                  <div className={styles.overlayTop}>
                    <h1>
                      ვინ იყო ვახტანგ <br />
                      გორგასლის დედა?
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
              </div>
            ))}
          </div>
        </div>

        <button onClick={handlePrev} className={styles.arrowLeft}>
          <img src={nextArrow} alt="Previous" />
        </button>
        <button onClick={handleNext} className={styles.arrowRight}>
          <img src={nextArrow} alt="Next" />
        </button>
      </div>

      <div className={styles.dots}>
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileCarousel;
