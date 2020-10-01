import React, { useState } from 'react';
import './carousel.css';
import foto1 from '../../../components/book-images/the5wake.gif'
import foto2 from '../../../components/book-images/susana.gif'
import foto3 from '../../../components/book-images/palm-beach.gif'
import foto4 from '../../../components/book-images/wilder.jpg'
import foto5 from '../../../components/book-images/worldwonders.gif'
import foto6 from '../../../components/book-images/fallout.gif'
import foto7 from '../../../components/book-images/pippa.jpg'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: foto1,
    altText: '',
    caption: ''
  },
  {
    src: foto2,
    altText: '',
    caption: ''
  },
  {
    src: foto3,
    altText: '',
    caption: ''
  },
  {
    src: foto4,
    altText: '',
    caption: ''
  },
  {
    src: foto5,
    altText: '',
    caption: ''
  },
  {
    src: foto6,
    altText: '',
    caption: ''
  },
  {
    src: foto7,
    altText: '',
    caption: ''
  },
];

const Carouserl = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='text-center bg_carousel'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.index+1}
      >
        <img src={item.src} alt={item.altText} className='carousel_img' />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
        className='carousel'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
  );
}

export default Carouserl;