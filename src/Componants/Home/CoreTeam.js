import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import icon1 from '../../images/facebook.png'
import icon2 from '../../images/skype.png'
import icon3 from '../../images/linkdin.png'

const CoreTeam = (props) => {
    return (
        <Box>
            <GridItem w='95%' rounded="lg" >
                <Flex
                    rounded="lg"
                    p={3}
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                        'bg': 'white',
                        'shadow': '0px 0px 11px rgba(245, 153, 166, 0.85)'
                    }}
                >
                    <Box
                        mx="auto"
                        rounded="lg"

                        maxW="2xl"
                    >
                        <Image
                            rounded="xl"
                            w={'306px'}
                            objectFit={'cover'}
                            h={'250px'}
                            src={props.img}

                        />

                        <Box p={3}>
                            <Text>Nusrat Jahan</Text>
                            <Text fontSize={'13px'}>Front-End developer</Text>
                            <Flex mt={'4'}>
                                <Flex>
                                    <Image src={icon1} />
                                    <Image src={icon2} ms={2} />
                                    <Image src={icon3} ms={2} />
                                </Flex>
                            </Flex>

                        </Box>
                    </Box>
                </Flex>

            </GridItem>
        </Box>
    );
};

export default CoreTeam;