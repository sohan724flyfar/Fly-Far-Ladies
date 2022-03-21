import { Box, Button, Flex, Input, InputGroup, InputLeftAddon, Select, Text } from '@chakra-ui/react';
import React from 'react';
import PassengerInfo from './PassengerInfo';

const TravellerDetails = () => {
    return (
        <Box pb={'20'}>
            <Flex fontSize={'xl'} alignItems={'center'} mt={'10'}>
                <Text px={'3'} borderEnd={'1px solid black'} fontWeight={'bold'}>Enter Traveller Details</Text>
                <Text color={'#FE94A2'} ms={'3'} fontWeight={'bold'}>Sign In</Text>
                <Text fontSize={"14px"} ms={'2'}>to Book Faster</Text>
            </Flex>

            <Box mt={'4'} border={'1px solid #FE94A2'} p={'6'} bg={'white'}>
                <Box mt={'3'}>
                    <Text fontWeight={'semibold'}>Passenger - Adult(Primary Contact)</Text>

                </Box>

                <Box mt={'3'}>
                    <PassengerInfo title={'passenger 1'} />

                    <Box mt={'5'}>
                        <PassengerInfo title={'passenger 2'} />
                    </Box>

                    <Box mt={'5'}>
                        <PassengerInfo title={'passenger 3'} />
                    </Box>

                    <Box mt={'5'}>

                        <Text mb={'3'} fontSize={'xl'} fontWeight={'bold'}>Passenger-Child(Primary Contact)</Text>
                        <PassengerInfo />
                    </Box>

                    <Box mt={'5'}>

                        <Text mb={'3'} fontSize={'xl'} fontWeight={'bold'}>Passenger-Infant(Primary Contact)</Text>
                        <PassengerInfo />
                    </Box>

                    <Box mt={'5'}>

                        <Text mb={'3'} fontSize={'xl'} fontWeight={'bold'}>Gurdian contact for emergency</Text>
                        <Flex>
                            <Box w={'48%'} >
                                <fieldset mt={3}  >
                                    <legend>Name</legend>
                                    <Input mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} >
                                    </Input>
                                </fieldset>
                            </Box>
                            <Box ms={'10'}>
                                <fieldset mt={3} >
                                    <legend>Relation</legend>
                                    <Select mt={'-2'} border='none' _focus={{ border: 'none' }} _hover={{ border: 'none' }} placeholder={'Father'} >
                                        <option value='option1'>Father</option>
                                        <option value='option2'>Mother</option>
                                        <option value='option3'>Elder brother</option>
                                        <option value='option3'>Elder Sister</option>
                                    </Select>
                                </fieldset>

                            </Box>
                        </Flex>
                    </Box>


                    <Box w={'50%'} mt={'5'} >
                        <fieldset mt={3} >
                            <legend className='phonenoField'>Phone Number</legend>

                            <InputGroup mt={'-3'}   >
                                <InputLeftAddon color={'white'} borderRadius={'none'} bg={'#FE94A2'} border={'none'} children='+880' />
                                <Input h={'40px'} _focus={{ border: 'none' }} border={'none'} type='tel' />
                            </InputGroup>

                        </fieldset>

                    </Box>


                </Box>

            </Box>

            <Box>
                <Button w={'100%'} _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} borderRadius={'none'}>Continue</Button>
            </Box>
        </Box>
    );
};

export default TravellerDetails;