import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'
import StockImage from "./StockImage";
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'

export default class StockImageSlider extends Component {
    render() {
        const settings = {
            // className: "center",
            // centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,

        };
        return (
            <Container maxWidth={'container.xl'} >

                <Slider py={'10'} {...settings}   >
                    <div >
                        <Box padding={'5'}>
                            <StockImage img={PhotosOne} />

                        </Box>
                    </div>

                    <div >
                        <Box padding={'5'}>
                            <StockImage img={PhotosTwo} />
                        </Box>
                    </div>

                    <div >
                        <Box padding={'5'}>
                            <StockImage img={photosThree} />
                        </Box>
                    </div>

                    <div >
                        <Box padding={'5'}>
                            <StockImage img={photosFour} />
                        </Box>
                    </div>
                </Slider>
            </Container>
        );
    }
}





