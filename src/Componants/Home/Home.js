import { Avatar, Box, Button, Container, Flex, Grid, GridItem, Image, Input, InputGroup, InputLeftElement, Link, Menu, MenuButton, MenuItem, MenuList, Select, Text } from '@chakra-ui/react';
import React from 'react'
import worldImage from '../../images/world.png'
import plane from '../../images/plane.png'
import vedioIcon from '../../images/vedio play.png'
import bannerGirl from '../../images/banner-girls.png'
import timePicture from '../../images/time.png'
import secnery from '../../images/Scenery2.png'
import location from '../../images/location.png'
import './home.css'
import location2 from '../../images/location1.png'
import clock from '../../images/clock.png'
import featuredJob from '../../images/featured-job.png'
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import Navbar from '../Navbar/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { ChevronDownIcon } from '@chakra-ui/icons';
import StockImage from './StockImage';




function Home() {

    return (
        <Box>
            <Box className='home'>
                <Navbar />
                <Container maxW={'container.lg'} >
                    <Grid templateColumns='repeat(2, 1fr)' gap={'10'} >
                        <GridItem mt={'16'}  >
                            <Flex justifyContent={'center'} style={{ 'background': '#F4DFDF' }} width={'60'} p={'1'} borderRadius={'16'}>
                                <Box mt={'-0.5'} sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >Let's Explore the World  </Box>
                                <Image ms={'2'} mt={'0.5'} width={'5'} height={'5'} src={worldImage} alt='Dan Abramov' />
                            </Flex>

                            <Box marginTop={'5'}>
                                <Text fontSize={'4xl'} fontWeight={'bold'}>It's a Big World <br /> Out   There  <span style={{ 'color': '#FE94A2', }}>Go Explore!</span> <Image sx={{ 'display': 'inline', 'width': '35px', }} src={plane}></Image> </Text>


                                <Text marginTop={'4'} color={'gray.600'}>Placeholder text commonly used to demonstrate the visual form of <br /> document or a typeface without relying on meaningful content. <br /> may be used as a placeholder before the final</Text>
                            </Box>

                            <Flex marginTop={'5'}>
                                <Box>
                                    <Button _hover={{ 'backgroundColor': 'white' }} sx={{ 'border': '1px solid #FE94A2', 'background': 'white' }} >Watch Vedio <Image mt={'1'} ms={'2'} width={'4'} src={vedioIcon}></Image> </Button>

                                </Box>
                                <Box ms={'4'} >
                                    <Button _hover={{ 'backgroundColor': 'white', 'color': 'black', 'border': '1px solid #FE94A2' }} sx={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} >Read More</Button>
                                </Box>
                            </Flex>

                        </GridItem>

                        <GridItem mx={'auto'} position={'relative'} >
                            <Box><Image ms={'16'} sx={{ 'width': '360px', 'height': '430px' }} src={bannerGirl}></Image></Box>
                            <Box position={'absolute'} sx={{ 'top': '70px', 'left': '290px' }} ><Image width={'36'} ms={'16'} src={timePicture}></Image></Box>

                            <Box position={'absolute'} sx={{ 'top': '200px', 'right': '230px' }} >
                                <Flex
                                    position={'relative'}
                                    p={50}
                                    w="280px"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Box
                                        mx="auto"
                                        rounded="2xl"
                                        shadow="sm"
                                        maxW="2xl"

                                        backgroundColor={'white'}
                                    >
                                        <Image
                                            rounded="3xl"
                                            w="90%"
                                            h={'full'}
                                            src={secnery}
                                            alt="Article"
                                            mx={'auto'}
                                            mt={'2'}
                                        />

                                        <Box p={'3'} >
                                            <Box>
                                                <Image display={'inline'} me={'1'} src={location}></Image>
                                                <Text display={'inline'} > Morocco</Text>
                                            </Box>
                                            <Text mt={'2'} width={'full'} borderRadius={'lg'} sx={{ 'height': '5px', 'backgroundColor': '#FF6469' }}></Text>
                                            <Text mt={'2'} mb={'3'} width={'70%'} borderRadius={'lg'} sx={{ 'height': '5px', 'backgroundColor': '#C29151' }}></Text>


                                        </Box>
                                    </Box>

                                    <Box position={'absolute'} sx={{ 'top': '240px', 'left': '110px' }} >
                                        <Box >
                                            <Avatar name='Dan Abrahmov' size='sm' src='https://i.ibb.co/nP4ky9V/273975415-306291008235872-9163209598122818815-n.png' />
                                            <Avatar name='Kola Tioluwani' ml='-2' size='sm' src='https://i.ibb.co/CPtqpLw/273562364-667224527942972-7790949942330350981-n.png' />
                                            <Avatar name='Kent Dodds' ml='-2' size='sm' src='https://i.ibb.co/nmZYQ9w/275025680-639749970436000-7961815956715700842-n.png' />
                                            <Avatar name='Ryan Florence' ml='-2' size='sm' shadow='sm' src='https://i.ibb.co/dB14jq1/273887452-1474349882966941-5385975708901422518-n.png' />
                                            <Avatar name='5 K' ml='-2' size='sm' bg='white' shadow='md'>+</Avatar>
                                        </Box>
                                    </Box>
                                </Flex>


                            </Box>



                        </GridItem>

                    </Grid>


                </Container>

                <Box mt={'60'}>
                    <Box textAlign={'center'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>Our Most Popular  <span style={{ 'color': '#FE94A2', }}>Tours</span> </Text>

                        <Text marginTop={'4'} color={'gray.600'}>Placeholder text commonly used to demonstrate the visual form of <br /> document or a typeface without relying on meaningful content. </Text>
                    </Box>
                </Box>


                <Box mt={'10'}>
                    <Container maxW={'container.xl'} mb={'56'}>
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='95%' rounded="lg" >
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

                            </GridItem>
                            <GridItem w='95%' rounded="lg" >
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

                            </GridItem>
                            <GridItem w='95%' rounded="lg" >
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

                            </GridItem>
                            <GridItem w='95%' rounded="lg" >
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

                            </GridItem>

                        </Grid>
                    </Container>
                </Box>



                <Box mb={'10'} mt={'-24'}>
                    <Container maxW={'container.xl'}>
                        <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                            <GridItem w='100%'  >
                                <Image w='100%' src={featuredJob}></Image>
                            </GridItem>
                            <GridItem w='100%' p={'3'} mt={'24'} ms={'5'} >
                                <Text fontSize={'4xl'} fontWeight={'bold'}>Featured  <span style={{ 'color': '#FE94A2', }}>Job</span> </Text>
                                <Text fontSize={'md'} color={'gray.600'}>Employers Offering Jobs</Text>
                                <Box mt={'3'} width={'70%'}>
                                    <span fontSize={'lg'}   >
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the <br /> visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                                    </span>
                                </Box>

                                <Box mt={'3'} >
                                    <Button _hover={{ 'backgroundColor': 'white', 'color': 'black', 'border': '1px solid #FE94A2' }} sx={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} >Read More</Button>

                                </Box>
                            </GridItem>

                        </Grid>
                    </Container>
                </Box>

                <Box mt={'36'} mb={'10'}>
                    <Box textAlign={'center'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>Stock  <span style={{ 'color': '#FE94A2', }}>Images</span> <span>&</span> <span style={{ 'color': '#FE94A2', }}>Vedio</span></Text>

                        <Text color={'gray.600'}>Placeholder text commonly used to demonstrate the visual form of  </Text>
                    </Box>
                </Box>

                <Box pb={'22'}>
                    <Container maxW={'container.xl'}>
                        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={'5'}>
                            <StockImage img={PhotosOne} />
                            <StockImage img={PhotosTwo} />
                            <StockImage img={photosThree} />
                            <StockImage img={photosFour} />

                        </Grid>
                    </Container>
                </Box>

                <Box mt={'24'} mb={'10'}>
                    <Box textAlign={'center'}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>Welcome To Our  <span style={{ 'color': '#FE94A2', }}>Blog</span></Text>

                        <Text color={'gray.600'}>Placeholder text commonly used to demonstrate the visual form of  </Text>
                    </Box>
                </Box>

                <Container maxW={'container.xl'}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Box fontWeight={'bold'}>Recent Post</Box>
                            <Flex justifyContent={'space-between'} >
                                <InputGroup ms={'3'}  >
                                    <InputLeftElement pointerEvents="none">
                                        <AiOutlineSearch />
                                    </InputLeftElement>
                                    <Input _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'3xl'} type="tel" placeholder="Search..." />
                                </InputGroup>

                                <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Select Writer'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>

                                <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Select Writer'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>

                            </Flex>
                        </Flex>
                    </Box>
                </Container>

                <Container maxWidth={'container.2xl'}>
                    <Grid templateColumns={'6fr 3fr 3fr'}>
                        <GridItem>
                            <Flex
                                p={50}
                                w="full"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx={{ lg: 8 }}
                                    display={{ lg: "flex" }}
                                    maxW={{ lg: "5xl" }}
                                    shadow={{ lg: "lg" }}
                                    rounded={{ lg: "lg" }}
                                >
                                    <Box w={{ lg: "50%" }}>
                                        <Box width={'52'} >
                                            <Image src={PhotosOne}></Image>
                                        </Box>
                                    </Box>

                                    <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
                                        <Text></Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </Box >
        </Box >
    )
}

export default Home;
