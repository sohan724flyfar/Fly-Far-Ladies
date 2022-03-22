import { Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowForward, } from 'react-icons/io';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MiniPackage from './MiniPackage';
import PassengerInfo from './PassengerInfo';
import TravellerDetails from './TravellerDetails';
import './BookingInput.css'

const BookingInput = () => {
    return (
        <Box>
            {/* Navbar start */}
            <Navbar />
            {/* Navbar start */}

            <Box className='bookingbg' pt={'20'} pb={'20'}>
                {/* booking input main start */}
                <Container maxW={'container.xl'} >
                    <Grid templateColumns={'6fr 4fr'} gap={'10'}>
                        <GridItem>
                            <Box>
                                <Flex alignItems={'center'}>
                                    <Box fontWeight={'bold'} fontSize={'2xl'}>Review your Booking</Box>
                                    <Flex ms={'10'} alignItems={'center'} >
                                        <Text fontSize={'14px'} me={'2'}>Tour selected</Text>
                                        <IoIosArrowForward />
                                        <Text fontSize={'14px'} me={'2'} color={'#FE94A2'}>Review</Text>
                                        <IoIosArrowForward />
                                        <Text fontSize={'14px'}>Make Payment</Text>
                                    </Flex>
                                </Flex>

                                <Box mt={'10'} px={5} py={5} border={'1px solid #FE94A2'} rounded={'md'} bg={'white'}>
                                    <Text fontSize={'2xl'} fontWeight={'bold'}>Haritage resort - Daylong Package</Text>
                                    <Text fontSize={'14px'}>Dhaka, Bnagladesh</Text>


                                </Box>
                            </Box>

                            <Box >
                                <TravellerDetails />
                            </Box>


                        </GridItem>

                        <GridItem>
                            <MiniPackage />
                        </GridItem>
                    </Grid>

                </Container>
                {/* booking input main end */}
            </Box>

            {/* footer start */}
            <Footer />
            {/* footer end */}
        </Box>
    );
};

export default BookingInput;

