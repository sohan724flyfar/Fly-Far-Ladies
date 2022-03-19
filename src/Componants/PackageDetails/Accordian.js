import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Accordian = (props) => {
    return (
        <Box>

            <Accordion allowToggle mt={'0'}>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Flex flex='1' textAlign='left' p={'3'}>
                                <Image src={props.img} />
                                <Text ms={'8'} fontWeight={'bold'}>{props.title}</Text>
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} ms={'20'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>

        </Box>
    );
};

export default Accordian;