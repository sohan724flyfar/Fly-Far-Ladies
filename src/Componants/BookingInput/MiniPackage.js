import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import secnery from '../../images/photos5.jpg'

const MiniPackage = () => {
    return (
        <Box border={'1px solid #FE94A2'} bg={'white'} p={'5'}>
            <Flex alignItems={'center'}>
                <Image src={secnery} w={'50%'} />
                <Box ms={'3'}>
                    <Text fontSize={'xl'} fontWeight={'bold'}>Haritage Resort-Day Long Package</Text>
                    <Text>Dhaka,Bangladesh</Text>
                </Box>
            </Flex>


            <Box mt={'8'} borderBottom={'1px solid #FE94A2'}>

                <Flex justifyContent={'space-between'}>
                    <Text color={'gray.400'}>Adult (1025x2)</Text>
                    <Text>BDT 25638</Text>
                </Flex>

                <Flex mt={'3'} justifyContent={'space-between'}>
                    <Text color={'gray.400'}>Child (1025x2)</Text>
                    <Text>BDT 25638</Text>
                </Flex>

                <Flex mt={'3'} justifyContent={'space-between'}>
                    <Text color={'gray.400'}>Infant (1025x2)</Text>
                    <Text>BDT 25638</Text>
                </Flex>

                <Flex mt={'3'} justifyContent={'space-between'}>
                    <Text fontSize={'12px'} color={'#FE94A2'}>Discount:0</Text>

                </Flex>

            </Box>

            <Box border={'1px solid #FE94A2'} bg={'white'} borderTop={'none'}>
                <Flex>
                    <Text>Sub-Total</Text>
                    <Flex alignItems={'center'} ><Text color={'#FE94A2'}>BDT</Text> <Text>25634</Text></Flex>
                </Flex>

                <Flex>
                    <Text fontSize={'12px'}>Apply cupon</Text>
                </Flex>
            </Box>


        </Box>
    );
};

export default MiniPackage;