import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Clients from "./Clients";

export default class ClientsSlider extends Component {
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
            <div>

                <Slider {...settings}>
                    <div >
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                    <div>
                        <Box padding={'5'}>
                            <Clients />

                        </Box>
                    </div>
                </Slider>
            </div>
        );
    }
}