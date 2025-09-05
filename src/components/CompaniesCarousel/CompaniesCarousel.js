import "./CompaniesCarousel.css";
import { useState, useEffect, useRef } from "react";
import { companiesCarouselData } from "../../data/companiesCarouselData";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CompaniesCarousel() {
  const [index, setIndex] = useState(companiesCarouselData.length);
  const [enableTransition, setEnableTransition] = useState(true);
  const itemRef = useRef(null);
  const trackRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  const loopedLogos = [
    ...companiesCarouselData,
    ...companiesCarouselData,
    ...companiesCarouselData,
  ];
  const total = loopedLogos.length;

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth + 32);
    }
  }, []);

  const nextSlide = () => {
    setEnableTransition(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setEnableTransition(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index >= total - companiesCarouselData.length) {
        setEnableTransition(false);
        setIndex(companiesCarouselData.length);
      }
      if (index < companiesCarouselData.length) {
        setEnableTransition(false);
        setIndex(total - companiesCarouselData.length * 2);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [index, total]);

  return (
    <div className="logo-carousel">
      <button onClick={prevSlide} className="arrow left">
        <FaArrowLeftLong />
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${index * itemWidth}px)`,
            transition: enableTransition
              ? "transform 0.5s ease-in-out"
              : "none",
          }}
        >
          {loopedLogos.map((company, i) => (
            <div
              className="carousel-item"
              key={i}
              ref={i === 0 ? itemRef : null}
            >
              <img src={company.img} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="arrow right">
        <FaArrowRightLong />
      </button>
    </div>
  );
}
