import { Box, Flex, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import avatar from "../../images/avatar.webp";
import wishlist from "../../images/wishlist.webp";
import wishlist2 from "../../images/wishlist2.webp";
import wishlist3 from "../../images/wishlist3.webp";
import "./home.css";

const StockImage = (props) => {
  return (
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
        borderRadius={"xl"}
        w={"70"}
        h={"250px"}
        cursor={"pointer"}
        src={props.img}
      ></Image>

      <Box position={"absolute"} _groupHover={{ top: "5px", right: "5px" }}>
        <Image cursor={"pointer"} width={"10"} src={wishlist} />
        <Image cursor={"pointer"} width={"10"} src={wishlist2} />
        <Image cursor={"pointer"} width={"10"} src={wishlist3} />
      </Box>

      <Box position={"absolute"} _groupHover={{ bottom: "5px", left: "5px" }}>
        <Flex alignItems={"center"}>
          <Box>
            <Image h={"10"} width={"10"} src={avatar} />
          </Box>
          <Box ms={"2"} fontWeight={"bold"} color={"white"}>
            Hosen Rahman
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default StockImage;
