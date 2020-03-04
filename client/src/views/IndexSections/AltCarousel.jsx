import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class AltCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      slides: [
        {
          offering: "Transformation",
          upper: "Digital",
          img:
            "https://www.abb-conversations.com/wp-content/uploads/2015/11/new-york-540807_1920-1920x800.jpg",
          button: (
            <p className="slider__slide-readmore">
              {" "}
              <Button className="btn-primary mt-4" to="/services" tag={Link}>
                Learn more
              </Button>
            </p>
          )
        },
        {
          offering: "Solutions",
          upper: "Payment",
          img:
            "https://damassets.autodesk.net/content/dam/autodesk/www/solutions/bim/images/stories/the-david-miller-story-story-page-header-1920x800.jpg",
          button: (
            <p className="slider__slide-readmore">
              {" "}
              <Button
                className="btn-primary mt-4"
                to="/products#Banking"
                tag={Link}
              >
                Learn more
              </Button>
            </p>
          )
        },
        {
          offering: "Maintenance",
          upper: "Post-Warranty",
          img:
            "https://atfip-formations.fr/wp-content/uploads/2018/10/technicien-datacenter-1920x800.jpg",
          button: (
            <p className="slider__slide-readmore">
              {" "}
              <Button className="btn-primary mt-4" to="/services" tag={Link}>
                Learn more
              </Button>
            </p>
          )
        }
      ]
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.state.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;

    return (
      <div className={classNames("slider", { "s--ready": sliderReady })}>
        <div className="slider__slides">
          {this.state.slides.map((slide, index) => (
            <div
              style={{
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
              className={classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index
              })}
              key={slide.offering}
            >
              <div className="slider__slide-content">
                <h6 className="slider__slide-subheading">
                  {slide.upper || slide.offering}
                </h6>
                <h4 className="slider__slide-subheading">
                  {slide.offering.split("").map(l => (
                    <span>{l}</span>
                  ))}
                </h4>
                {slide.button}
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        />
      </div>
    );
  }
}

export default AltCarousel;
