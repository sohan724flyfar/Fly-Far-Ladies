import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowForward } from "react-icons/io";
import Details1 from './Details1';
import Details2 from './Details2';
import Footer from '../Footer/Footer';
import './BookingDetails.css'

const BookingDetails = () => {
    return (
        <Box>
            {/* navbar start */}
            <Navbar />
            {/* navbar end */}

            <Box className='bookingbg' pt={'20'} pb={'20'}>
                {/* review booking start */}
                <Container bg={'white'} maxWidth={'container.lg'}  >

                    <Box border={'1px solid #FE94A2'} px={'5'} py={'4'} >
                        <Flex alignItems={'center'}>
                            <Box fontWeight={'bold'} fontSize={'2xl'}>Review your Booking Detail</Box>
                            <Flex ms={'10'} alignItems={'center'} >
                                <Text fontSize={'16px'}>Tour selected</Text>
                                <IoIosArrowForward />
                                <Text fontSize={'16px'} color={'#FE94A2'}>Review</Text>
                                <IoIosArrowForward />
                                <Text fontSize={'16px'}>Make Payment</Text>
                            </Flex>
                        </Flex>

                        <Box mt={'6'}>
                            <Text color={'#FE94A2'} fontWeight={'bold'} fontSize={'2xl'}>Haritage Resort- Day long Package</Text>
                            <Flex fontWeight={'bold'} fontSize={'16px'} mt={'2'}> Journey Start Date : <Text borderRight={'1px solid #FE94A2'} color={'#FE94A2'} px={'1'} me={'2'}>02-11-2022</Text> Journey Date End Date : <Text borderRight={'1px solid #FE94A2'} color={'#FE94A2'} px={'1'} me={'2'}>02-11-2022</Text> Duration  <Text color={'#FE94A2'} px={'1'} >4 Day 3 Nights</Text>  </Flex>
                        </Box>
                    </Box>

                </Container>
                {/* review booking end */}

                {/* main details start */}
                <Container bg={'white'} maxWidth={'container.lg'} mt={'10'} >
                    <Box border={'1px solid #FE94A2'} px={'5'} py={'4'} pe={'10'}>
                        <Grid templateColumns={'5fr 3fr'} gap={'20'}>
                            <GridItem w={'85%'}>
                                <Details1 title={'Package Detail 1 (Adult) '} name={'Hosenur Rahman'} number={'083283247982'} />

                                <Box mt={'6'}>
                                    <Details1 title={'Package Detail 2 (Adult) '} name={'Mokaram Billah'} number={'083283247982'} />
                                </Box>

                                <Box mt={'6'}>
                                    <Details1 title={'Package Detail 1 (Children) '} name={'Asikur Rahman'} number={'083283247982'} />
                                </Box>

                                <Box mt={'6'}>
                                    <Details1 title={'Package Detail 1 (Infant) '} name={'Kayes Fahim'} number={'083283247982'} />
                                </Box>

                                <Box mt={'6'}>
                                    <Text w={'25%'} color={'#FE94A2'} borderBottom={'1px solid #FE94A2'} >Payment Detail</Text>
                                    <Box mt={'2'} p={'4'} border={'1px solid #FE94A2'} fontWeight={'semibold'}>
                                        <Flex alignItems={'center'} justifyContent={'space-between'} >
                                            <Text fontSize={'16px'}>Adult(1025x2)</Text>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Flex mt={'2'} alignItems={'center'} justifyContent={'space-between'} >
                                            <Text fontSize={'16px'}>Child(1025x2)</Text>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Flex mt={'2'} alignItems={'center'} justifyContent={'space-between'} >
                                            <Text fontSize={'16px'}>Infent(1025x2)</Text>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Text mt={'2'} fontSize={'16px'} color={'#FE94A2'}>Discount : 0</Text>

                                        <Text mt={'1'} fontSize={'16px'} color={'#FE94A2'}>Vat 10% : (learn Detail)</Text>
                                        <Text mt={'1'} fontSize={'16px'} color={'#FE94A2'}>Tax 10% : (learn Detail)</Text>
                                    </Box>
                                    <Flex fontWeight={'semibold'} justifyContent={'space-between'} bg={'#FE94A2'} px={'4'} py={'1'}>
                                        <Flex>
                                            <Text color={'white'}>You pay</Text>
                                            <Box ms={'2'}>
                                                <Text fontSize={'14px'}>(For 7 travelers)</Text>
                                                <Text textAlign={'center'} color={'white'} fontSize={'10px'}>Including Vat & Tax</Text>
                                            </Box>
                                        </Flex>
                                        <Box>
                                            <Box>BDT 30,000</Box>
                                        </Box>


                                    </Flex>
                                    <Checkbox mt={'4'} size='md' colorScheme='brand' >
                                        I Am Agree  With This Trems And Conditions
                                    </Checkbox>


                                </Box>


                            </GridItem>

                            <GridItem w={'90%'} mt={'10'}>
                                <Details2 age={'24'} email={'1234@gmail.com'} />

                                <Box mt={'12'}>
                                    <Details2 age={'25'} email={'1234@gmail.com'} />
                                </Box>

                                <Box mt={'14'}>
                                    <Details2 age={'26'} email={'1234@gmail.com'} />
                                </Box>

                                <Box mt={'14'}>
                                    <Details2 age={'27'} email={'1234@gmail.com'} />
                                </Box>

                                <Box mt={'6'}>

                                    <Text color={'#FE94A2'} fontSize={'16px'} >You can Book with minimum amount </Text>
                                    <Box mt={'2'} p={'4'} border={'1px solid #FE94A2'} fontWeight={'semibold'}>
                                        <Flex alignItems={'center'} justifyContent={'space-between'} >
                                            <Text fontSize={'16px'}>Minimum Payment</Text>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Flex mt={'2'} alignItems={'center'} justifyContent={'space-between'} >
                                            <Box>
                                                <Text fontSize={'16px'}>Second Payment</Text>
                                                <Text fontSize={'10px'} color={'#FE94A2'}>Deadline Before 25 june</Text>
                                            </Box>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Flex mt={'2'} alignItems={'center'} justifyContent={'space-between'} >
                                            <Box>
                                                <Text fontSize={'16px'}>Third Payment</Text>
                                                <Text fontSize={'12px'} color={'#FE94A2'}>Deadline Before 25 june</Text>
                                            </Box>
                                            <Text fontSize={'16px'}>BDT 25634</Text>
                                        </Flex>

                                        <Text mt={'2'} fontSize={'16px'} color={'#FE94A2'}>Payment Deadline Before 22 june </Text>

                                        <Text mt={'1'} fontSize={'16px'} color={'#FE94A2'}>Vat 10% : (learn Detail)</Text>
                                        <Text mt={'1'} fontSize={'16px'} color={'#FE94A2'}>Tax 10% : (learn Detail)</Text>
                                    </Box>
                                    <Flex fontWeight={'semibold'} justifyContent={'space-between'} bg={'#FE94A2'} px={'4'} py={'1'}>
                                        <Flex>
                                            <Text color={'white'}>You pay</Text>
                                            <Box ms={'2'}>
                                                <Text fontSize={'12px'}>(For 7 travelers)</Text>
                                                <Text textAlign={'center'} color={'white'} fontSize={'8px'}>Including Vat & Tax</Text>
                                            </Box>
                                        </Flex>
                                        <Box>
                                            <Box>BDT 30,000</Box>
                                        </Box>


                                    </Flex>



                                </Box>

                            </GridItem>
                        </Grid>

                        <Flex pb={'10'} mt={'10'} w={'90%'} mx={'auto'} justifyContent={'center'} alignItems={'center'}>
                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}  >Proceed To Full Ammount BDT 229388</Button>

                            <Button ms={'8'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}  >Proceed To Minimum Payment BDT 229388</Button>
                        </Flex>
                    </Box>
                </Container >
                {/* main details end */}
            </Box>

            {/* Footer start */}
            <Box  >
                <Footer />
            </Box>
            {/* Footer end */}


        </Box >
    );
};

export default BookingDetails;