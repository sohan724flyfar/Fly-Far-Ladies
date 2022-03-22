import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const StockImageDetail = () => {
    return (
        <Box>
            {/* navbar start */}
            <Navbar />
            {/* navbar start */}

            <Box bg={'pink.500'} fontWeight={'bold'} >
                <Flex justifyContent={'center'} alignItems={'center'} fontSize={'4xl'}>
                    You Can
                    <Text color={'white'} ms={'3'} me={3}> Buy</Text>
                    and
                    <Flex>
                        <Text color={'white'} ms={'3'} me={3}>Sell</Text>
                        Photo
                    </Flex>
                </Flex>

                <Text textAlign={'center'} w={'40%'} mx={'auto'} color={'white'}>You can find the best pakage from here and select it and travel around the wrold! </Text>

                <Box bg={'white'} p={'3'}>

                </Box>
            </Box>
        </Box>
    );
};

export default StockImageDetail;