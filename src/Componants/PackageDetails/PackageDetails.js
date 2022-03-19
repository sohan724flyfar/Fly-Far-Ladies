import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
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
                    <GridItem  >
                        <Box pb={3} bg={'white'} rounded={'md'} border={'1px solid #FE94A2'} shadow={'0px 0px 3px #FE94A2; '} >
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

                                <Text mt={4} fontWeight={'medium'}>Select Favorite Month</Text>
                                {/* fieldset missing */}
                                <fieldset mt={3} >
                                    <legend>Month</legend>
                                    <Select mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} placeholder='January'>
                                        <option value='option1'>February</option>
                                        <option value='option2'>March</option>
                                        <option value='option3'>April</option>
                                        <option value='option3'>May</option>
                                        <option value='option3'>June</option>
                                        <option value='option3'>July</option>
                                        <option value='option3'>August</option>
                                        <option value='option3'>September</option>
                                        <option value='option3'>October</option>
                                        <option value='option3'>Novermber</option>
                                        <option value='option3'>December</option>
                                    </Select>
                                </fieldset>


                                <Text fontWeight={'medium'} mt={'6'}>
                                    Trip option
                                </Text>

                                <Flex mt={'2'}>
                                    <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}  >Domestic</Button>

                                    <Button ms={'3'} color={'#FE94A2'} _focus={{ 'outline': 'none', }} _hover={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} bg={'white'} bgColor={'transparent'} border={'1px solid #FE94A2'}  >International</Button>

                                </Flex>

                                <Box mt={'3'}>
                                    <Checkbox size='md' colorScheme='brand' >
                                        Day Trip
                                    </Checkbox> <br />
                                    <Checkbox mt={'2'} size='md' colorScheme='brand' >
                                        Night Out
                                    </Checkbox>

                                </Box>

                                <Box>
                                    <Text mt={4} fontWeight={'medium'}>Duration</Text>
                                    <Checkbox mt={2} size='md' colorScheme='brand' >
                                        Less then 1 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        2 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        3 Day
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        5 Day
                                    </Checkbox>

                                </Box>

                                <Box mt={'2'} display={'none'}>
                                    <Text mt={3} fontWeight={'medium'}>Inclusions</Text>
                                    <Checkbox mt={2} size='md' colorScheme='brand' >
                                        Accomodation
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        Meals
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        Transports
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        Seighitseeing
                                    </Checkbox>

                                </Box>

                                <Box mt={'2'} display={'none'}>
                                    <Text mt={3} fontWeight={'medium'}>Budget</Text>
                                    <Checkbox mt={2} size='md' colorScheme='brand' >
                                        Premium
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        Economy
                                    </Checkbox> <br />
                                    <Checkbox mt={3} size='md' colorScheme='brand' >
                                        Super Economy
                                    </Checkbox> <br />
                                </Box>

                            </Box>
                        </Box>


                    </GridItem>

                    <GridItem>
                        <Text fontSize={'2xl'} fontWeight={'semibold'}>Haritage Resort- Daylong package</Text>
                        <Text fontSize={'12px'} >Dhaka, Bangladesh</Text>


                        <Box w={'900px'} mt={'9'} >
                            <MultipleSlider />
                        </Box>

                    </GridItem>


                </Grid>

            </Container>
            {/* main details end */}

            {/* tabs & accordian start */}
            <Container maxW={'container.xl'} mt={'10'} >
                <Box border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2; '} rounded={'md'} p={'2'} >
                    <Tabs>
                        <TabList>
                            <Tab >Details</Tab>
                            <Tab  >Booking Policy</Tab>
                            <Tab  >Refund Policy</Tab>
                            <Tab  >Trems And Conditions</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Grid templateColumns={'8fr 4fr'} gap={10}>
                                    <GridItem>

                                    </GridItem>

                                    <GridItem>
                                        <Box p={'3'} textAlign={'center'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2;'}>
                                            <Text fontWeight={'semibold'} >Number Of Passenger</Text>
                                            <Box p={'4'} mt={'3'} w={'80%'} mx={'auto'} border={'1px  solid #FE94A2'} rounded={'md'}>

                                                <Flex justifyContent={'space-between'}>
                                                    <Text fontWeight={'semibold'} fontSize={'14px'}>Adult</Text>
                                                    <Flex >
                                                        <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm /> </Text>

                                                        <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                        <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm /> </Text>
                                                    </Flex>
                                                </Flex>

                                                <Flex justifyContent={'space-between'} mt={'2'}>
                                                    <Text fontWeight={'semibold'} fontSize={'14px'}>Child (2-12 years) </Text>
                                                    <Flex >
                                                        <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm /> </Text>

                                                        <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                        <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm /> </Text>
                                                    </Flex>
                                                </Flex>

                                                <Flex justifyContent={'space-between'} mt={'2'}>
                                                    <Text fontWeight={'semibold'} fontSize={'14px'}>Child (0-2 years) </Text>
                                                    <Flex >
                                                        <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm /> </Text>

                                                        <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                        <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm /> </Text>
                                                    </Flex>
                                                </Flex>
                                            </Box>


                                        </Box>


                                    </GridItem>
                                </Grid>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
            {/* tabs & accordian end */}

        </Box>
    );
};

export default PackageDetails;