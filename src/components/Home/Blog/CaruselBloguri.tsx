"use client";



import dateBlog from "./dateBlog";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardBlog from "./CardBlog";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CaruselBloguri = () => {
  return (
    <div className="flex w-full relative mx-6">
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}

        className="py-2 "
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="mx-2"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderButtonGroupOutside={true}
        renderArrowsWhenDisabled={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        centerMode
      >

        {dateBlog.map(({ id, data, titlu, continut }) =>

        (
          <CardBlog data={data} titlu={titlu} continut={continut} id={id} key={id} />

        )
        )}
      </Carousel>
    </div>
  );
};



export default CaruselBloguri;