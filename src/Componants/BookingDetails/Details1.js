import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Details1 = (props) => {
    return (
        <Box fontSize={'16px'}>
            <Text fontWeight={'bold'} w={'45%'} borderBottom={'1px solid #FE94A2'} color={'#FE94A2'}>{props.title}</Text>
            <Flex mt={'3'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontWeight={'semibold'}>Name Of Traveler</Text>
                <Text fontWeight={'semibold'} w={'40%'} py={'3'} border={'1px solid #FE94A2'} textAlign={'center'} px={'5'} rounded={'md'}>{props.name}</Text>
            </Flex>
            <Flex mt={'3'} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontWeight={'semibold'}>Phone No</Text>

                <Text fontWeight={'semibold'} w={'40%'} py={'3'} rounded={'md'} border={'1px solid #FE94A2'} textAlign={'center'} px={'3'}>{props.number}</Text>

            </Flex>
        </Box >
    );
};

export default Details1;