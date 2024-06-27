import Swiper from "swiper"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

type AutoplayHandler = (swiper: Swiper) => IntersectionObserverCallback;

const handleAutoplay: AutoplayHandler= (swiper) => (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  });
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}

// Swipers
const swipers = {
  prizesSwiper: () =>
    new Swiper(".prizes-swiper", {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      modules: [Autoplay],
      breakpoints: {
        1280: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
    }),
}

// Prizes Swiper
const prizesSwiper = swipers.prizesSwiper()

const observer = new IntersectionObserver(handleAutoplay(prizesSwiper), observerOptions)

const prizesSwiperElement = document.querySelector(".prizes-swiper") as Element
observer.observe(prizesSwiperElement)
