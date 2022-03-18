import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';

const PackageHeadCard = (props) => {
    return (
        <Box>
            <GridItem shadow='0px 0px 4px #FE94A2' p={'3'} borderRadius={'sm'} textAlign={'center'} bg={'white'} border={'1px solid #FE94A2'}>
                <Flex justifyContent={'center'} >
                    <Image src={props.img} />
                </Flex>
                <Text mt={'1'}>
                    {props.title}
                </Text>

            </GridItem>

        </Box>
    );
};

export default PackageHeadCard;