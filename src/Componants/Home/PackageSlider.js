import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'
import secnery from '../../images/Scenery2.png'
import location2 from '../../images/location1.png'
import clock from '../../images/clock.png'

export default class PackageSlider extends Component {
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
                        <Box margin={'4'}>
                            <Flex
                                shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                                rounded="lg"
                                p={3}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx="auto"
                                    rounded="lg"

                                    maxW="2xl"
                                >
                                    <Image
                                        rounded="xl"
                                        w="full"
                                        h={'full'}
                                        fit="cover"
                                        src={secnery}
                                    // border={'1px solid #FE94A2'}


                                    />

                                    <Box p={3}>
                                        <Flex justifyContent={'space-between'}>
                                            <Text fontWeight={'bold'}>Tangor Haor</Text>
                                            <Box sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >BDT 35200</Box>
                                        </Flex>

                                        <Flex alignItems={'center'} mt={'1'} >
                                            <Box display={'inline'}><Image me={'2'} src={location2}></Image></Box>
                                            <Box>
                                                <span >Sunamgang.Bnagladesh</span>
                                            </Box>
                                        </Flex>

                                        <Box fontSize={14} ms={5} mt={'2'} color={'gray.600'}>
                                            <span>Journey Start Date : 01 apr,2022</span> <br />
                                            <span>Journey End Date : 03 apr,2022</span>
                                        </Box>

                                        <Flex alignItems={'center'} mt={'2'} ms={5} >
                                            <Box display={'inline'}><Image me={'2'} src={clock}></Image></Box>
                                            <Box>
                                                <span >2 Days, 3 Nights</span>
                                            </Box>
                                        </Flex>



                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'}>
                            <Flex
                                shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                                rounded="lg"
                                p={3}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx="auto"
                                    rounded="lg"

                                    maxW="2xl"
                                >
                                    <Image
                                        rounded="xl"
                                        w="full"
                                        h={'full'}
                                        fit="cover"
                                        src={secnery}
                                    // border={'1px solid #FE94A2'}


                                    />

                                    <Box p={3}>
                                        <Flex justifyContent={'space-between'}>
                                            <Text fontWeight={'bold'}>Tangor Haor</Text>
                                            <Box sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >BDT 35200</Box>
                                        </Flex>

                                        <Flex alignItems={'center'} mt={'1'} >
                                            <Box display={'inline'}><Image me={'2'} src={location2}></Image></Box>
                                            <Box>
                                                <span >Sunamgang.Bnagladesh</span>
                                            </Box>
                                        </Flex>

                                        <Box fontSize={14} ms={5} mt={'2'} color={'gray.600'}>
                                            <span>Journey Start Date : 01 apr,2022</span> <br />
                                            <span>Journey End Date : 03 apr,2022</span>
                                        </Box>

                                        <Flex alignItems={'center'} mt={'2'} ms={5} >
                                            <Box display={'inline'}><Image me={'2'} src={clock}></Image></Box>
                                            <Box>
                                                <span >2 Days, 3 Nights</span>
                                            </Box>
                                        </Flex>



                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'}>
                            <Flex
                                shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                                rounded="lg"
                                p={3}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx="auto"
                                    rounded="lg"

                                    maxW="2xl"
                                >
                                    <Image
                                        rounded="xl"
                                        w="full"
                                        h={'full'}
                                        fit="cover"
                                        src={secnery}
                                    // border={'1px solid #FE94A2'}


                                    />

                                    <Box p={3}>
                                        <Flex justifyContent={'space-between'}>
                                            <Text fontWeight={'bold'}>Tangor Haor</Text>
                                            <Box sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >BDT 35200</Box>
                                        </Flex>

                                        <Flex alignItems={'center'} mt={'1'} >
                                            <Box display={'inline'}><Image me={'2'} src={location2}></Image></Box>
                                            <Box>
                                                <span >Sunamgang.Bnagladesh</span>
                                            </Box>
                                        </Flex>

                                        <Box fontSize={14} ms={5} mt={'2'} color={'gray.600'}>
                                            <span>Journey Start Date : 01 apr,2022</span> <br />
                                            <span>Journey End Date : 03 apr,2022</span>
                                        </Box>

                                        <Flex alignItems={'center'} mt={'2'} ms={5} >
                                            <Box display={'inline'}><Image me={'2'} src={clock}></Image></Box>
                                            <Box>
                                                <span >2 Days, 3 Nights</span>
                                            </Box>
                                        </Flex>



                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </div>

                    <div >
                        <Box margin={'4'}>
                            <Flex
                                shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                                rounded="lg"
                                p={3}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx="auto"
                                    rounded="lg"

                                    maxW="2xl"
                                >
                                    <Image
                                        rounded="xl"
                                        w="full"
                                        h={'full'}
                                        fit="cover"
                                        src={secnery}
                                    // border={'1px solid #FE94A2'}


                                    />

                                    <Box p={3}>
                                        <Flex justifyContent={'space-between'}>
                                            <Text fontWeight={'bold'}>Tangor Haor</Text>
                                            <Box sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >BDT 35200</Box>
                                        </Flex>

                                        <Flex alignItems={'center'} mt={'1'} >
                                            <Box display={'inline'}><Image me={'2'} src={location2}></Image></Box>
                                            <Box>
                                                <span >Sunamgang.Bnagladesh</span>
                                            </Box>
                                        </Flex>

                                        <Box fontSize={14} ms={5} mt={'2'} color={'gray.600'}>
                                            <span>Journey Start Date : 01 apr,2022</span> <br />
                                            <span>Journey End Date : 03 apr,2022</span>
                                        </Box>

                                        <Flex alignItems={'center'} mt={'2'} ms={5} >
                                            <Box display={'inline'}><Image me={'2'} src={clock}></Image></Box>
                                            <Box>
                                                <span >2 Days, 3 Nights</span>
                                            </Box>
                                        </Flex>



                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </div>
                </Slider>
            </Container>
        );
    }
}





