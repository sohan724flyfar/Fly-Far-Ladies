import React, { Component } from "react";
import Slider from "react-slick";
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import { Image } from "@chakra-ui/react";

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
            <div>

                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
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
                        <Image src={photosFour} />
                    </div>
                    <div>
                        <Image src={PhotosOne} />
                    </div>
                    <div>
                        <Image src={PhotosTwo} />
                    </div>
                </Slider>

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
                </Slider>
            </div>
        );
    }
}