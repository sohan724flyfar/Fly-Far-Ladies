import { Box, Flex, Input, InputGroup, InputLeftAddon, Select, Text } from '@chakra-ui/react';
import React from 'react';

const PassengerInfo = (props) => {
    return (
        <Box>
            <Text fontSize={'14px'} fontWeight={'bold'}>{props.title}</Text>
            <Flex alignItems={'center'} mt={'3'}>
                <Box w={'100%'} >
                    <fieldset mt={3}  >
                        <legend>First Name</legend>
                        <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} >
                        </Input>
                    </fieldset>
                </Box>

                <Box ms={'10'} w={'100%'}  >
                    <fieldset mt={3}  >
                        <legend>Last Name</legend>
                        <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} >
                        </Input>
                    </fieldset>
                </Box>

            </Flex>

            <Flex mt={'5'}>
                <Box w={'75%'}>
                    <fieldset mt={3} >
                        <legend>Gender</legend>
                        <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} placeholder='Female'>
                        </Input>
                    </fieldset>

                </Box>

                <Box ms={'32'} w={'100%'} >
                    <fieldset mt={3} >
                        <legend className='phonenoField'>Phone Number</legend>

                        <InputGroup mt={'-3'}   >
                            <InputLeftAddon color={'white'} borderRadius={'none'} bg={'#FE94A2'} border={'none'} children='+880' />
                            <Input h={'40px'} _focus={{ border: 'none' }} border={'none'} type='tel' />
                        </InputGroup>

                    </fieldset>

                </Box>
            </Flex>

            <Flex mt={'5'}>
                <Box w={'48%'} >
                    <fieldset mt={3}  >
                        <legend>Email Address</legend>
                        <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} >
                        </Input>
                    </fieldset>
                </Box>

                <Box ms={'10'} >
                    <fieldset mt={3}  >
                        <legend>Date Of Birth</legend>
                        <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} type='date' >
                        </Input>
                    </fieldset>
                </Box>
            </Flex>

        </Box>
    );
};

export default PassengerInfo;