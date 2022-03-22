import { Box, Button, Checkbox, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { RiVisaFill, RiHotelLine } from 'react-icons/ri';
import { IoTicketOutline } from 'react-icons/io5';
import { FiPackage, FiSearch } from 'react-icons/fi';
import AirTicket from './AirTicket';

const Search = () => {
    return (
        <Container maxW='container.lg' mt='4' borderRadius='md'>
            <Box>
                <Tabs defaultIndex={1} colorScheme='brand' pos='relative' pt='10'>

                    <TabList w={{ md: 'xl' }} mx='auto' bg='white' shadow='sm' pos='absolute' rounded='lg' top='-2' sx={{ left: '50%', transform: 'translateX(-50%)' }} p={'5'}>
                        <Tab fontWeight='semibold' sx={{ width: '25%' }}><FiPackage style={{ fontSize: "20px", marginRight: '5px', color: "#FE94A2" }} /> Package</Tab>

                        <Tab fontWeight='semibold' sx={{ width: '25%' }}><IoTicketOutline style={{ fontSize: "20px", marginRight: '5px', color: "#FE94A2" }} /> Air Ticket</Tab>

                        <Tab fontWeight='semibold' sx={{ width: '25%' }}><RiVisaFill style={{ fontSize: "20px", marginRight: '5px', color: "#FE94A2" }} /> Visa</Tab>

                        <Tab fontWeight='semibold' sx={{ width: '25%' }}><RiHotelLine style={{ fontSize: "20px", marginRight: '5px', color: "#FE94A2" }} /> Hotel</Tab>
                    </TabList>

                    <TabPanels sx={{ boxShadow: '0px 0px 11px rgba(245, 153, 166, 0.85)' }} bg='white' rounded='lg' pb='8' mt={{ base: '4', md: '-2' }}>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <AirTicket />
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                            <Checkbox colorScheme='brand' defaultChecked>
                                Checkbox
                            </Checkbox>

                        </TabPanel>


                    </TabPanels>
                    <Button pos='absolute'
                        colorScheme='brand' w='28' rounded='full'
                        aria-label='Search database'
                        sx={{ left: '50%', transform: 'translate(-50%)', bottom: '-18px' }}
                        leftIcon={<FiSearch style={{ fontSize: '20px' }} />}
                    >Search</Button>
                </Tabs>
            </Box>
        </Container >
    );
};

export default Search;