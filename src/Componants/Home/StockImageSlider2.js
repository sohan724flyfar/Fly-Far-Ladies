import React, { Component } from "react";
import Slider from "react-slick";
import StockImage from "./StockImage";
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import { Box } from "@chakra-ui/react";

export default class StockImageSlider2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>

                <Slider {...settings}>
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
                    <div >
                        <Box padding={'5'}>
                            <StockImage img={PhotosTwo} />

                        </Box>
                    </div>
                </Slider>
            </div>
        );
    }
}