import { Box, Button, Container, Flex, Image, Input, InputGroup, InputLeftElement, Radio, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import upper from '../../images/upper.svg'
import vedioStock from '../../images/Video_Secto.webp'
import { AiOutlineSearch } from 'react-icons/ai';

const StockImageDetail = () => {
    return (
        <Box>
            {/* navbar start */}
            <Navbar />
            {/* navbar start */}

            <Box bg={'pink.500'} py={'20'} >
                <Flex fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} fontSize={'4xl'}>
                    You Can
                    <Text color={'white'} ms={'3'} me={3}> Buy</Text>
                    and
                    <Flex>
                        <Text color={'white'} ms={'3'} me={3}>Sell</Text>
                        Photo
                    </Flex>
                </Flex>

                <Text mt={'3'} fontWeight={'bold'} textAlign={'center'} w={'30%'} mx={'auto'} color={'white'}>You can find the best pakage from here and select it and travel around the wrold! </Text>

                <Box bg={'white'} w={'30%'} mx={'auto'} rounded={'md'}>
                    <Box p={'3'} mt={'5'} ms={'4'} >
                        <Text fontWeight={'bold'}>Free 1-month trial, cancel anytime</Text>
                        <Text fontSize={'14px'} fontWeight={'light'} >You can find the best pakage from here and select it!</Text>

                        <Flex w={'90%'} mt={'3'} fontWeight={'semibold'} justifyContent={'space-between'}>
                            <Box>
                                <Radio colorScheme='brand' value='1'>
                                    Buy Month-Annual Plan
                                </Radio>
                            </Box>

                            <Box>
                                <Text>$54</Text>
                            </Box>
                        </Flex>

                        <Box fontWeight={'semibold'} mt={'2'}>
                            <Radio colorScheme='brand' value='2'>
                                Buy Single Image Without Month-annual Plan
                            </Radio>
                        </Box>

                        <Box w={'50%'} mx={'auto'}  >
                            <Button ms={'2'} px={'10'} rounded={'full'} mt={'3'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} borderRadius={'none'}>Start Now</Button>
                        </Box>
                    </Box>

                </Box>

            </Box>


            <Box mt={'10'} w={'50%'} mx={'auto'} textAlign={'center'}>
                <Text fontWeight={'extrabold'} fontSize={'2xl'}>Select Vedio or Photos</Text>
                <Image w={'50%'} mx={'auto'} src={upper} />

                <Flex mt={'5'} alignItems={'center'} justifyContent={'center'}>
                    <Box>
                        <Image src={vedioStock} />
                    </Box>

                    <Box ms={'5'}>
                        <Image src={vedioStock} />
                    </Box>
                </Flex>
            </Box>


            <Container maxW={'container.2xl'} mt={'10'}>
                <Text fontSize={'semibold'} >Our Most Popular and Best Selling Photo And Video</Text>

                <Flex alignItems={'center'}>
                    <Text>Popular search</Text>
                    <Flex ms={'4'} fontSize={'12px'} px={'2'} py={'1'} rounded={'full'} alignItems={'center'} border={'1px solid #FE94A2'} bg={'white'}>
                        <Box><AiOutlineSearch /></Box>
                        <Box ms={'2'}>Sunset</Box>
                    </Flex>

                    <Flex ms={'4'} fontSize={'12px'} px={'2'} py={'1'} rounded={'full'} alignItems={'center'} border={'1px solid #FE94A2'} bg={'white'}>
                        <Box><AiOutlineSearch /></Box>
                        <Box ms={'2'}>Sunset</Box>
                    </Flex>


                    <Flex ms={'4'} fontSize={'12px'} px={'2'} py={'1'} rounded={'full'} alignItems={'center'} border={'1px solid #FE94A2'} bg={'white'}>
                        <Box><AiOutlineSearch /></Box>
                        <Box ms={'2'}>Sunset</Box>
                    </Flex>


                    <Flex ms={'4'} fontSize={'12px'} px={'2'} py={'1'} rounded={'full'} alignItems={'center'} border={'1px solid #FE94A2'} bg={'white'}>
                        <Box><AiOutlineSearch /></Box>
                        <Box ms={'2'}>Sunset</Box>
                    </Flex>

                    <Flex ms={'4'} fontSize={'12px'} px={'2'} py={'1'} rounded={'full'} alignItems={'center'} border={'1px solid #FE94A2'} bg={'white'}>
                        <Box><AiOutlineSearch /></Box>
                        <Box ms={'2'}>Sunset</Box>
                    </Flex>

                </Flex>
            </Container>
        </Box>
    );
};

export default StockImageDetail;