import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Navbar from '../Navbar/Navbar';
import MultipleSlider from './MultipleSlider';

const PackageDetails = () => {
    return (
        <Box>
            {/* navbar */}
            <Container maxW={'container.2xl'}>
                <Navbar />
            </Container>
            {/* navbar End */}

            {/* main details start */}
            <Container maxW={'container.xl'} mt={'20'}  >
                <Grid templateColumns={'3fr 9fr'} gap={'10'} >
                    <GridItem >
                        <Flex alignItems={'center'} fontSize={'16px'} fontWeight={'semibold'}><IoIosArrowBack me={'2'} /> Show all tours</Flex>

                        <Box mt={'16'} pb={3} rounded={'md'} border={'1px solid #FE94A2'} shadow={'0px 0px 3px #FE94A2; '} >
                            <Text p={3} borderBottom={'1px solid gray'} fontWeight={'semibold'}>Fliter</Text>


                            <Box p={'3'}>
                                <Text fontWeight={'medium'}>Price Range</Text>
                                <Slider w={'98%'} aria-label='slider-ex-2' colorScheme={'#FE94A2'} defaultValue={10}>
                                    <SliderTrack >
                                        <SliderFilledTrack bg={'#FE94A2'} />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Flex fontSize={'12px'} justifyContent={'space-between'}>
                                    <Text>BDT 0</Text>
                                    <Text>BDT 20325</Text>
                                </Flex>

                                <Text mt={3} fontWeight={'medium'}>Select Favorite Month</Text>
                                {/* fieldset missing */}


                                <Text>
                                    Trip option
                                </Text>

                                <Flex mt={'2'}>
                                    <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}  >Domestic</Button>

                                    <Button ms={'3'} color={'#FE94A2'} _focus={{ 'outline': 'none', }} _hover={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} bg={'white'} bgColor={'transparent'} border={'1px solid #FE94A2'}  >International</Button>

                                </Flex>

                                <Box mt={'3'}>
                                    <Checkbox size='md' isInvalid colorScheme='brand.100' >
                                        Day Trip
                                    </Checkbox> <br />
                                    <Checkbox mt={'2'} size='md' isInvalid colorScheme='brand.100' >
                                        Night Out
                                    </Checkbox>

                                </Box>

                                <Box>
                                    <Text mt={3} fontWeight={'medium'}>Duration</Text>
                                    <Checkbox mt={2} size='md' isInvalid colorScheme='brand.100' >
                                        Less then 1 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        2 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        3 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        5 Day
                                    </Checkbox>

                                </Box>





                            </Box>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Text fontSize={'2xl'} fontWeight={'semibold'}>Haritage Resort- Daylong package</Text>
                        <Text fontSize={'12px'} >Dhaka, Bangladesh</Text>
                        <Box mt={'3'}>
                            {/* <MultipleSlider /> */}
                        </Box>

                    </GridItem>


                </Grid>

            </Container>


        </Box>
    );
};

export default PackageDetails;