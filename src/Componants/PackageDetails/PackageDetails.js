import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import Navbar from '../Navbar/Navbar';
import Accordian from './Accordian';
import MultipleSlider from './MultipleSlider';
import overview from '../../images/overview.png'
import location from '../../images/location-accordian.png'
import description from '../../images/description.png'
import timing from '../../images/timing.png'
import inclusion from '../../images/inclusion.png'
import addition from '../../images/additional.png'
import tips from '../../images/tips.png'
import PackageSlider from '../Home/PackageSlider';
import Footer from '../Footer/Footer';
import './packageDetails.css'

const PackageDetails = () => {
    return (
        <Box>
            {/* navbar */}
            <Container maxW={'container.2xl'}>
                <Navbar />
            </Container>
            {/* navbar End */}

            <Box className={'allpackagebg'}>
                {/* main details start */}
                <Container maxW={'container.xl'} pt={'20'}  >
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


                            <Box w={'900px'} mt={'4'} >
                                <MultipleSlider />
                            </Box>

                        </GridItem>


                    </Grid>

                </Container>
                {/* main details end */}

                {/* tabs & accordian start */}
                <Container maxW={'container.xl'} mt={'10'} bg={'white'} >
                    <Box border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2; '} rounded={'md'} p={'2'} >
                        <Tabs>
                            <TabList>
                                <Tab  >Details</Tab>
                                <Tab  >Booking Policy</Tab>
                                <Tab  >Refund Policy</Tab>
                                <Tab >Trems And Conditions</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Grid templateColumns={'8fr 4fr'} gap={10}>
                                        <GridItem>
                                            <Accordian img={overview} title={'OverView'} />

                                            <Accordian mt={'3'} img={location} title={'Location'} />

                                            <Accordian mt={'3'} img={description} title={'Description'} />

                                            <Accordian mt={'3'} img={timing} title={'Timing'} />

                                            <Accordian mt={'3'} img={inclusion} title={'Inclusion & Exclution'} />

                                            <Accordian mt={'3'} img={addition} title={'Additional Information'} />

                                            <Accordian mt={'3'} img={tips} title={'Travel Tips'} />
                                        </GridItem>

                                        <GridItem>
                                            <Box p={'3'} textAlign={'center'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2;'} rounded={'md'}>


                                                <Text fontWeight={'semibold'} >Number Of Passenger</Text>
                                                <Box p={'4'} mt={'3'} w={'80%'} mx={'auto'} border={'1px  solid #FE94A2'} rounded={'md'}>

                                                    <Flex justifyContent={'space-between'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Adult</Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (2-12 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (0-2 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>
                                                </Box>

                                                <Flex w={'80%'} mx={'auto'} mt={'3'} alignItems={'center'} justifyContent={'space-between'}  >
                                                    <Text fontWeight={'semibold'}>Total Passenger</Text>

                                                    <Box px={'10'} border={'1px  solid #FE94A2'} rounded={'md'}>
                                                        <Text >6</Text>
                                                    </Box>

                                                </Flex>

                                                <Box w={'80%'} mx={'auto'} mt={'3'} >
                                                    <Text>Your Total Amount</Text>
                                                    <Text fontWeight={'semibold'}>BDT 3,258</Text>
                                                </Box>

                                                <Box mt={'2'}>
                                                    <Flex fontSize={'15px'}>You Can Book With Minimum Amount <Text ms={'1'} color={'#FE94A2'} fontWeight={'semibold'} >BDT 12567</Text> </Flex>
                                                </Box>

                                                <Button w={'100%'} mt={'3'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Check Out</Button>


                                            </Box>


                                        </GridItem>
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid templateColumns={'8fr 4fr'} gap={10}>
                                        <GridItem>
                                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                                        </GridItem>

                                        <GridItem>
                                            <Box p={'3'} textAlign={'center'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2;'} rounded={'md'}>


                                                <Text fontWeight={'semibold'} >Number Of Passenger</Text>
                                                <Box p={'4'} mt={'3'} w={'80%'} mx={'auto'} border={'1px  solid #FE94A2'} rounded={'md'}>

                                                    <Flex justifyContent={'space-between'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Adult</Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (2-12 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (0-2 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>
                                                </Box>

                                                <Flex w={'80%'} mx={'auto'} mt={'3'} alignItems={'center'} justifyContent={'space-between'}  >
                                                    <Text fontWeight={'semibold'}>Total Passenger</Text>

                                                    <Box px={'10'} border={'1px  solid #FE94A2'} rounded={'md'}>
                                                        <Text >6</Text>
                                                    </Box>

                                                </Flex>

                                                <Box w={'80%'} mx={'auto'} mt={'3'} >
                                                    <Text>Your Total Amount</Text>
                                                    <Text fontWeight={'semibold'}>BDT 3,258</Text>
                                                </Box>

                                                <Box mt={'2'}>
                                                    <Flex fontSize={'15px'}>You Can Book With Minimum Amount <Text ms={'1'} color={'#FE94A2'} fontWeight={'semibold'} >BDT 12567</Text> </Flex>
                                                </Box>

                                                <Button w={'100%'} mt={'3'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Check Out</Button>


                                            </Box>


                                        </GridItem>
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid templateColumns={'8fr 4fr'} gap={10}>
                                        <GridItem>
                                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                                        </GridItem>

                                        <GridItem>
                                            <Box p={'3'} textAlign={'center'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2;'} rounded={'md'}>


                                                <Text fontWeight={'semibold'} >Number Of Passenger</Text>
                                                <Box p={'4'} mt={'3'} w={'80%'} mx={'auto'} border={'1px  solid #FE94A2'} rounded={'md'}>

                                                    <Flex justifyContent={'space-between'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Adult</Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (2-12 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (0-2 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>
                                                </Box>

                                                <Flex w={'80%'} mx={'auto'} mt={'3'} alignItems={'center'} justifyContent={'space-between'}  >
                                                    <Text fontWeight={'semibold'}>Total Passenger</Text>

                                                    <Box px={'10'} border={'1px  solid #FE94A2'} rounded={'md'}>
                                                        <Text >6</Text>
                                                    </Box>

                                                </Flex>

                                                <Box w={'80%'} mx={'auto'} mt={'3'} >
                                                    <Text>Your Total Amount</Text>
                                                    <Text fontWeight={'semibold'}>BDT 3,258</Text>
                                                </Box>

                                                <Box mt={'2'}>
                                                    <Flex fontSize={'15px'}>You Can Book With Minimum Amount <Text ms={'1'} color={'#FE94A2'} fontWeight={'semibold'} >BDT 12567</Text> </Flex>
                                                </Box>

                                                <Button w={'100%'} mt={'3'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Check Out</Button>


                                            </Box>


                                        </GridItem>
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <Grid templateColumns={'8fr 4fr'} gap={10}>
                                        <GridItem>
                                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                                        </GridItem>

                                        <GridItem>
                                            <Box p={'3'} textAlign={'center'} border={'1px  solid #FE94A2'} shadow={'0px 0px 2px #FE94A2;'}>


                                                <Text fontWeight={'semibold'} >Number Of Passenger</Text>
                                                <Box p={'4'} mt={'3'} w={'80%'} mx={'auto'} border={'1px  solid #FE94A2'} rounded={'md'}>

                                                    <Flex justifyContent={'space-between'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Adult</Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (2-12 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>

                                                    <Flex justifyContent={'space-between'} mt={'2'}>
                                                        <Text fontWeight={'semibold'} fontSize={'14px'}>Child (0-2 years) </Text>
                                                        <Flex >
                                                            <Text p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlineMinusSm color='white' /> </Text>

                                                            <Text fontWeight={'semibold'} fontSize={'14px'} ms={'2'}> 2 </Text>

                                                            <Text ms={'2'} p={'1'} bg={'#FE94A2'} cursor={'pointer'}> <HiOutlinePlusSm color='white' /> </Text>
                                                        </Flex>
                                                    </Flex>
                                                </Box>

                                                <Flex w={'80%'} mx={'auto'} mt={'3'} alignItems={'center'} justifyContent={'space-between'}  >
                                                    <Text fontWeight={'semibold'}>Total Passenger</Text>

                                                    <Box px={'10'} border={'1px  solid #FE94A2'} rounded={'md'}>
                                                        <Text >6</Text>
                                                    </Box>

                                                </Flex>

                                                <Box w={'80%'} mx={'auto'} mt={'3'} >
                                                    <Text>Your Total Amount</Text>
                                                    <Text fontWeight={'semibold'}>BDT 3,258</Text>
                                                </Box>

                                                <Box mt={'2'}>
                                                    <Flex fontSize={'15px'}>You Can Book With Minimum Amount <Text ms={'1'} color={'#FE94A2'} fontWeight={'semibold'} >BDT 12567</Text> </Flex>
                                                </Box>

                                                <Button w={'100%'} mt={'3'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Check Out</Button>


                                            </Box>


                                        </GridItem>
                                    </Grid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </Box>
                </Container>
                {/* tabs & accordian end */}


                {/* you may also like start */}
                <Container maxWidth={'container.xl'} mt={'20'} pb={'20'}>
                    <Flex fontSize={'35px'} fontWeight={'semibold'}>You May <Text ms={'2'} color={'#FE94A2'}>Like Also</Text></Flex>

                    <Box mt={'4'} mb={'32'}>
                        <PackageSlider />
                    </Box>
                </Container>
                {/* you may also like end */}

            </Box>


            {/* Footer start */}
            <Footer />
            {/* Footer end */}

        </Box>
    );
};

export default PackageDetails;