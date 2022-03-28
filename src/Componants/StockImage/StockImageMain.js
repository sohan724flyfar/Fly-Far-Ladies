import { Box, Image } from "@chakra-ui/react";
import React from "react";
import avatar from "../../images/avatar.webp";
import wishlist from "../../images/wishlist.webp";
import wishlist2 from "../../images/wishlist2.webp";
import wishlist3 from "../../images/wishlist3.webp";

const StockImageMain = (props) => {
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
        borderRadius={"md"}
        w={"100%"}
        h={"250px"}
        cursor={"pointer"}
        src={props.img}
      ></Image>

      <Box position={"absolute"} _groupHover={{ top: "5px", right: "5px" }}>
        <Image cursor={"pointer"} width={"10"} src={wishlist} />
        <Image cursor={"pointer"} width={"10"} src={wishlist2} />
        <Image cursor={"pointer"} width={"10"} src={wishlist3} />
      </Box>

      <Box
        position={"absolute"}
        _groupHover={{ bottom: "6px", left: "6px", top: "5px" }}
      >
        <Box>
          <Image h={"10"} width={"10"} src={avatar} />
        </Box>
      </Box>
    </Box>
  );
};

export default StockImageMain;
