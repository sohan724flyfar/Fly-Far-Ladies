import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'

import Package from "./package";

export default class PackageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <Container maxWidth={'container.xl'} >

                <Slider py={'10'} {...settings}   >
                    <div >
                        <Box margin={'4'} >
                            <Package />
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'} >
                            <Package />
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'} >
                            <Package />
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'} >
                            <Package />
                        </Box>
                    </div>
                </Slider>
            </Container>
        );
    }
}





