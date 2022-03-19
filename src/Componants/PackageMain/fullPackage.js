import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import location from '../../images/location1.png'
import person from '../../images/persons.png'
import personClock from '../../images/personclock.png'
import cancel from '../../images/cancel.png'
import { NavLink } from 'react-router-dom';

const FullPackage = (props) => {

    return (
        <Box>
            <Box
                bg={'white'}
                border={'1px solid #FE94A2'}
                shadow={'0px 0px 3px #FE94A2; '}
                p={3}
                display={{ lg: "flex" }}
                rounded={{ lg: "lg" }}
            >
                <Box w={{ lg: "50%" }}>
                    <Box
                        h={{ base: 64, lg: "full" }}
                        rounded={{ lg: "lg" }}
                    >
                        <Image rounded={'lg'} src={props.img} />
                    </Box>
                </Box>

                <Box maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }} ms={'6'}>
                    <Text fontSize={'lg'} fontWeight={'semibold'} >Haritage Resort- Maldives</Text>
                    <Flex mt={'2'} alignItems={'center'}>
                        <Image src={location} />
                        <Text fontSize={'12px'} ms={'2'}>Male. Maldives</Text>
                    </Flex>
                    <Text mt={'3'} fontSize={'12px'} color={'gray.400'}>Maldives, officially the Republic of Maldives, is an country in the Indian subcontinent of Asia, situated in the Indian Ocean.  Maldives, officially the Republic of Maldives, is an country in the Indian </Text>

                    <Flex mt={'3'} fontSize={'10px'} alignItems={'center'}>
                        <Image src={personClock} ms='1' me={'2'} />
                        10 hours
                        <Image ms={'3'} me={'2'} src={person} />
                        From 1 to 10 Person
                    </Flex>

                    <Flex w={'80%'} fontSize={'12px'} mt={3} alignItems={'center'} p={'1'} bg={'#E5E5E5'}>
                        <Image src={cancel} me={'2'} />
                        Free cancellation before forty-eight (48) hours
                    </Flex>

                    <Text mt={'3'} fontSize={'12px'} color={'gray.400'}>Starting From</Text>

                    <Flex mt={'3'} justifyContent={'space-between'} alignItems={'center'}>
                        <Flex p={'1'} bg={'#E5E5E5'} >
                            <Text color={'#FE94A2'} fontWeight={'semibold'} me={'3'}>BDT 35200</Text>
                            (Per person)
                        </Flex>
                        <NavLink to="/packageDetails">
                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'}  >Book Now</Button>
                        </NavLink>


                    </Flex>

                </Box>
            </Box>

        </Box>
    );
};

export default FullPackage;