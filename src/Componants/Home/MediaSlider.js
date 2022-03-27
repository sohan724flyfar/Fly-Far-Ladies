import React, { Component } from "react";
import Slider from "react-slick";
import Press from "./Press";
import daily from "../../images/daily.webp";
import jamuna from "../../images/jamuna.webp";
import prothom from "../../images/prothom.webp";
import { Box } from "@chakra-ui/react";
import "./home.css";

export default class MediaSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Box padding={"5"}>
              <Press img={daily} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <Press img={jamuna} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <Press img={prothom} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <Press img={daily} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <Press img={jamuna} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <Press img={daily} />
            </Box>
          </div>
        </Slider>
      </div>
    );
  }
}
