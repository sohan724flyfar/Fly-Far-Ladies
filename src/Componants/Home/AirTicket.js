import { Box, Grid, GridItem, IconButton, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineLocationMarker, HiChevronDown } from 'react-icons/hi';
import { IoSwapHorizontalOutline } from 'react-icons/io5';
import { AiOutlineCalendar } from 'react-icons/ai';
import DatePicker from 'sassy-datepicker';
import './home.css'


const AirTicket = () => {
    const [tripType, setTripType] = useState('oneway');
    const [airports, setAirports] = useState([]);
    const tripFromEl = useRef();
    const tripToEl = useRef();
    const [jDate, setJDate] = useState('');
    const [rDate, setRDate] = useState('');

    const onJDateChange = (date) => {
        let d = date.toString();
        setJDate(d);
    };
    const onRDateChange = (date) => {
        let d = date.toString();
        setRDate(d);
    };

    const handleTripSwap = () => {
        const temp = tripFromEl.current.value;
        tripFromEl.current.value = tripToEl.current.value;
        tripToEl.current.value = temp;
    }


    useEffect(() => {
        fetch('./AirportList.json')
            .then(res => res.json())
            .then(data => setAirports(data))
    }, [])

    return (
        <Box>
            <RadioGroup
                onChange={setTripType}
                value={tripType}
                colorScheme='brand'>

                <Stack
                    direction='row' gap='2'
                    fontWeight={'semibold'}>

                    <Radio value='oneway'>One Way</Radio>
                    <Radio value='round'>Round Trip</Radio>
                    <Radio value='multi'>Multi City</Radio>
                </Stack>
            </RadioGroup>

            <Box mt='4'>
                <Grid
                    // templateColumns={tripType === 'oneway' ? '2fr 1fr' : '1.25fr 1fr'}
                    templateColumns={{ lg: `${tripType === 'oneway' ? '2fr 1fr' : '1.25fr 1fr'}` }}
                    gap={{ base: '3', md: '6' }}>

                    <GridItem w='100%' h='14'>
                        <Grid templateColumns='repeat(2, 1fr)'
                            gap={{ base: '3', md: '6' }} pos='relative'>

                            <GridItem
                                w='100%' h='14'
                                pos='relative' rounded='xl'>

                                <HiOutlineLocationMarker
                                    style={{
                                        position: 'absolute',
                                        left: '10px', top: '16px', fontSize: '25px',
                                        color: '#FE94A2'
                                    }} />

                                <Input h='14' rounded='xl' pl='10' fontWeight='semibold' color='brand.100'
                                    border='1px' borderColor='brand.100'
                                    _focus={{ border: '1px solid #FE94A2', outline: 'none' }}
                                    _hover={{ border: '1px solid #FE94A2', outline: 'none' }} ref={tripFromEl} defaultValue="Dhaka (Dac)" list='airportsList' />

                            </GridItem>

                            <GridItem
                                w='100%' h='14'
                                pos='relative' rounded='xl'>

                                <HiOutlineLocationMarker
                                    style={{
                                        position: 'absolute',
                                        left: '10px', top: '16px', fontSize: '25px',
                                        color: '#FE94A2'
                                    }} />

                                <Input h='14' rounded='xl' pl='10' fontWeight='semibold' color='brand.100'
                                    border='1px' borderColor='brand.100'
                                    _focus={{ border: '1px solid #FE94A2', outline: 'none' }}
                                    _hover={{ border: '1px solid #FE94A2', outline: 'none' }} ref={tripToEl} defaultValue="Chottogram (Ctg)" list='airportsList' />

                            </GridItem>
                            <IconButton onClick={handleTripSwap} pos='absolute'
                                colorScheme='brand' w='10' rounded='full'
                                aria-label='Search database'
                                sx={{ left: '50%', transform: 'translate(-50%)', top: '8px' }}
                                icon={<IoSwapHorizontalOutline style={{ fontSize: '25px' }} />}
                            />
                            <datalist id="airportsList">
                                {
                                    airports.map(airport => (
                                        <option key={airport.id}>{`${airport.name} (${airport.code})`}</option>
                                    ))
                                }
                            </datalist>
                        </Grid>
                    </GridItem>
                    <GridItem w='100%' h='12'>
                        <Grid templateColumns={tripType === 'oneway' ? '1fr' : '1fr 1fr'} gap={{ base: '3', md: '6' }}>
                            <GridItem
                                w='100%' h='14'
                                pos='relative' rounded='xl' role='group'>

                                <AiOutlineCalendar
                                    style={{
                                        position: 'absolute',
                                        left: '10px', top: '16px', fontSize: '25px',
                                        color: '#FE94A2'
                                    }} />

                                <Box h='14' rounded='xl' pl='14' fontWeight='semibold' color='brand.100'
                                    border='1px' borderColor='brand.100'
                                    _focus={{ border: '1px solid #FE94A2', outline: 'none' }}
                                    _hover={{ border: '1px solid #FE94A2', outline: 'none' }} cursor='pointer' >

                                    <Text color='gray.400' mt='-1'>Journey Date</Text>
                                    <Text fontWeight='bold' color='black' mt='-1.5'><Text as='span' color='brand.100'>{jDate.slice(8, 10)}</Text> {jDate.slice(4, 8)}</Text>
                                    <Text mt='-1.5'>{jDate.slice(0, 4)}</Text>
                                </Box>

                                <HiChevronDown
                                    style={{
                                        position: 'absolute',
                                        right: '10px', top: '16px', fontSize: '25px',
                                        color: '#FE94A2'
                                    }} />

                                <Box
                                    pos='absolute' minW='full'
                                    d='none' _groupHover={{ display: "block" }}
                                    bg='white' zIndex={100}>
                                    <DatePicker onChange={onJDateChange} />

                                </Box>

                            </GridItem>
                            {
                                tripType === 'oneway' ? <></> : <GridItem
                                    w='100%' h='14'
                                    pos='relative' rounded='xl' role='group'>

                                    <AiOutlineCalendar
                                        style={{
                                            position: 'absolute',
                                            left: '10px', top: '16px', fontSize: '25px',
                                            color: '#FE94A2'
                                        }} />

                                    <Box h='14' rounded='xl' pl='14' fontWeight='semibold' color='brand.100'
                                        border='1px' borderColor='brand.100'
                                        _focus={{ border: '1px solid #FE94A2', outline: 'none' }}
                                        _hover={{ border: '1px solid #FE94A2', outline: 'none' }} cursor='pointer' >

                                        <Text color='gray.400' mt='-1'>Return Date</Text>
                                        <Text fontWeight='bold' color='black' mt='-1.5'><Text as='span' color='brand.100'>{rDate.slice(8, 10)}</Text> {rDate.slice(4, 8)}</Text>
                                        <Text mt='-1.5'>{rDate.slice(0, 4)}</Text>
                                    </Box>

                                    <HiChevronDown
                                        style={{
                                            position: 'absolute',
                                            right: '10px', top: '16px', fontSize: '25px',
                                            color: '#FE94A2'
                                        }} />

                                    <Box
                                        pos='absolute' minW='full'
                                        d='none' _groupHover={{ display: "block" }}
                                        bg='white' zIndex={100}>
                                        <DatePicker onChange={onRDateChange} />

                                    </Box>

                                </GridItem>
                            }

                        </Grid>
                    </GridItem>
                </Grid>
            </Box >
        </Box >
    );
};

export default AirTicket;