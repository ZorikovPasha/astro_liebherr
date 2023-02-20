import Slider from 'react-slick'
import React from 'react'
import { SliderNextArrow, SliderPrevArrow } from '../../common/SliderArrows'

const ReviewsCards: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider>()
  const [activeSlide, setActiveSlide] = React.useState(0)

  const reviews = [
    { imgSrc: '/images/reviews/1.jpg' },
    { imgSrc: '/images/reviews/2.jpg' },
    { imgSrc: '/images/reviews/3.jpg' },
    { imgSrc: '/images/reviews/1.jpg' },
    { imgSrc: '/images/reviews/2.jpg' },
    { imgSrc: '/images/reviews/3.jpg' },
    { imgSrc: '/images/reviews/1.jpg' },
    { imgSrc: '/images/reviews/2.jpg' },
    { imgSrc: '/images/reviews/3.jpg' },
    { imgSrc: '/images/reviews/1.jpg' },
  ]

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: false,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} isDisabled={activeSlide === 0} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} isDisabled={activeSlide === reviews.length - 3} />,
    afterChange: (current: number) => setActiveSlide(current),

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Slider className="reviews__items wow animate__animated animate__fadeIn" {...settings} ref={(slider: Slider) => setSlider(slider)}>
      {reviews.map(({ imgSrc }, idx) => (
        <div className="reviews__item" key={idx}>
          <div className="reviews__item-images rel">
            <img src={imgSrc} alt="Карточка отзыва клиента" />
          </div>
        </div>
      ))}
    </Slider>
  )
}
export default ReviewsCards
