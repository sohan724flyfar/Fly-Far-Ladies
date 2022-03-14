import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import clients from '../../images/client.png';
import star from '../../images/star.png'
import qutation from '../../images/qutation.png'
import qutation2 from '../../images/qutation2.png'
import './home.css'



const Clients = (props) => {
    return (
        <GridItem>

            <Box shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                p={'4'} bg={'white'} textAlign={'center'} >
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

                <Box mt={'2'} fontSize={'14px'}>
                    <Image mt={''} display={'inline-block'} src={qutation} />

                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    <Image mt={''} display={'inline-block'} src={qutation2} />
                </Box>
            </Box>


        </GridItem>
    );
};

export default Clients;