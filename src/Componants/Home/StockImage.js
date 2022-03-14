import { Box, Button, Flex, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import clock from '../../images/clock.png';
import location from '../../images/location.png'
import plane from '../../images/plane.png'
import vedioIcon from '../../images/vedio play.png'


const StockImage = (props) => {
    return (
        <GridItem position={'relative'} overflow="hidden" border={'1px'} borderColor={'transparent'} borderRadius={'xl'} role="group">
            <Image _hover={{ transform: "scale(1.1)", transition: "all 400ms ease", filter: "grayscale(0.5)" }} borderRadius={'xl'} w={'62'} src={props.img}></Image>

            <Box position={'absolute'} _groupHover={{ top: "5px", right: "5px" }}>
                <Button height={'10'} width={'10'} borderRadius={'60%'} bg={'white'}><Image src={clock} /></Button> <br />
                <Button mt={'2'} height={'10'} width={'10'} borderRadius={'60%'} bg={'white'}><Image src={vedioIcon} /></Button> <br />
                <Button mt={'2'} height={'10'} width={'10'} borderRadius={'50%'} bg={'white'}><Image src={location} /></Button>
            </Box>

            <Box position={'absolute'} _groupHover={{ bottom: "5px", left: "5px" }}>
                <Flex alignItems={'center'} >
                    <Box>< Image h={'10'} width={'10'} src={plane} /></Box>
                    <Box ms={'2'} fontWeight={'bold'} color={'white'}>Hosen Rahman</Box>
                </Flex>
            </Box>

        </GridItem>
    );
};

export default StockImage;