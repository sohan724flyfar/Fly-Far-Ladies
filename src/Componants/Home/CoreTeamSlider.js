import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import CoreTeam from "./CoreTeam";
import member1 from "../../images/member1.webp";
import member2 from "../../images/member2.webp";
import member3 from "../../images/member4.webp";
import member4 from "../../images/member1.webp";
import "./home.css";

export default class CoreTeamSlider extends Component {
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
              <CoreTeam img={member1} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member2} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member3} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member4} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member1} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member2} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member3} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member2} />
            </Box>
          </div>
          <div>
            <Box padding={"5"}>
              <CoreTeam img={member1} />
            </Box>
          </div>
        </Slider>
      </div>
    );
  }
}
