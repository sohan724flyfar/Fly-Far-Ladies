import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import secnery from '../../images/Scenery2.png'
import location2 from '../../images/location1.png'
import clock from '../../images/clock.png'
import wishlist from '../../images/wishlist.png'
import { NavLink } from 'react-router-dom';

const Package = () => {
    return (
        <Box>

            <Flex
                shadow="0px 0px 3px rgba(245, 153, 166, 0.85);"
                rounded="lg"
                p={3}
                w="full"
                alignItems="center"
                justifyContent="center"
                bg={'white'}
            >
                <Box
                    mx="auto"
                    rounded="lg"

                    maxW="2xl"
                >
                    <Box p={0} rounded="xl">
                        <Image
                            border={'3px solid #FE94A2'}
                            rounded="xl"
                            w="100%"
                            h={'100%'}
                            fit="cover"
                            src={secnery}
                            p='0'
                        />
                    </Box>

                    <Box p={3}>
                        <Flex justifyContent={'space-between'}>
                            <Text fontWeight={'bold'}>Tangor Haor</Text>
                            <Box sx={{ 'color': '#FE94A2', 'fontWeight': 'bold' }} >BDT 35200</Box>
                        </Flex>

                        <Flex alignItems={'center'} mt={'1'} >
                            <Box display={'inline'}><Image me={'2'} src={location2}></Image></Box>
                            <Box>
                                <span >Sunamgang, Bnagladesh</span>
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

        </Box>
    );
};

export default Package;