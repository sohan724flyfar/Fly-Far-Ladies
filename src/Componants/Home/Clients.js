import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import clients from "../../images/client.webp";
import star from "../../images/star.webp";
import qutation from "../../images/qutation.webp";
import qutation2 from "../../images/qutation2.webp";
import "./home.css";

const Clients = (props) => {
  return (
    <Box
      shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
      p={"4"}
      bg={"white"}
      textAlign={"center"}
    >
      <Image mx={"auto"} src={clients} />
      <Text mt={"2"}>Samiha Islam</Text>
      <Text mt={"2"} fontSize={"11px"}>
        Dhaka,Bnagladesh
      </Text>
      <Flex mt={"2"} justifyContent={"center"}>
        <Image src={star} />
        <Image ms={"2"} src={star} />
        <Image ms={"2"} src={star} />
        <Image ms={"2"} src={star} />
        <Image ms={"2"} src={star} />
      </Flex>

      <Box mt={"2"} fontSize={"14px"}>
        <img src={qutation} alt="" style={{ display: "inline" }} />
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
        <img src={qutation2} alt="" style={{ display: "inline" }} />
      </Box>
    </Box>
  );
};

export default Clients;
