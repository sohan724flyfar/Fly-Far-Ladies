import { Box, Button, Container, Flex, Grid, GridItem, Image, Input, InputGroup, InputLeftElement, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import vedioIcon from '../../images/vedio play.png'
import { AiOutlineSearch } from 'react-icons/ai';
import Recent1 from '../Home/Recent1';
import Recent2 from '../Home/Recent2';
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosFour from '../../images/photos4.jpg'
import blog1 from '../../images/blog-1.jpeg'
import Pagination from '../PackageMain/Pagination';
import Footer from '../Footer/Footer';
import './blog.css'
import blogimage from '../../images/blogimage.svg'
const Blog = () => {
    return (
        <Box>
            {/* navbar start */}
            <Navbar />
            {/* navbar end*/}



            <Box className='blogbg'>
                <Container maxW={'container.xl'} >
                    <Grid templateColumns='3fr 4fr' gap={'10'} >
                        <GridItem mt={'16'}  >
                            <Flex fontWeight={'bold'} fontSize={'4xl'}>Welcome to <Text color={'#FE94A2'} ms={'2'} >Blog</Text></Flex>

                            <Box mt={'5'}>
                                <Text>Placeholder text commonly used to demonstrate the visual form ofa document or a typeface without relying on meaningful content. Placeholder text commonly used to demonstrate the visual form ofa document or a typeface without relying on meaningful content. Placeholder text commonly used to.</Text>
                            </Box>

                            <Flex marginTop={'5'}>
                                <Box>
                                    <Button _hover={{ 'backgroundColor': 'white' }} sx={{ 'border': '1px solid #FE94A2', 'background': 'white' }} >Watch Vedio <Image mt={'1'} ms={'2'} width={'4'} src={vedioIcon}></Image> </Button>

                                </Box>
                                <Box ms={'4'} >
                                    <Button _hover={{ 'backgroundColor': 'white', 'color': 'black', 'border': '1px solid #FE94A2' }} sx={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} >Read Most Popular</Button>
                                </Box>
                            </Flex>

                        </GridItem>

                        <GridItem mx={'auto'} position={'relative'} >
                            <Box><Image ms={'16'} sx={{ 'width': '360px', 'height': '430px' }} src={blogimage}></Image></Box>

                        </GridItem>


                    </Grid>


                    <Flex mt={'20'} >

                        <Tabs w={'100%'}>
                            <TabList >
                                <Flex alignItems={'center'} justifyContent={'space-between'} >
                                    <Flex>
                                        <Tab>All</Tab>
                                        <Tab ms={'2'}>Popular</Tab>
                                        <Tab ms={''}>Most Viewed </Tab>
                                        <Tab ms={'2'}>Travel</Tab>
                                    </Flex>
                                    <Flex ms={'360px'} pb={'2'} >
                                        <InputGroup ms={'3'}  >
                                            <InputLeftElement pointerEvents="none">
                                                <AiOutlineSearch />
                                            </InputLeftElement>
                                            <Input w={'250px'} bg={'white'} _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'3xl'} type="tel" placeholder=" Quick Search..." />
                                        </InputGroup>

                                        <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Select Writer'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>

                                        <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Pick A date'>
                                            <option value='option1'>Option 1</option>
                                            <option value='option2'>Option 2</option>
                                            <option value='option3'>Option 3</option>
                                        </Select>

                                    </Flex>


                                </Flex>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Container maxWidth={'container.xl'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Recent Post </Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>


                                    <Container maxWidth={'container.xl'} mt={'4'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Most Viewed </Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>

                                    <Container maxWidth={'container.xl'} mt={'4'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Travel</Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>
                                </TabPanel>

                                <TabPanel>
                                    <Container maxWidth={'container.xl'} mt={'2'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Popular </Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>
                                </TabPanel>
                                <TabPanel>
                                    <Container maxWidth={'container.xl'} mt={'2'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Most Viewed </Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>
                                </TabPanel>
                                <TabPanel>
                                    <Container maxWidth={'container.xl'} mt={'2'}>
                                        <Grid templateColumns={'3fr 3fr 6fr'} gap={'8'} >
                                            <GridItem ms={'-4'}>
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem ms={'-4'} >
                                                <Recent2 img={blog1} />
                                            </GridItem>
                                            <GridItem mt={'1'}>
                                                <Text fontWeight={'bold'} >Travel </Text>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosOne} />
                                                </Box>
                                                <Box mt={'-2'}>
                                                    <Recent1 img={PhotosTwo} />
                                                </Box>

                                                <Box mt={'-2'}>
                                                    <Recent1 img={photosFour} />
                                                </Box>
                                            </GridItem>
                                        </Grid>
                                    </Container>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>


                    </Flex>


                    <Box mt={'8'}>
                        <Pagination />
                    </Box>


                </Container>
            </Box>




            {/* Footer start */}
            <Footer />
            {/* Footer end */}
        </Box>
    );
};

export default Blog;