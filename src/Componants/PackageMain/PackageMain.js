import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import resort from '../../images/resort.png'
import sunrise from '../../images/sunrise.png'
import hiking from '../../images/hiking.png'
import adventure from '../../images/adventurer.png'
import location from '../../images/strength.png'
import PackageHeadCard from './packageHeadCard';
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import FullPackage from './fullPackage';
import Footer from '../Footer/Footer';
import Pagination from './Pagination';

const PackageMain = () => {


    return (
        <Box >
            {/* navbar */}
            <Container maxW={'container.2xl'}>
                <Navbar />
            </Container>
            {/* navbar End */}


            {/* best tour package headline start */}
            <Container maxW={'container.xl'} textAlign={'center'} mt={'20'} >
                <Text fontSize={'4xl'} fontWeight={'bold'} >Best Tour Package</Text>
                <Text mt={'3'}>You can find the best pakage from here and select it and travel <br /> around the wrold!</Text>


                <Grid mt={'10'} templateColumns={'repeat(5,2fr)'} gap={10}>
                    <PackageHeadCard img={adventure} title={'Adventure'} />
                    <PackageHeadCard img={sunrise} title={'Day Out Package'} />
                    <PackageHeadCard img={resort} title={'Attraction and Show'} />
                    <PackageHeadCard img={hiking} title={'Activities & Exprience'} />
                    <PackageHeadCard img={location} title={'Sightseeing & Day Tours'} />
                </Grid>
            </Container>
            {/* best tour package headline end */}


            {/* main package start */}
            <Container maxW={'container.xl'} mt={'20'}  >
                <Grid templateColumns={'3fr 9fr'} gap={'10'} >
                    <GridItem >
                        <Box pb={3} rounded={'md'} border={'1px solid #FE94A2'} shadow={'0px 0px 3px #FE94A2; '} >
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

                                <Box mt={'2'}>
                                    <Text mt={3} fontWeight={'medium'}>Inclusions</Text>
                                    <Checkbox mt={2} size='md' isInvalid colorScheme='brand.100' >
                                        Accomodation
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        Meals
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        Transports
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        Seighitseeing
                                    </Checkbox>

                                </Box>

                                <Box mt={'2'}>
                                    <Text mt={3} fontWeight={'medium'}>Budget</Text>
                                    <Checkbox mt={2} size='md' isInvalid colorScheme='brand.100' >
                                        Premium
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        Economy
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' isInvalid colorScheme='brand.100' >
                                        Super Economy
                                    </Checkbox> <br />
                                </Box>

                            </Box>
                        </Box>


                    </GridItem>

                    <GridItem>
                        <FullPackage img={PhotosOne} /> <br />

                        <FullPackage img={PhotosTwo} /> <br />
                        <FullPackage img={photosThree} /> <br />
                        <FullPackage img={photosFour} /> <br />
                        <FullPackage img={PhotosOne} /> <br />
                        <FullPackage img={PhotosTwo} /> <br />
                        <FullPackage img={photosThree} /> <br />
                        <FullPackage img={photosFour} /><br />
                        <FullPackage img={PhotosTwo} /> <br />
                        <FullPackage img={photosThree} /> <br />


                    </GridItem>


                </Grid>

            </Container>
            {/* main package end */}


            {/* paginaion start */}
            <Pagination />
            {/* paginaion end */}


            {/* footer  start */}
            <Container maxWidth={'container.xl'}>
                <Footer />
            </Container>
            {/* footer  end */}


        </Box>
    );
};

export default PackageMain;