import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  showHeader?: boolean
  title?: string
  description?: string
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  showHeader = false,
  title = "Our Services",
  description = "Specialized therapy services for every child.",
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 400px;
  }
  
  .swiper-slide > div {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #00686B;
    background: rgba(4, 138, 122, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(4, 138, 122, 0.2);
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 20px;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(4, 138, 122, 0.2);
  }
  
  .swiper-pagination-bullet {
    background: #00686B;
    opacity: 0.5;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  `
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-cosmic-700/10 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-cosmic-700/10 bg-cosmic-700/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          {showHeader && (
            <>
              <Badge
                variant="outline"
                className="absolute left-4 top-6 rounded-[14px] border border-cosmic-700/20 text-base md:left-6 bg-cosmic-700/10 text-cosmic-700"
              >
                <SparklesIcon className="fill-cosmic-700/80 stroke-1 text-cosmic-700" />{" "}
                {title}
              </Badge>
              <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
                <div className="flex gap-2">
                  <div>
                    <h3 className="text-4xl opacity-85 font-bold tracking-tight text-cosmic-700">
                      {title}
                    </h3>
                    <p className="text-cosmic-700/90">{description}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                      <img
                        src={image.src}
                        className="w-full h-full rounded-xl object-cover"
                        alt={image.alt}
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

