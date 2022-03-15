import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Image,
    InputGroup,
    InputLeftElement,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import logo from '../../images/logo.png'
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={'transparent'}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="sm"
            >
                <Flex alignItems="center" justifyContent={'space-between'} >
                    <Flex alignItems={'center'}>
                        <chakra.a
                            href="/"
                            title="Flyfar-ladies"
                            display="flex"
                            alignItems="center"
                        >
                            <Image w={'28'} src={logo} />
                            <VisuallyHidden>Flyfar-Ladies</VisuallyHidden>
                        </chakra.a>

                        <InputGroup ms={'3'} w={{ base: '50', md: 'auto' }} mt={2} >
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineSearch />
                            </InputLeftElement>
                            <Input _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'3xl'} type="tel" placeholder="Search..." />
                        </InputGroup>
                    </Flex>
                    <HStack ms={'20'} display="flex" alignItems="center" spacing={5} justifyContent={'space-around'} >
                        <HStack
                            justifyContent={'space-between'}
                            spacing={4}
                            mr={1}
                            color="brand.500"
                            display={{ base: "none", md: "flex" }}
                            ml={'auto'}
                        >
                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Home</Button>

                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Trips</Button>

                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Stock Photos</Button>

                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Jobs for Ladies</Button>

                            <Menu>
                                <MenuButton _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
                                    Design Package
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                    <MenuItem>Mark as Draft</MenuItem>
                                    <MenuItem>Delete</MenuItem>
                                    <MenuItem>Attend a Workshop</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} bg={'white'} bgColor={'transparent'} border={'1px solid #FE94A2'} >Sign in</Button>
                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Sign Up</Button>



                        </HStack>

                        {/* Mobile nav */}
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />


                                <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'white'} >Home</Button>

                                <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'white'} >Trips</Button>

                                <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'white'} >Stock Photos</Button>

                                <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'white'} >Jobs for Ladies</Button>

                                <Menu>
                                    <MenuButton _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
                                        Design Package
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Download</MenuItem>
                                        <MenuItem>Create a Copy</MenuItem>
                                        <MenuItem>Mark as Draft</MenuItem>
                                        <MenuItem>Delete</MenuItem>
                                        <MenuItem>Attend a Workshop</MenuItem>
                                    </MenuList>
                                </Menu>
                                <Button _focus={{ 'outline': 'none', }} _hover={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} bg={'white'} bgColor={'white'} border={'1px solid #FE94A2'} >Sign in</Button>
                                <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Sign Up</Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}