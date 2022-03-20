import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Details2 = (props) => {
    return (
        <Box fontWeight={'semibold'} fontSize={'14px'}>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Text>Age</Text>
                <Text fontWeight={'semibold'} w={'70%'} py={'1'} border={'1px solid #FE94A2'} textAlign={'center'} px={'5'} rounded={'md'}>{props.age}</Text>
            </Flex>
            <Flex mt={'4'} alignItems={'center'} justifyContent={'space-between'}>
                <Text>Email</Text>
                <Text fontWeight={'semibold'} w={'70%'} py={'1'} border={'1px solid #FE94A2'} textAlign={'center'} px={'5'} rounded={'md'}>{props.email}</Text>
            </Flex>
        </Box>
    );
};

export default Details2;