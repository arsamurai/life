import Swiper from "swiper"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

const swipers = {
  prizesSwiper: () =>
    new Swiper(".prizes-swiper", {
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
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

swipers.prizesSwiper()
