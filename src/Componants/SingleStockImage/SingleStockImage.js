import { Box, Button, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import wishlist from '../../images/wishlist.png'
import avatar from '../../images/avatar.png';
import StockImageMain from '../StockImage/StockImageMain';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import PackageSlider from '../Home/PackageSlider';
import Footer from '../Footer/Footer';
import './SingleStockimage.css'
import { Link } from 'react-router-dom';

const SingleStockImage = () => {
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

                        <Button ms={'4'} px={'5'} rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Download Now</Button>
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


                    <Box mt={'10'}>
                        <Text fontWeight={'bold'} fontSize={'2xl'}>Similer Image</Text>

                        <Grid templateColumns={'repeat(4,1fr)'} gap={'5'} mt={'5'}>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosOne} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosTwo} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosThree} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosFour} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosOne} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosTwo} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosThree} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosFour} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosOne} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={PhotosTwo} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosThree} /></Link>
                            </GridItem>
                            <GridItem>
                                <Link to="/singleStockImage"><StockImageMain img={photosFour} /></Link>
                            </GridItem>
                        </Grid>

                        <Box w={'10%'} mx={'auto'} mt={'5'}>
                            <Button w={'100%'} rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': '#FE94A2', 'borderColor': '#FE94A2', 'color': 'white' }} border={'1px solid #FE94A2'} Color={'#FE94A2'} bg={'white'}   >See More</Button>
                        </Box>

                    </Box>

                    <Box>
                        <Box mt={'20'}>
                            <Box textAlign={'center'}>
                                <Text fontSize={'4xl'} fontWeight={'bold'}>Our Most Popular  <span style={{ 'color': '#FE94A2', }}>Tours</span> </Text>

                                <Text marginTop={'4'} color={'gray.600'}>Placeholder text commonly used to demonstrate the visual form of <br /> document or a typeface without relying on meaningful content. </Text>
                            </Box>
                            <Box >
                                <Container maxW={'container.xl'}  >
                                    <Flex pe={8} justifyContent={'end'} cursor={'pointer'} alignItems={'center'} fontWeight={'bold'} > View more <Box ms={'2'} mt='0.5'><HiOutlineArrowNarrowRight /></Box></Flex>
                                </Container>
                            </Box>
                        </Box>
                        <Box mt={''}>
                            <Container maxW={'container.xl'} mb={'56'}>
                                <PackageSlider />
                            </Container>
                        </Box>
                    </Box>

                </Container>
            </Box>
            {/* main stock photos end */}

            {/* Footer start */}
            <Footer />
            {/* Footer start */}
        </Box>
    );
};

export default SingleStockImage;