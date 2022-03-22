import { Box, Button, Container, Flex, Grid, GridItem, Image, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../images/logo.png'
import icon1 from '../../images/facebook.png'
import icon2 from '../../images/skype.png'
import icon4 from '../../images/instagram.png'
import icon5 from '../../images/youtube.png'
import massage2 from '../../images/massage 2.png'
import call from '../../images/call.png'
import bankCard from '../../images/bankCard.png'
import { AiOutlineSearch } from 'react-icons/ai';
import location2 from '../../images/location1.png'
import footer1 from '../../images/footerimage1.png'
import footer2 from '../../images/footerimage2.png'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <Box p={'9'} className={'footerbg'} >
                <Box   >
                    <Container mt={'32'} maxW={'container.xl'} >
                        <Grid templateColumns={'3fr 3fr 3fr 3fr'}>
                            <GridItem>
                                <Image w={'30'} src={logo} />
                                <Flex mt={'2'} >
                                    <Image src={footer1} />
                                    <Image ms={'2'} src={footer2} />
                                </Flex>

                                <Flex alignItems={'center'} mt={2}>
                                    <Image src={icon1} />
                                    <Image ms={3} src={icon2} />
                                    <Image ms={3} src={icon5} />
                                    <Image ms={3} src={icon4} />
                                </Flex>

                            </GridItem>
                            <GridItem ms={'6'}>
                                <Text fontWeight={'bold'}>Company</Text>
                                <Box mt={'4'}>
                                    <Link fontSize={'14px'} color={'gray.600'}>Payment Method</Link> <br />
                                    <Link fontSize={'14px'} color={'gray.600'}>Trems and Condition</Link> <br />
                                    <Link fontSize={'14px'} color={'gray.600'}>Privacy Policy</Link> <br /></Box>
                            </GridItem>
                            <GridItem>
                                <Text fontWeight={'bold'}>Contact Us</Text>
                                <Flex alignItems={'center'} mt={4}>
                                    <Image src={call} />
                                    <Text ms={'2'} color={'gray.600'}> 09639 205 206</Text>
                                </Flex>
                                <Flex alignItems={'center'} mt={3}>
                                    <Image src={massage2} />
                                    <Text ms={'2'} color={'gray.600'}> support@flyfarladies.com</Text>
                                </Flex>
                                <Flex alignItems={'center'} mt={3}>
                                    <Image w={'20px'} src={location2} />
                                    <Text ms={'3'} color={'gray.600'}> Ka-11, 2A Bashundhara <br /> Rd, Jagannathpur 1229</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Text fontWeight={'bold'}>Subscribe For news later</Text>
                                <Text mt={'4'} fontSize={'13px'} color={'gray.600'}>It is a long established fact that <br /> a reader will be by content.</Text>

                                <Flex alignItems={'center'} mt={'2'}>
                                    <InputGroup w={{ base: '50', md: 'auto' }} mt={2} >
                                        <InputLeftElement pointerEvents="none">
                                            <AiOutlineSearch />
                                        </InputLeftElement>
                                        <Input border={'2px'} _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} type="tel" placeholder="Search..." />
                                    </InputGroup>
                                    <Button ms={'3'} mt={'2'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Sign Up</Button>

                                </Flex>

                            </GridItem>
                        </Grid>

                    </Container>

                </Box>


                <Flex mt={'16'} pb={'10'} justifyContent={'center'} >

                    <Image h={'90%'} w={'60%'} src={bankCard} />
                </Flex>
                <Text pb={'10'} textAlign={'center'} mt={'1'}>© All Right Reserved By Fly Far Ladies & Developed By FLy Far Tech</Text>

            </Box>
        </div>
    );
};

export default Footer;