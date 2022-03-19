import React, { Component } from "react";
import Slider from "react-slick";
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import { Box, Image } from "@chakra-ui/react";

export default class MultipleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <Box width={'100%'} mx={'auto'} >

                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={PhotosOne} height={'400px'} width={'1006px'} />
                    </div>
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={PhotosTwo} height={'400px'} width={'1006px'} />
                    </div>
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={photosThree} height={'400px'} width={'1006px'} />
                    </div>
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={photosFour} height={'400px'} width={'1006px'} />
                    </div>
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={PhotosOne} height={'400px'} width={'1006px'} />
                    </div>
                    <div>
                        <Image border={'2px  solid #FE94A2'} rounded={'md'} src={PhotosTwo} height={'400px'} width={'1006px'} />
                    </div>
                </Slider>

                <Box mt={'2'} pt={'2.5'} pb={'1'} px={'42'} bg={'white'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2; '} rounded={'md'}
                >
                    <Slider

                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={6}
                        swipeToSlide={true}
                        focusOnSelect={true}

                    >
                        <div>
                            <Image src={PhotosTwo} />
                        </div>
                        <div>
                            <Image src={photosThree} />
                        </div>
                        <div>
                            <Image src={photosFour} />
                        </div>
                        <div>
                            <Image src={PhotosOne} />
                        </div>
                        <div>
                            <Image src={PhotosTwo} />
                        </div>
                        <div>
                            <Image src={photosThree} />
                        </div>
                        <div>
                            <Image src={photosThree} />
                        </div>
                    </Slider>
                </Box>
            </Box>
        );
    }
}