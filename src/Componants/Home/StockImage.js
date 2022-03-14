import { Box, Flex, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import avatar from '../../images/avatar.png';
import wishlist from '../../images/wishlist.png'
import wishlist2 from '../../images/wishlist2.png'
import wishlist3 from '../../images/wishlist3.png'
import './home.css'


const StockImage = (props) => {
    return (
        <GridItem position={'relative'} overflow="hidden" border={'1px'} borderColor={'transparent'} borderRadius={'xl'} role="group">
            <Image _hover={{ transform: "scale(1.1)", transition: "all 400ms ease", filter: "grayscale(0.5)" }} borderRadius={'xl'} w={'62'} src={props.img}></Image>

            <Box position={'absolute'} _groupHover={{ top: "5px", right: "5px" }}>
                <Image cursor={'pointer'} width={'10'} src={wishlist} />
                <Image cursor={'pointer'} width={'10'} src={wishlist2} />
                <Image cursor={'pointer'} width={'10'} src={wishlist3} />
            </Box>

            <Box position={'absolute'} _groupHover={{ bottom: "5px", left: "5px" }}>
                <Flex alignItems={'center'} >
                    <Box>< Image h={'10'} width={'10'} src={avatar} /></Box>
                    <Box ms={'2'} fontWeight={'bold'} color={'white'}>Hosen Rahman</Box>
                </Flex>
            </Box>

        </GridItem>
    );
};

export default StockImage;