import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import clients from '../../images/client.png';
import star from '../../images/star.png'
// import qutation from '../../qutation.png'
// import qutation2 from '../../qutation2.png'
import './home.css'



const Clients = (props) => {
    return (
        <GridItem>

            <Box border={'1px'} p={'2'} bg={'white'} textAlign={'center'} >
                <Image mx={'auto'} src={clients} />
                <Text mt={'2'}>Samiha Islam</Text>
                <Text mt={'2'} fontSize={'11px'}>Dhaka,Bnagladesh</Text>
                <Flex mt={'2'} justifyContent={'center'} >
                    <Image src={star} />
                    <Image ms={'2'} src={star} />
                    <Image ms={'2'} src={star} />
                    <Image ms={'2'} src={star} />
                    <Image ms={'2'} src={star} />
                </Flex>

                <Box mt={'2'}>
                    {/* <Image display={'inline-block'} src={qutation} /> */}
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
                    {/* <Image src={qutation2} /> */}
                </Box>
            </Box>


        </GridItem>
    );
};

export default Clients;