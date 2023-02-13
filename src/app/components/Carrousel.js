'use client';

import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider01 from '../assets/slider_01.jpg'
import Slider02 from '../assets/slider_02.jpg'


export default function Carrousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        <div>
          <Link href="#">
            <Image src={Slider01} alt="Slider 01"/>
          </Link>
        </div>
        <div>
          <Link href="#">
            <Image src={Slider02} alt="Slider 02"/>
          </Link>
        </div>
        <div>
          <Link href="#">
            <Image src={Slider01} alt="Slider 01"/>
          </Link>
        </div>
        <div>
          <Link href="#">
            <Image src={Slider02} alt="Slider 02"/>
          </Link>
        </div>
      </Carousel>
    </div>
  )
  
}