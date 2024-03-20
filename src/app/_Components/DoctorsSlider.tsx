import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorsReview from "./DoctorsReview";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >

      <DoctorsReview
        image="/images/d2.jpg"
        name="Srikant"
        role="Endocrinologist"
        company="MHARC"
        feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima,
        et eaque ab veniam ipsum adipisci labore molestias eveniet accusamus ipsa"
      />
      <DoctorsReview
        image="/images/d1.png"
        name="Rishav"
        role="Dermatologist"
        company="MHARC"
        feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima,
        et eaque ab veniam ipsum adipisci labore molestias eveniet accusamus ipsa"
      />
      <DoctorsReview
        image="/images/d3.png"
        name="Rose"
        role="Gastroenterologist"
        company="MHARC"
        feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima,
        et eaque ab veniam ipsum adipisci labore molestias eveniet accusamus ipsa"
      />
      <DoctorsReview
        image="/images/d4.webp"
        name="Viren"
        role="Neurologist"
        company="MHARC"
        feedback="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minima,
        et eaque ab veniam ipsum adipisci labore molestias eveniet accusamus ipsa"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
