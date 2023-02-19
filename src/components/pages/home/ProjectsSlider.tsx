import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider, { Settings } from 'react-slick'

import { SliderNextArrow, SliderPrevArrow } from '../../../components/common/SliderArrows'
import { ConstructionType } from '../../../types/dataTypes'
import { ROUTES } from '../../../utils/const'

interface ISliderProps {
  items: ConstructionType[]
}

const ProjectsSlider: React.FC<ISliderProps> = ({ items }) => {
  const projectsThumbsSettings: Settings = {
    slidesToShow: 5,
    variableWidth: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1631,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },

      {
        breakpoint: 571,
        settings: {
          slidesToShow: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  }

  const [projectsSliderNav, setProjectsSliderNav] = React.useState<Slider>()
  const [thumbsNav, setThumbsNav] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const ProjectSliderSettings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderPrevArrow onClick={thumbsNav?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={thumbsNav?.slickNext} isDisabled={activeSlide === items.length - 1} />,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 571,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  const previews = items?.reduce((accum: string[], { preview }) => [...accum, preview], [])

  return (
    <section className="projects">
      <div className="container-fluid">
        <div className="projects__inner rel">
          <div className="container">
            <h2 className="projects__title">Реализованные проекты</h2>
          </div>

          <div className="projects-nav-wrapper">
            <Slider {...projectsThumbsSettings} className="projects-nav" asNavFor={projectsSliderNav} ref={(slider1: Slider) => setThumbsNav(slider1)}>
              {previews?.map((src, idx) => (
                <div className="projects-nav__item" key={src + idx}>
                  <div className="projects-nav__img-wrapper">
                    <div className="projects-nav__img">
                      <Image src={src} layout="fill" alt="Стройка с использованием кранов" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="projects-nav__line"></div>
          </div>

          <div className="projects-slider-wrapper">
            <Slider {...ProjectSliderSettings} className="projects-slider" asNavFor={thumbsNav} ref={(slider2: Slider) => setProjectsSliderNav(slider2)}>
              {items?.map(({ title, location, text, id, preview }) => (
                <div className="projects-slider__item" key={id}>
                  <div className="projects-slider__inner flex">
                    <div className="projects-slider__images">
                      <div className="projects-slider__img">
                        <Image src={preview} layout="fill" alt="Стройка с использованием кранов" />
                      </div>
                    </div>
                    <div className="projects-slider__info">
                      <p className="projects-slider__item-title">{title}</p>
                      <p className="projects-slider__item-location rel after">{location}</p>
                      <p className="projects-slider__item-text">{text}</p>
                      <Link href={ROUTES.OBJECTS + id}>
                        <a className="projects-slider__item-link rel after">Подробнее</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSlider
