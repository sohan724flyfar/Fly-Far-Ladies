import { Box, Button, Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import PhotosOne from '../../images/Photos1.jpg'
import PhotosTwo from '../../images/photos2.jpg'
import photosThree from '../../images/photos5.jpg'
import photosFour from '../../images/photos4.jpg'
import wishlist from '../../images/wishlist.png'

const SingleStockImage = () => {
    return (
        <Box>
            {/* navbar start */}
            <Navbar />
            {/* navbar end */}


            {/* main stock photos start */}
            <Container maxW={'container.xl'} pt={'10'} >
                <Image w={'full'} h={'600px'} src={photosThree} />

                <Flex mt={'5'} alignItems={'center'} justifyContent={'center'} >
                    <Button bg={'white'} border={'1px solid #FE94A2'} rounded={'full'} >
                        <Flex alignItems={'center'} ><Image me={'1'} w={'40px'} src={wishlist} /> wish list </Flex>
                    </Button>

                    <Button ms={'4'} px={'5'} rounded={'full'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Download Now</Button>
                </Flex>
            </Container>
            {/* main stock photos end */}
        </Box>
    );
};

export default SingleStockImage;