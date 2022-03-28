
import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    Grid,
    GridItem,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Select,
    Text,
} from "@chakra-ui/react";
import React from "react";
import worldImage from "../../images/world.webp";
import plane from "../../images/plane.webp";
import videoIcon from "../../images/video play.webp";
import bannerGirl from "../../images/banner-girls.webp";
import timePicture from "../../images/time.webp";
import secnery from "../../images/Scenery2.webp";
import location from "../../images/location.webp";
import "./home.css";
import featuredJob from "../../images/featured-job.webp";
import PhotosOne from "../../images/Photos1.webp";
import PhotosTwo from "../../images/photos2.webp";
import photosFour from "../../images/photos4.webp";
import Navbar from "../Navbar/Navbar";
import Recent1 from "./Recent1";
import blog1 from "../../images/blog-1.webp";
import blog2 from "../../images/blog-2.webp";
import Recent2 from "./Recent2";
import Clients from "./Clients";
import qutation from "../../images/qutation.webp";
import qutation2 from "../../images/qutation2.webp";
import PackageSlider from "./PackageSlider";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CoreTeamSlider from "./CoreTeamSlider";
import StockImageSlider2 from "./StockImageSlider2";
import MediaSlider from "./MediaSlider";
import ClientsSlider from "./ClientsSlider";
import Footer from "../Footer/Footer";
import Search from "./Search";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <Box className="home">
            {/* navbar */}
            <Container maxW={"container.2xl"}>
                <Navbar />
            </Container>
            {/* navbar End */}

            {/* Banner design start */}
            <Container maxW={"container.lg"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={"10"}>
                    <GridItem mt={"16"}>
                        <Flex
                            justifyContent={"center"}
                            style={{ background: "#F4DFDF" }}
                            width={"60"}
                            p={"1"}
                            borderRadius={"16"}
                        >
                            <Box mt={"-0.5"} sx={{ color: "#FE94A2", fontWeight: "bold" }}>
                                Let's Explore the World{" "}
                            </Box>
                            <Image
                                ms={"2"}
                                mt={"0.5"}
                                width={"5"}
                                height={"5"}
                                src={worldImage}
                                alt="Dan Abramov"
                            />
                        </Flex>

                        <Box marginTop={"5"}>
                            <Text fontSize={"4xl"} fontWeight={"bold"}>
                                It's a Big World <br /> Out There{" "}
                                <span style={{ color: "#FE94A2" }}>Go Explore!</span>{" "}
                                <Image
                                    sx={{ display: "inline", width: "35px" }}
                                    src={plane}
                                ></Image>{" "}
                            </Text>

                            <Text marginTop={"4"} color={"gray.600"}>
                                Placeholder text commonly used to demonstrate the visual form of
                                document or a typeface without relying on meaningful content.{" "}
                                <br /> may be used as a placeholder before the final
                            </Text>
                        </Box>

                        <Flex marginTop={"5"}>
                            <Box>
                                <Button
                                    _hover={{ backgroundColor: "white" }}
                                    sx={{ border: "1px solid #FE94A2", background: "white" }}
                                >
                                    Watch Video{" "}
                                    <Image mt={"1"} ms={"2"} width={"4"} src={videoIcon}></Image>{" "}
                                </Button>
                            </Box>
                            <Box ms={"4"}>
                                <Button
                                    _hover={{
                                        backgroundColor: "white",
                                        color: "black",
                                        border: "1px solid #FE94A2",
                                    }}
                                    sx={{ backgroundColor: "#FE94A2", color: "white" }}
                                >
                                    Read More
                                </Button>
                            </Box>
                        </Flex>
                    </GridItem>

                    <GridItem mx={"auto"} position={"relative"}>
                        <Box>
                            <Image
                                ms={"16"}
                                sx={{ width: "360px", height: "430px" }}
                                src={bannerGirl}
                            ></Image>
                        </Box>
                        <Box position={"absolute"} sx={{ top: "70px", left: "290px" }}>
                            <Image width={"36"} ms={"16"} src={timePicture}></Image>
                        </Box>

                        <Box position={"absolute"} sx={{ top: "200px", right: "230px" }}>
                            <Flex
                                position={"relative"}
                                p={50}
                                w="280px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    mx="auto"
                                    rounded="2xl"
                                    shadow="sm"
                                    maxW="2xl"
                                    backgroundColor={"white"}
                                >
                                    <Image
                                        rounded="3xl"
                                        w="90%"
                                        h={"full"}
                                        src={secnery}
                                        alt="Article"
                                        mx={"auto"}
                                        mt={"2"}
                                    />

                                    <Box p={"3"}>
                                        <Box>
                                            <Image display={"inline"} me={"1"} src={location}></Image>
                                            <Text display={"inline"}> Morocco</Text>
                                        </Box>
                                        <Text
                                            mt={"2"}
                                            width={"full"}
                                            borderRadius={"lg"}
                                            sx={{ height: "5px", backgroundColor: "#FF6469" }}
                                        ></Text>
                                        <Text
                                            mt={"2"}
                                            mb={"3"}
                                            width={"70%"}
                                            borderRadius={"lg"}
                                            sx={{ height: "5px", backgroundColor: "#C29151" }}
                                        ></Text>
                                    </Box>
                                </Box>

                                <Box position={"absolute"} sx={{ top: "240px", left: "110px" }}>
                                    <Box>
                                        <Avatar
                                            name="Dan Abrahmov"
                                            size="sm"
                                            src="https://i.ibb.co/nP4ky9V/273975415-306291008235872-9163209598122818815-n.webp"
                                        />
                                        <Avatar
                                            name="Kola Tioluwani"
                                            ml="-2"
                                            size="sm"
                                            src="https://i.ibb.co/CPtqpLw/273562364-667224527942972-7790949942330350981-n.webp"
                                        />
                                        <Avatar
                                            name="Kent Dodds"
                                            ml="-2"
                                            size="sm"
                                            src="https://i.ibb.co/nmZYQ9w/275025680-639749970436000-7961815956715700842-n.webp"
                                        />
                                        <Avatar
                                            name="Ryan Florence"
                                            ml="-2"
                                            size="sm"
                                            shadow="sm"
                                            src="https://i.ibb.co/dB14jq1/273887452-1474349882966941-5385975708901422518-n.webp"
                                        />
                                        <Avatar name="5 K" ml="-2" size="sm" bg="white" shadow="md">
                                            +
                                        </Avatar>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
            {/* Banner design End */}

            {/* search section start */}
            <Box mt={"32"}>
                <Search />
            </Box>
            {/* search section end */}

            {/* Tours-packgae started */}
            <Box>
                <Box mt={"72"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Our Most Popular <span style={{ color: "#FE94A2" }}>Tours</span>{" "}
                        </Text>

                        <Text marginTop={"4"} color={"gray.600"}>
                            Placeholder text commonly used to demonstrate the visual form of{" "}
                            <br /> document or a typeface without relying on meaningful
                            content.{" "}
                        </Text>
                    </Box>
                    <Box>
                        <Container maxW={"container.xl"}>
                            <Flex
                                pe={8}
                                justifyContent={"end"}
                                cursor={"pointer"}
                                alignItems={"center"}
                                fontWeight={"bold"}
                            >
                                {" "}
                                View more{" "}
                                <Box ms={"2"} mt="0.5">
                                    <HiOutlineArrowNarrowRight />
                                </Box>
                            </Flex>
                        </Container>
                    </Box>
                </Box>
                <Box mt={""}>
                    <Container maxW={"container.xl"} mb={"56"}>
                        <PackageSlider />
                    </Container>
                </Box>
            </Box>
            {/* Tours-packgae End */}

            {/* Featured job start */}
            <Box>
                <Box mb={"10"} mt={"-24"}>
                    <Container maxW={"container.xl"}>
                        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
                            <GridItem w="100%">
                                <Image w="100%" src={featuredJob}></Image>
                            </GridItem>
                            <GridItem w="100%" p={"3"} mt={"24"} ms={"5"}>
                                <Text fontSize={"4xl"} fontWeight={"bold"}>
                                    Featured <span style={{ color: "#FE94A2" }}>Job</span>{" "}
                                </Text>
                                <Text fontSize={"md"} color={"gray.600"}>
                                    Employers Offering Jobs
                                </Text>
                                <Box mt={"3"} width={"90%"}>
                                    <span fontSize={"lg"}>
                                        In publishing and graphic design, Lorem ipsum is a
                                        placeholder text commonly used to demonstrate the visual
                                        form of a document or a typeface without relying on
                                        meaningful content. Lorem ipsum may be used as a placeholder
                                        before the final copy is available
                                    </span>
                                </Box>


                                <Box mt={"3"}>
                                    <Button
                                        _hover={{
                                            backgroundColor: "white",
                                            color: "black",
                                            border: "1px solid #FE94A2",
                                        }}
                                        sx={{ backgroundColor: "#FE94A2", color: "white" }}
                                    >
                                        View Jobs
                                    </Button>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            {/* Featured job End */}

            {/* stock image started */}
            <Box>
                <Box mt={"36"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Stock <span style={{ color: "#FE94A2" }}>Images</span>{" "}
                            <span>&</span> <span style={{ color: "#FE94A2" }}>Video</span>
                        </Text>

                        <Text color={"gray.600"}>
                            Placeholder text commonly used to demonstrate the visual form of{" "}
                        </Text>
                    </Box>

                    <Box>
                        <Container maxW={"container.xl"}>
                            <NavLink to="/stockphotos">
                                <Flex
                                    pe={10}
                                    justifyContent={"end"}
                                    cursor={"pointer"}
                                    alignItems={"center"}
                                    fontWeight={"bold"}
                                >
                                    {" "}
                                    View more{" "}
                                    <Box ms={"2"} mt="0.5">
                                        <HiOutlineArrowNarrowRight />
                                    </Box>
                                </Flex>
                            </NavLink>
                        </Container>
                    </Box>
                </Box>

                <Box pb={"22"}>
                    <Container maxW={"container.xl"}>
                        <StockImageSlider2 />
                    </Container>
                </Box>
            </Box>
            {/* stock image End */}

            {/* Blog start */}
            <Box>
                <Box mt={"24"} mb={"10"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Welcome To Our <span style={{ color: "#FE94A2" }}>Blog</span>
                        </Text>

                        <Text color={"gray.600"}>
                            Placeholder text commonly used to demonstrate the visual form of{" "}
                        </Text>
                    </Box>
                </Box>

                <Container maxW={"container.xl"}>
                    <Box>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Box fontWeight={"bold"}>Recent Post</Box>
                            <Box>
                                <Flex
                                    justifyContent={"end"}
                                    cursor={"pointer"}
                                    alignItems={"center"}
                                    fontWeight={"bold"}
                                >
                                    {" "}
                                    View more{" "}
                                    <Box ms={"2"} mt="0.5">
                                        <HiOutlineArrowNarrowRight />
                                    </Box>
                                </Flex>
                            </Box>
                            {/* <Flex ms={'5'} justifyContent={'space-between'} >
                                <InputGroup ms={'3'}  >
                                    <InputLeftElement pointerEvents="none">
                                        <AiOutlineSearch />
                                    </InputLeftElement>
                                    <Input bg={'white'} _hover={{ 'borderColor': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'3xl'} type="tel" placeholder=" Quick Search..." />
                                </InputGroup>

                                <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Select Writer'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>

                                <Select ms={'3'} color={'white'} backgroundColor={'#FE94A2'} _hover={{ 'borderColor': '#FE94A2', 'bg': 'white', 'color': '#FE94A2' }} borderColor={'#FE94A2'} borderRadius={'sm'} placeholder='Select Writer'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>

                            </Flex> */}
                        </Flex>
                    </Box>
                </Container>

                <Container maxWidth={"container.2xl"} pe={"16"}>
                    <Grid templateColumns={"6fr 3fr 3fr"}>
                        <GridItem>
                            <Recent1 img={PhotosOne} />
                            <Recent1 img={PhotosTwo} />
                            <Recent1 img={photosFour} />
                        </GridItem>
                        <GridItem>
                            <Recent2 img={blog1} />
                        </GridItem>
                        <GridItem ms={"5"} me={"5"}>
                            <Recent2 img={secnery} />
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
            {/* Blog End */}

            {/* Clients opinion started */}
            <Box>
                <Box mt={"24"} mb={"10"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Welcome To Our <span style={{ color: "#FE94A2" }}>Clients</span>{" "}
                            Say
                        </Text>

                        <Text color={"gray.600"}>
                            Placeholder text commonly used to demonstrate the visual form of{" "}
                        </Text>
                    </Box>
                </Box>

                <Box mt={"12"} mb={12}>
                    <Container maxW={"container.xl"}>
                        <Box textAlign={"end"} w={"100%"} mt={"-8"}>
                            <Button
                                _hover={{ backgroundColor: "white" }}
                                sx={{ border: "1px solid #FE94A2", background: "white" }}
                            >
                                Watch More{" "}
                                <Image mt={"1"} ms={"2"} width={"4"} src={videoIcon}></Image>{" "}
                            </Button>

                        </Box >

                        <ClientsSlider />
                    </Container >
                </Box >
            </Box >
            {/* Clients opinion End */}

            {/* media and asset start */}
            <Box>
                <Box mt={"24"} mb={"10"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            {" "}
                            <span style={{ color: "#FE94A2" }}>Media</span> And{" "}
                            <span style={{ color: "#FE94A2" }}>Asset</span>
                        </Text>
                    </Box>
                </Box>

                <Container maxWidth={"container.xl"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        {" "}
                        <span style={{ color: "#FE94A2" }}>Founder</span> Massage
                    </Text>

                    <Grid templateColumns={"6fr 6fr"} gap={10}>
                        <GridItem>
                            <Box mt={"2"} fontSize={"14px"}>
                                <Image mt={""} display={"inline-block"} src={qutation} />
                                Our Press team loves working with journalist the world to share
                                compelling, unique stories. If You’re member of the media and
                                would like to talk please get in touch with the appropriate team
                                or send an email to Our Press team loves working with journalist
                                the world to share compelling, unique stories. If You’re member
                                of the media and would like to talk please get intouch with the
                                appropriate team or send an email to Our Press team loves
                                working with journalist the world to share compelling, unique
                                stories. If You’re member of the media and would like to talk
                                please get in touch with the appropriate team or send an email
                                to Our Press team loves working with journalist the world to
                                share compelling, unique stories. If You’re member of the media
                                and would like to talk please get in touch with the appropriate
                                team or send an email to Our Press team loves working with
                                journalist the world to share compelling, unique stories. If
                                You’re member of the media and would like to talk please get in
                                touch with the appropriate team or send an email to Our Press
                                team loves working with journalist the world to share
                                compelling, unique stories. If You’re member of the media and
                                would like to talk please get in touch with the appropriate team
                                or send an email to!
                                <Image mt={""} display={"inline-block"} src={qutation2} />
                            </Box>
                            <Box textAlign={"end"} mt={2}>
                                <Text fontWeight={"BOLD"}>Nusrat jahan</Text>
                                <Text pe={2} fontSize={"12PX"}>
                                    Founder & CEO
                                </Text>
                            </Box>
                        </GridItem>

                        <GridItem>
                            <Image
                                h={"90%"}
                                w={"full"}
                                shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
                                mt={""}
                                src={blog2}
                            />
                        </GridItem>
                    </Grid>
                </Container>

                <Container mt={"24"} maxWidth={"container.xl"}>
                    <Flex alignItems={"center"}>
                        <Text fontWeight={"bold"}>Press Coverage</Text>
                        <Box ms={"3"}>
                            <Button
                                _hover={{ backgroundColor: "white" }}
                                sx={{ border: "1px solid #FE94A2", background: "white" }}
                            >
                                Watch video{" "}
                                <Image mt={"1"} ms={"2"} width={"4"} src={videoIcon}></Image>{" "}
                            </Button>
                        </Box>
                    </Flex>
                </Container>

                <Box mt={"12"} mb={12}>
                    <Container maxW={"container.xl"}>
                        <MediaSlider />
                    </Container>
                </Box>
            </Box>
            {/* media and asset End */}

            {/* core team start */}
            <Box>
                <Box mt={"24"} mb={"10"}>
                    <Box textAlign={"center"}>
                        <Text fontSize={"4xl"} fontWeight={"bold"}>
                            Our Core <span style={{ color: "#FE94A2" }}>Team</span>{" "}
                        </Text>

                        <Text color={"gray.600"}>
                            In publishing and graphic design, Lorem ipsum is a placeholder
                            text <br /> commonly used to demonstrate the visual form of a
                            document
                        </Text>
                    </Box>
                </Box>

                <Box mt={"12"}>
                    <Container maxW={"container.xl"}>
                        <CoreTeamSlider />
                    </Container>
                </Box>
            </Box>
            {/* core team End */}

            {/* footer start */}
            <Footer />
            {/* footer start */}
        </Box >
    );
}

export default Home;
