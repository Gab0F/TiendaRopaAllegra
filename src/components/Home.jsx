import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "src/images/home1.png",
    alt: "home1",
    sub: "our new brand collection",
    heading: "making you feel beautiful",
  },
  {
    img: "src/images/home2.png",
    alt: "home2",
    sub: "get 50% off",
    heading: "modern designs",
  },
  {
    img: "src/images/home3.png",
    alt: "home3",
    sub: "new women collection",
    heading: "unique designs",
  },
];

const Home = () => {
  const circleTextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    // Texto circular en el botón "Explore more"
    const circleText = circleTextRef.current;
    if (circleText) {
      const text = circleText.textContent;
      circleText.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span style="transform: rotate(${i * 28.3}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  useEffect(() => {
    // Añadir clase reveal al slide activo y quitarla al anterior
    const slidesDom = document.querySelectorAll(".home__slide");
    slidesDom.forEach((slide, idx) => {
      if (idx === activeIndex) {
        slide.classList.add("reveal");
      } else {
        slide.classList.remove("reveal");
      }
    });
    prevIndex.current = activeIndex;
  }, [activeIndex]);

  return (
    <section className="section home" id="home">
      <div className="home__content">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={2000}
          allowTouchMove={false}
          className="swiper-wrapper"
          onSlideChange={(swiper) => {
            // Swiper's realIndex is the logical slide index
            setActiveIndex(swiper.realIndex);
          }}
          onAfterInit={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="home__slide swiper-slide">
              <div className="home__image">
                <img src={slide.img} alt={slide.alt} />
              </div>
              <div className="home__description">
                <p className="home__sub-heading">{slide.sub}</p>
                <h1 className="home__heading">{slide.heading}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <a href="#shop" className="home__btn btn shop-btn">
        shop now
      </a>
      <a href="#new" className="home__btn btn go-down-btn">
        <span className="material-symbols-rounded icon">arrow_downward</span>
        <p className="circle-text" ref={circleTextRef}>
          Explore more
        </p>
      </a>
    </section>
  );
};

export default Home;