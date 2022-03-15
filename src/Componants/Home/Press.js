import { Box, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';


const Press = (props) => {
    return (
        <GridItem>

            <Box>
                <Box borderBottom={'2px'} pb={'2'} borderColor={'rgba(245, 153, 166, 0.85)'}>
                    <Image src={props.img} /></Box>
                <Text mt={'3'} fontSize={'12px'}>এক টুইটে জেলেনস্কি বলেন, তিনি মেলিতোপোল শহরের মেয়রকে মুক্তি দিতে বেনেটের সহযোগিতা চেয়েছেন।</Text>
                <Text mt={'2'} fontSize={'13px'}>28 November 2020</Text>

            </Box>






        </GridItem>
    );
};

export default Press;