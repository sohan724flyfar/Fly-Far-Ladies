import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Radio,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import upper from "../../images/upper.svg";
import videoStock from "../../images/Video_Secto.webp";
import { AiOutlineSearch } from "react-icons/ai";
import StockImageMain from "./StockImageMain";
import PhotosOne from "../../images/Photos1.webp";
import PhotosTwo from "../../images/photos2.webp";
import photosThree from "../../images/photos5.webp";
import photosFour from "../../images/photos4.webp";
import avatar from "../../images/avatar.webp";
import PackageSlider from "../Home/PackageSlider";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Footer from "../Footer/Footer";
import "./StockImage.css";
import { Link } from "react-router-dom";

const StockImageDetail = () => {
  return (
    <Box>
      {/* navbar start */}
      <Navbar />
      {/* navbar start */}

      {/* main stock start */}
      <Box className="headerbgStock" py={"20"}>
        <Flex
          fontWeight={"bold"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={"4xl"}
        >
          You Can
          <Text color={"white"} ms={"3"} me={3}>
            {" "}
            Buy
          </Text>
          and
          <Flex>
            <Text color={"white"} ms={"3"} me={3}>
              Sell
            </Text>
            Photo
          </Flex>
        </Flex>

        <Text
          mt={"3"}
          fontWeight={"bold"}
          textAlign={"center"}
          w={"30%"}
          mx={"auto"}
          color={"white"}
        >
          You can find the best pakage from here and select it and travel around
          the wrold!{" "}
        </Text>

        <Box bg={"white"} w={"30%"} mx={"auto"} rounded={"md"}>
          <Box p={"3"} mt={"5"} ms={"4"}>
            <Text fontWeight={"bold"}>Free 1-month trial, cancel anytime</Text>
            <Text fontSize={"14px"} fontWeight={"light"}>
              You can find the best pakage from here and select it!
            </Text>

            <Flex
              w={"90%"}
              mt={"3"}
              fontWeight={"semibold"}
              justifyContent={"space-between"}
            >
              <Box>
                <Radio colorScheme="brand" value="1">
                  Buy Month-Annual Plan
                </Radio>
              </Box>

              <Box>
                <Text>$54</Text>
              </Box>
            </Flex>

            <Box fontWeight={"semibold"} mt={"2"}>
              <Radio colorScheme="brand" value="2">
                Buy Single Image Without Month-annual Plan
              </Radio>
            </Box>

            <Box w={"50%"} mx={"auto"}>
              <Button
                ms={"2"}
                px={"10"}
                rounded={"full"}
                mt={"3"}
                _focus={{ outline: "none" }}
                _hover={{
                  border: "1px",
                  bgColor: "white",
                  borderColor: "#FE94A2",
                  color: "#FE94A2",
                }}
                border={"1px solid transparent"}
                bgColor={"#FE94A2"}
                color={"white"}
                borderRadius={"none"}
              >
                Start Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="mainbgStock">
        <Box pt={"10"} w={"50%"} mx={"auto"} textAlign={"center"}>
          <Text fontWeight={"extrabold"} fontSize={"2xl"}>
            Select video or Photos
          </Text>
          <Image w={"50%"} mx={"auto"} src={upper} />

          <Flex mt={"5"} alignItems={"center"} justifyContent={"center"}>
            <Box
              position={"relative"}
              overflow="hidden"
              border={"1px"}
              borderColor={"transparent"}
              borderRadius={"xl"}
              role="group"
            >
              <Image
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 400ms ease",
                  filter: "grayscale(0.5)",
                }}
                borderRadius={"md"}
                w={"100%"}
                h={"250px"}
                cursor={"pointer"}
                src={videoStock}
              ></Image>

              <Box
                position={"absolute"}
                sx={{ bottom: "6px", left: "6px", top: "5px" }}
              >
                <Box>
                  <Image h={"10"} width={"10"} src={avatar} />
                </Box>
              </Box>

              <Box position={"absolute"} sx={{ bottom: "5px", left: "5px" }}>
                <Box
                  ms={"2"}
                  fontWeight={"bold"}
                  color={"white"}
                  fontSize={"lg"}
                >
                  Stock Image
                </Box>
              </Box>
            </Box>

            <Box
              ms={"4"}
              position={"relative"}
              overflow="hidden"
              border={"1px"}
              borderColor={"transparent"}
              borderRadius={"xl"}
              role="group"
            >
              <Image
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 400ms ease",
                  filter: "grayscale(0.5)",
                }}
                borderRadius={"md"}
                w={"100%"}
                h={"250px"}
                cursor={"pointer"}
                src={videoStock}
              ></Image>

              <Box
                position={"absolute"}
                sx={{ bottom: "6px", left: "6px", top: "5px" }}
              >
                <Box>
                  <Image h={"10"} width={"10"} src={avatar} />
                </Box>
              </Box>

              <Box position={"absolute"} sx={{ bottom: "5px", left: "5px" }}>
                <Box
                  ms={"2"}
                  fontWeight={"bold"}
                  color={"white"}
                  fontSize={"lg"}
                >
                  Stock Image
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Container maxW={"container.xl"} mt={"20"} pb={"10"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Our Most Popular and Best Selling Photo And Video
          </Text>

          <Flex alignItems={"center"} mt={"4"}>
            <Text>Popular search</Text>
            <Flex
              ms={"4"}
              fontSize={"12px"}
              px={"2"}
              py={"1"}
              rounded={"full"}
              alignItems={"center"}
              border={"1px solid #FE94A2"}
              bg={"white"}
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Box ms={"2"}>Sunset</Box>
            </Flex>

            <Flex
              ms={"4"}
              fontSize={"12px"}
              px={"2"}
              py={"1"}
              rounded={"full"}
              alignItems={"center"}
              border={"1px solid #FE94A2"}
              bg={"white"}
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Box ms={"2"}>Women's Day</Box>
            </Flex>

            <Flex
              ms={"4"}
              fontSize={"12px"}
              px={"2"}
              py={"1"}
              rounded={"full"}
              alignItems={"center"}
              border={"1px solid #FE94A2"}
              bg={"white"}
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Box ms={"2"}>Flower</Box>
            </Flex>

            <Flex
              ms={"4"}
              fontSize={"12px"}
              px={"2"}
              py={"1"}
              rounded={"full"}
              alignItems={"center"}
              border={"1px solid #FE94A2"}
              bg={"white"}
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Box ms={"2"}>Spring</Box>
            </Flex>

            <Flex
              ms={"4"}
              fontSize={"12px"}
              px={"2"}
              py={"1"}
              rounded={"full"}
              alignItems={"center"}
              border={"1px solid #FE94A2"}
              bg={"white"}
            >
              <Box>
                <AiOutlineSearch />
              </Box>
              <Box ms={"2"}>Science Day</Box>
            </Flex>
          </Flex>

          <Grid templateColumns={"repeat(4,1fr)"} gap={"5"} mt={"5"}>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosOne} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosTwo} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosThree} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosFour} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosOne} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosTwo} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosThree} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosFour} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosOne} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={PhotosTwo} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosThree} />
              </Link>
            </GridItem>
            <GridItem>
              <Link to="/singleStockImage">
                <StockImageMain img={photosFour} />
              </Link>
            </GridItem>
          </Grid>

          <Box w={"10%"} mx={"auto"} mt={"5"}>
            <Button
              w={"100%"}
              rounded={"full"}
              _focus={{ outline: "none" }}
              _hover={{
                border: "1px",
                bgColor: "#FE94A2",
                borderColor: "#FE94A2",
                color: "white",
              }}
              border={"1px solid #FE94A2"}
              Color={"#FE94A2"}
              bg={"white"}
            >
              See More
            </Button>
          </Box>

          <Box>
            <Box mt={"20"}>
              <Box textAlign={"center"}>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                  Our Most Popular{" "}
                  <span style={{ color: "#FE94A2" }}>Tours</span>{" "}
                </Text>

                <Text marginTop={"4"} color={"gray.600"}>
                  Placeholder text commonly used to demonstrate the visual form
                  of <br /> document or a typeface without relying on meaningful
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
        </Container>
      </Box>
      {/* main stock start */}

      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </Box>
  );
};

export default StockImageDetail;
