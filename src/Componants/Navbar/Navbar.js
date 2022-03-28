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
    Container,
    Modal,
    ModalOverlay,
    ModalContent,

    ModalCloseButton,
    ModalBody,
    Text,
    Switch,
    InputRightElement,
    Link,

} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import logo from '../../images/logo.png'
import { ChevronDownIcon } from "@chakra-ui/icons";
import facebook from '../../images/facebook2.png'
import google from '../../images/google.png'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const { isOpen: isSignupOpen, onOpen: onSignupOpen, onClose: onSignupClose } = useDisclosure();
    const { isOpen: isSigninOpen, onOpen: onSigninOpen, onClose: onSigninClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show);
    const handleOpenSignup = () => {
        onSigninClose();
        onSignupOpen();
    }
    const handleOpenSignin = () => {
        onSignupClose();
        onSigninOpen();
    }

    return (
        <Box className={'navbg'}  >
            <Box >
                <Container maxWidth={'container.2xl'}  >
                    <React.Fragment>
                        <chakra.header
                            bg={'transparent'}
                            w="full"
                            px={'3'}
                            py={4}

                        >
                            <Flex alignItems="center" justifyContent={'space-between'} >
                                <Flex alignItems={'center'}>
                                    <chakra.a
                                        href="/"
                                        title="Flyfar-ladies"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <Image w={'32'} ms={'2'} src={logo} />
                                        <VisuallyHidden>Flyfar-Ladies</VisuallyHidden>
                                    </chakra.a>

                                    <InputGroup ms={'3'} w={{ base: '50', md: 'auto' }} mt={2} >
                                        <InputLeftElement pointerEvents="none">
                                            <AiOutlineSearch />
                                        </InputLeftElement>
                                        <Input bg={'white'} _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'3xl'} type="tel" placeholder="Search..." />
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
                                        <NavLink to="/home">
                                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Home</Button>
                                        </NavLink>

                                        <Menu>
                                            <MenuButton _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} as={Button} rightIcon={<ChevronDownIcon />}>
                                                Service
                                            </MenuButton>
                                            <MenuList >
                                                <NavLink to="/package"><MenuItem>All Package</MenuItem></NavLink>
                                                <MenuItem>Create a Copy</MenuItem>
                                                <MenuItem>Mark as Draft</MenuItem>
                                                <MenuItem>Delete</MenuItem>
                                                <MenuItem>Attend a Workshop</MenuItem>
                                            </MenuList>
                                        </Menu>




                                        <NavLink to="/stockphotos">
                                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Stock Photos</Button>
                                        </NavLink>



                                        <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Jobs </Button>

                                        <NavLink to="/blog">
                                            <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >Blog </Button>
                                        </NavLink>

                                        <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bg={'transparent'} >About Us </Button>


                                        <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} onClick={onSigninOpen} >Sign in</Button>



                                        <Modal isOpen={isSigninOpen} onClose={onSigninClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalCloseButton outlineColor={'transparent'} _focus={{ 'outline': 'none' }} />
                                                <ModalBody textAlign={'center'} p={5} mt={10}>
                                                    <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '2px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} bg={'white'} w={'90%'} border={'2px solid #FE94A2'}><Image w={5} me={'3'} src={google} />Continue With Google</Button>
                                                    <Text fontWeight={'bold'}>Or</Text>
                                                    <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '2px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} bg={'white'} w={'90%'} border={'2px solid #FE94A2'}><Image w={5} me={'3'} src={facebook} />Continue With Facebook</Button>

                                                    <Box mt={'6'}>
                                                        <Input w={'90%'} placeholder='Email' type={'email'} focusBorderColor='#FE94A2' isInvalid
                                                            errorBorderColor='black' />

                                                        <InputGroup mt={'3'} w={'90%'} ms={5}>
                                                            <Input
                                                                pr='4.5rem'
                                                                type={show ? 'text' : 'password'}
                                                                placeholder='Enter password'
                                                                focusBorderColor='#FE94A2'
                                                                isInvalid
                                                                errorBorderColor='black'
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                                    {show ? 'Hide' : 'Show'}
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>
                                                    </Box>

                                                    <Box mt={'6'}>
                                                        <Button w={'90%'} _focus={{ 'outline': 'none', }} _hover={{ 'color': '#FE94A2', 'bg': 'white' }} color={'white'} bgColor={'#FE94A2'} border={'2px solid #FE94A2'}  >Sign in</Button>
                                                    </Box>

                                                    <Flex ms={'5'} mt={'3'} w={'90%'} justifyContent={'space-between'}>
                                                        <Flex alignItems={'center'}>
                                                            <Switch me={'2'} id='email-alerts' />
                                                            Remember
                                                        </Flex>
                                                        <Text fontWeight={'bold'}>Forgot Password</Text>
                                                    </Flex>
                                                    <Text mt={'6'} fontSize={'12px'}>You Don't Have Account? <Text as={'button'} fontSize={'14px'} fontWeight={'semibold'} onClick={handleOpenSignup}>Sign Up</Text> </Text>

                                                </ModalBody>


                                            </ModalContent>
                                        </Modal>



                                        <Modal isOpen={isSignupOpen} onClose={onSignupClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalCloseButton outlineColor={'transparent'} _focus={{ 'outline': 'none' }} />
                                                <ModalBody textAlign={'center'} p={5} mt={10}>
                                                    <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '2px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} bg={'white'} w={'90%'} border={'2px solid #FE94A2'}><Image w={5} me={'3'} src={google} />Continue With Google</Button>
                                                    <Text fontWeight={'bold'}>Or</Text>
                                                    <Button _focus={{ 'outline': 'none' }} _hover={{ 'border': '2px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} bg={'white'} w={'90%'} border={'2px solid #FE94A2'}><Image w={5} me={'3'} src={facebook} />Continue With Facebook</Button>

                                                    <Box mt={'6'}>
                                                        <Input w={'90%'} isInvalid
                                                            errorBorderColor='black' mt={'3'} placeholder='Name' type={'text'} />
                                                        <Input w={'90%'} isInvalid
                                                            errorBorderColor='black' mt={'3'} placeholder='Date Of Birth' />
                                                        <Input isInvalid
                                                            errorBorderColor='black' mt={'3'} w={'90%'} placeholder='Phone Number' type={'text'} />

                                                        <Input mt={'3'} isInvalid
                                                            errorBorderColor='black' w={'90%'} placeholder='Email' type={'email'} />

                                                        <InputGroup mt={'3'} w={'90%'} ms={5}>
                                                            <Input
                                                                pr='4.5rem'
                                                                type={show ? 'text' : 'password'}
                                                                placeholder='Enter password'
                                                                focusBorderColor='#FE94A2'
                                                                isInvalid
                                                                errorBorderColor='black'
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                                    {show ? 'Hide' : 'Show'}
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>
                                                        <InputGroup mt={'3'} w={'90%'} ms={5}>
                                                            <Input
                                                                pr='4.5rem'
                                                                type={show ? 'text' : 'password'}
                                                                placeholder='Re-Type password'
                                                                focusBorderColor='#FE94A2'
                                                                isInvalid
                                                                errorBorderColor='black'
                                                            />
                                                            <InputRightElement width='4.5rem'>
                                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                                    {show ? 'Hide' : 'Show'}
                                                                </Button>
                                                            </InputRightElement>
                                                        </InputGroup>


                                                    </Box>

                                                    <Box mt={'6'}>
                                                        <Button w={'90%'} _focus={{ 'outline': 'none', }} _hover={{ 'color': '#FE94A2', 'bg': 'white' }} color={'white'} bgColor={'#FE94A2'} border={'2px solid #FE94A2'}  >Sign up</Button>
                                                    </Box>
                                                    <Text mt={'6'} fontSize={'12px'}>You Have An Account? <Text as={'button'} fontSize={'14px'} fontWeight={'semibold'} onClick={handleOpenSignin}>Sign In</Text>  </Text>


                                                    <Text mt={'6'} fontSize={'10px'}>You Have An Account? <a href="">This site is protected by reCAPTCHA and the <span color="red" >Google Privacy Policy</span> and Terms of Service apply.</a></Text>

                                                    <Text mt={'3'} fontSize={'10px'}>You Have An Account? <a href="">By clicking "Create account", I agree to Fly Far Ladies TOS and Privacy Policy.</a></Text>

                                                </ModalBody>


                                            </ModalContent>
                                        </Modal>

                                    </HStack >

                                    {/* Mobile nav */}
                                    <Box Box display={{ base: "inline-flex", md: "none" }
                                    }>
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


                                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'backgroundColor': '#FE94A2', 'color': 'white' }} bg={'white'} bgColor={'white'} border={'1px solid #FE94A2'} >Sign in</Button>
                                            <Button _focus={{ 'outline': 'none', }} _hover={{ 'border': '1px', 'bgColor': 'white', 'borderColor': '#FE94A2', 'color': '#FE94A2' }} border={'1px solid transparent'} bgColor={'#FE94A2'} color={'white'} >Sign Up</Button>
                                        </VStack>
                                    </Box >
                                </HStack >
                            </Flex >
                        </chakra.header >
                    </React.Fragment >
                </Container >
            </Box >
        </Box >
    );
}