
import { Box, Button, Checkbox, Container, Flex, Grid, GridItem, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, Radio, RadioGroup, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import PhotosOne from '../../images/Photos1.webp'
import PhotosTwo from '../../images/photos2.webp'
import photosThree from '../../images/photos5.webp'
import photosFour from '../../images/photos4.webp'
import wishlist from '../../images/wishlist.webp'
import avatar from '../../images/avatar.webp';
import StockImageMain from '../StockImage/StockImageMain';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import PackageSlider from '../Home/PackageSlider';
import Footer from '../Footer/Footer';
import './SingleStockimage.css'
import { Link } from 'react-router-dom';

const SingleStockImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [radioValue, setRadioValue] = useState('xs')

  console.log(radioValue)

  return (
    <Box>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}


      {/* main stock photos start */}
      <Box className={'SingleStockImage'}>
        <Container maxW={'container.xl'} pt={'10'}   >
          <Image w={'full'} h={'600px'} src={photosThree} />

          <Flex mt={'5'} alignItems={'center'} justifyContent={'center'} >
            <Button bg={'white'} border={'1px solid #FE94A2'} rounded={'full'}  >
              {/* _hover={{ bg: '1px solid #FE94A2', color: 'white' }} */}
              <Flex alignItems={'center'} ><Image me={'1'} w={'40px'} src={wishlist} /> wish list </Flex>
            </Button>

            <Button onClick={onOpen} ms={'4'} px={'5'} rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Download Now</Button>



            <Modal blockScrollOnMount={false} size='6xl' isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent >
                <ModalCloseButton />
                <ModalBody py={'14'} px={'14'}  >
                  <Grid templateColumns='1fr 1fr' gap={'10'}>
                    <GridItem>
                      <Text fontSize={'2xl'} fontWeight={'semibold'}>PURCHASE A LICENSE</Text>
                      <Text mt={'2'} fontWeight={'light'} fontSize={'14px'}>
                        All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available

                      </Text>
                      <Box mt={'5'} border={'1px solid #FE94A2'} rounded={'sm'}>

                        <RadioGroup defaultValue='1'>
                          <Stack>
                            <Box borderBottom={'1px solid #FE94A2'}>
                              <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box onClick={() => setRadioValue('xs')}>
                                  <Radio
                                    name='radio'
                                    colorScheme='brand' value='1' >
                                    Extra Small
                                  </Radio>
                                </Box>
                                <Box>$58</Box>
                              </Flex>
                              {
                                radioValue === 'xs' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                  72 dpi|0.2 MP</Text>
                              }


                            </Box>

                            <Box borderBottom={'1px solid #FE94A2'}>
                              <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box onClick={() => setRadioValue('sm')}>
                                  <Radio
                                    name='radio'
                                    colorScheme='brand' value='2'
                                  >
                                    Small
                                  </Radio>
                                </Box>
                                <Box>$2,456</Box>
                              </Flex>
                              {
                                radioValue === 'sm' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                  72 dpi|0.2 MP</Text>
                              }

                            </Box>

                            <Box borderBottom={'1px solid #FE94A2'}>
                              <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box onClick={() => setRadioValue('md')}>
                                  <Radio
                                    name='radio'
                                    colorScheme='brand' value='3'
                                  >
                                    Medium
                                  </Radio>
                                </Box>
                                <Box>$2456</Box>
                              </Flex>
                              {
                                radioValue === 'md' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                  72 dpi|0.2 MP</Text>
                              }

                            </Box>

                            <Box>
                              <Flex px={'5'} py={'4'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box onClick={() => setRadioValue('lg')}>
                                  <Radio
                                    name='radio'
                                    colorScheme='brand' value='4' >
                                    Large
                                  </Radio>
                                </Box>
                                <Box>$2456</Box>
                              </Flex>
                              {
                                radioValue === 'lg' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                  72 dpi|0.2 MP</Text>
                              }

                            </Box>
                          </Stack>
                        </RadioGroup>


                      </Box>

                      <Box mt={'4'}>
                        <Text fontWeight={'semibold'}>Privacy and policy</Text>
                        <Text fontSize={'14px'} fontWeight={'light'}>Placeholder text commonly used to demonstrate the visual form ofa document or a typeface without relying on meaningful content.</Text>
                      </Box>

                      <Box mt={'3'}>
                        <Checkbox size='md' colorScheme='brand' fontWeight={'semibold'} >
                          Placeholder text commonly used to demonstrate.
                        </Checkbox> <br />
                        <Checkbox mt={'2'} size='md' colorScheme='brand' fontWeight={'semibold'}  >
                          Placeholder text commonly used to demonstrate.
                        </Checkbox>
                      </Box>

                      <Box mt={'4'} textAlign={'center'}>
                        <Button rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}>Buy And Download</Button>

                        <Box mt={'2'} textAlign={'center'}>
                          <Text cursor={'pointer'} color={'#FE94A2'}>Cancel</Text>
                        </Box>
                      </Box>
                    </GridItem>

                    <GridItem>
                      <Text fontWeight={'semibold'} fontSize={'2xl'} >PURCHASE A YEARLY OR MONTHLY SUBSCRIPTION</Text>
                      <Text mt={'2'} fontWeight={'light'} fontSize={'14px'} >All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available.
                      </Text>

                      <Box mt={'4'} >
                        <Flex alignItems={'center'} p={'3'} justifyContent={'space-between'} rounded={'sm'} border={'1px solid #FE94A2'}>
                          <Box>
                            <Text fontSize={'14px'} >Yearly Unilimited Subscription</Text>

                            <Flex alignItems={'center'} mt={'2'} >
                              <Text fontWeight={'bold'} >$180</Text>
                              <Text px={'1'} ms={'2'} rounded={'full'} bg={'green.300'} >
                                Save 30%
                              </Text>
                            </Flex>
                          </Box>

                          <Button ms={'4'} px={'5'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Subscribe Now</Button>

                        </Flex>
                      </Box>

                      <Box mt={'4'} >
                        <Flex alignItems={'center'} p={'3'} justifyContent={'space-between'} rounded={'sm'} border={'1px solid #FE94A2'}>
                          <Box>
                            <Text fontSize={'14px'} >Yearly Unilimited Subscription</Text>

                            <Flex alignItems={'center'} mt={'2'} >
                              <Text fontWeight={'bold'} >$180</Text>
                            </Flex>
                          </Box>

                          <Button ms={'4'} px={'5'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Subscribe Now</Button>

                        </Flex>
                      </Box>


                      <Box mt={'8'}>
                        <Text fontWeight={'semibold'}>What you will get?</Text>


                        <OrderedList mt={'3'}>
                          <ListItem fontSize={'14px'} >Unlimited photo, vector, & video downloads</ListItem>
                          <ListItem fontSize={'14px'} mt={'2'}>Full commercial rights</ListItem>
                          <ListItem fontSize={'14px'} mt={'2'}>Exclusive access to bundles</ListItem>
                          <ListItem fontSize={'14px'} mt={'2'}>Priority Support</ListItem>
                          <ListItem fontSize={'14px'} mt={'2'}>Faster Downloads & No ads</ListItem>
                        </OrderedList>

                        <Text fontSize={'14px'} cursor={'pointer'} mt={'4'} color={'#FE94A2'}>More many thing you will get!</Text>
                      </Box>


                    </GridItem>

                  </Grid>
                </ModalBody>


              </ModalContent>
            </Modal>
          </Flex>

          <Box bg={'white'} mt={'10'} border={'1px solid #FE94A2 '} rounded={'md'}>
            <Grid templateColumns={'2fr 1fr'} pt={'6'} pb={'3'} px={'6'} gap={'10'}>
              <GridItem>
                <Text fontWeight={'semibold'}>Ukrine flag large national symbol fultteing in blue sky,large yellow blue ukrinean state flag,Dnipro city,independence.</Text>

                <Text mt={'4'} fontSize={'14px'} fontWeight={'semibold'}>
                  Image description
                </Text>
                <Text fontWeight={'light'} mt={'2'} fontSize={'14px'}>
                  Our press team loves working with journerlist the world to store compeling,unique stories if you are member <br /> of the media and woud like to talk place get in touch
                </Text>
              </GridItem>

              <GridItem>
                <Text fontSize={'14px'} fontWeight={'semibold'}>
                  Contributor
                </Text>

                <Flex alignItems={'center'} mt={'2'}>
                  <Image src={avatar} />

                  <Text fontWeight={'semibold'} ms={'3'} fontSize={'12px'}> Kayes Fahim</Text>
                </Flex>

                <Text mt={'3'} fontSize={'14px'} fontWeight={'semibold'}>
                  Format
                </Text>
                <Text mt={'3'} textAlign={'center'} width={'90%'} rounded={'sm'} border={'1px solid #FE94A2'} p={'1'} fontSize={'12px'}>
                  4548 x 3098 pixles, 15.5 x 10.3 in ,DPI 300, JPG
                </Text>

                <Text textAlign={'center'} width={'90%'} mt={'2'} rounded={'sm'} border={'1px solid #FE94A2'} p={'1'} fontSize={'12px'}>
                  4548 x 667 pixles, 5.5 x 1.3 in ,DPI 300, JPG
                </Text>
              </GridItem>

            </Grid>
          </Box>


          <Box mt={"10"}>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              Similer Image
            </Text>

            <Grid templateColumns={"repeat(4,1fr)"} gap={"5"} mt={"5"}>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosOne} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosTwo} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosThree} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosFour} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosOne} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosTwo} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosThree} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosFour} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosOne} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={PhotosTwo} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosThree} />
                </Link>
              </GridItem>
              <GridItem>
                <Link to="/singleStockImage">
                  <StockImageMain img={photosFour} />
                </Link>
              </GridItem>
            </Grid>

            <Box w={"10%"} mx={"auto"} mt={"5"}>
              <Button
                w={"100%"}
                rounded={"full"}
                _focus={{ outline: "none" }}
                _hover={{
                  border: "1px",
                  bgColor: "#FE94A2",
                  borderColor: "#FE94A2",
                  color: "white",
                }}
                border={"1px solid #FE94A2"}
                Color={"#FE94A2"}
                bg={"white"}
              >
                See More
              </Button>
            </Box>
          </Box>

          <Box>
            <Box mt={"20"}>
              <Box textAlign={"center"}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Our Most Popular{" "}
                  <span style={{ color: "#FE94A2" }}>Tours</span>{" "}
                </Text>

                <Text marginTop={"4"} color={"gray.600"}>
                  Placeholder text commonly used to demonstrate the visual form
                  of <br /> document or a typeface without relying on meaningful
                  content.{" "}
                </Text>
              </Box>
              <Box>
                <Container maxW={"container.xl"}>
                  <Flex
                    pe={8}
                    justifyContent={"end"}
                    cursor={"pointer"}
                    alignItems={"center"}
                    fontWeight={"bold"}
                  >
                    {" "}
                    View more{" "}
                    <Box ms={"2"} mt="0.5">
                      <HiOutlineArrowNarrowRight />
                    </Box>
                  </Flex>
                </Container>
              </Box>
            </Box>
            <Box mt={""}>
              <Container maxW={"container.xl"} mb={"56"}>
                <PackageSlider />
              </Container>
            </Box>
          </Box>
        </Container >
      </Box >
      {/* main stock photos end */}

      {/* Footer start */}
      <Footer />
      {/* Footer start */}
    </Box >
  );
};

export default SingleStockImage;






{/*  <Button onClick={onOpen} ms={'4'} px={'5'} rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Download Now</Button> */ }


{/*  <Modal blockScrollOnMount={false} size='6xl' isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent >
                                <ModalCloseButton />
                                <ModalBody py={'14'} px={'14'}  >
                                    <Grid templateColumns='1fr 1fr' gap={'10'}>
                                        <GridItem>
                                            <Text fontSize={'2xl'} fontWeight={'semibold'}>PURCHASE A LICENSE</Text>
                                            <Text mt={'2'} fontWeight={'light'} fontSize={'14px'}>
                                                All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available
                                                
                                            </Text>
                                            <Box mt={'5'} border={'1px solid #FE94A2'} rounded={'sm'}>

                                                <RadioGroup defaultValue='1'>
                                                    <Stack>
                                                        <Box borderBottom={'1px solid #FE94A2'}>
                                                            <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                                                <Box onClick={() => setRadioValue('xs')}>
                                                                    <Radio
                                                                        name='radio'
                                                                        colorScheme='brand' value='1' >
                                                                        Extra Small
                                                                    </Radio>
                                                                </Box>
                                                                <Box>$58</Box>
                                                            </Flex>
                                                            {
                                                                radioValue === 'xs' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                                                    72 dpi|0.2 MP</Text>
                                                            }


                                                        </Box>

                                                        <Box borderBottom={'1px solid #FE94A2'}>
                                                            <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                                                <Box onClick={() => setRadioValue('sm')}>
                                                                    <Radio
                                                                        name='radio'
                                                                        colorScheme='brand' value='2'
                                                                    >
                                                                        Small
                                                                    </Radio>
                                                                </Box>
                                                                <Box>$2,456</Box>
                                                            </Flex>
                                                            {
                                                                radioValue === 'sm' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                                                    72 dpi|0.2 MP</Text>
                                                            }

                                                        </Box>

                                                        <Box borderBottom={'1px solid #FE94A2'}>
                                                            <Flex px={'5'} py={'3'} alignItems={'center'} justifyContent={'space-between'}>
                                                                <Box onClick={() => setRadioValue('md')}>
                                                                    <Radio
                                                                        name='radio'
                                                                        colorScheme='brand' value='3'
                                                                    >
                                                                        Medium
                                                                    </Radio>
                                                                </Box>
                                                                <Box>$2456</Box>
                                                            </Flex>
                                                            {
                                                                radioValue === 'md' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                                                    72 dpi|0.2 MP</Text>
                                                            }

                                                        </Box>

                                                        <Box>
                                                            <Flex px={'5'} py={'4'} alignItems={'center'} justifyContent={'space-between'}>
                                                                <Box onClick={() => setRadioValue('lg')}>
                                                                    <Radio
                                                                        name='radio'
                                                                        colorScheme='brand' value='4' >
                                                                        Large
                                                                    </Radio>
                                                                </Box>
                                                                <Box>$2456</Box>
                                                            </Flex>
                                                            {
                                                                radioValue === 'lg' && <Text ms={'10'} fontSize={'12px'} fontWeight={'light'}>509 x 339 px (7.07 x 4.71 in) <br />
                                                                    72 dpi|0.2 MP</Text>
                                                            }

                                                        </Box>
                                                    </Stack>
                                                </RadioGroup>


                                            </Box>

                                            <Box mt={'4'}>
                                                <Text fontWeight={'semibold'}>Privacy and policy</Text>
                                                <Text fontSize={'14px'} fontWeight={'light'}>Placeholder text commonly used to demonstrate the visual form ofa document or a typeface without relying on meaningful content.</Text>
                                            </Box>

                                            <Box mt={'3'}>
                                                <Checkbox size='md' colorScheme='brand' fontWeight={'semibold'} >
                                                    Placeholder text commonly used to demonstrate.
                                                </Checkbox> <br />
                                                <Checkbox mt={'2'} size='md' colorScheme='brand' fontWeight={'semibold'}  >
                                                    Placeholder text commonly used to demonstrate.
                                                </Checkbox>
                                            </Box>

                                            <Box mt={'4'} textAlign={'center'}>
                                                <Button rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}>Buy And Download</Button>

                                                <Box mt={'2'} textAlign={'center'}>
                                                    <Text cursor={'pointer'} color={'#FE94A2'}>Cancel</Text>
                                                </Box>
                                            </Box>
                                        </GridItem>

                                        <GridItem>
                                            <Text fontWeight={'semibold'} fontSize={'2xl'} >PURCHASE A YEARLY OR MONTHLY SUBSCRIPTION</Text>
                                            <Text mt={'2'} fontWeight={'light'} fontSize={'14px'} >All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available.
                                            </Text>

                                            <Box mt={'4'} >
                                                <Flex alignItems={'center'} p={'3'} justifyContent={'space-between'} rounded={'sm'} border={'1px solid #FE94A2'}>
                                                    <Box>
                                                        <Text fontSize={'14px'} >Yearly Unilimited Subscription</Text>

                                                        <Flex alignItems={'center'} mt={'2'} >
                                                            <Text fontWeight={'bold'} >$180</Text>
                                                            <Text px={'1'} ms={'2'} rounded={'full'} bg={'green.300'} >
                                                                Save 30%
                                                            </Text>
                                                        </Flex>
                                                    </Box>

                                                    <Button ms={'4'} px={'5'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Subscribe Now</Button>

                                                </Flex>
                                            </Box>

                                            <Box mt={'4'} >
                                                <Flex alignItems={'center'} p={'3'} justifyContent={'space-between'} rounded={'sm'} border={'1px solid #FE94A2'}>
                                                    <Box>
                                                        <Text fontSize={'14px'} >Yearly Unilimited Subscription</Text>

                                                        <Flex alignItems={'center'} mt={'2'} >
                                                            <Text fontWeight={'bold'} >$180</Text>
                                                        </Flex>
                                                    </Box>

                                                    <Button ms={'4'} px={'5'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Subscribe Now</Button>

                                                </Flex>
                                            </Box>


                                            <Box mt={'8'}>
                                                <Text fontWeight={'semibold'}>What you will get?</Text>


                                                <OrderedList mt={'3'}>
                                                    <ListItem fontSize={'14px'} >Unlimited photo, vector, & video downloads</ListItem>
                                                    <ListItem fontSize={'14px'} mt={'2'}>Full commercial rights</ListItem>
                                                    <ListItem fontSize={'14px'} mt={'2'}>Exclusive access to bundles</ListItem>
                                                    <ListItem fontSize={'14px'} mt={'2'}>Priority Support</ListItem>
                                                    <ListItem fontSize={'14px'} mt={'2'}>Faster Downloads & No ads</ListItem>
                                                </OrderedList>

                                                <Text fontSize={'14px'} cursor={'pointer'} mt={'4'} color={'#FE94A2'}>More many thing you will get!</Text>
                                            </Box>


                                        </GridItem>

                                    </Grid>
                                </ModalBody>


                            </ModalContent>
                        </Modal> */}