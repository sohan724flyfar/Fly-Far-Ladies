import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import secnery from "../../images/photos5.webp";

const MiniPackage = () => {
  return (
    <Box border={"1px solid #FE94A2"} bg={"white"} mt={"20"}>
      <Flex alignItems={"center"} p={"4"}>
        <Image rounded={"sm"} src={secnery} w={"50%"} />
        <Box ms={"3"}>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Haritage Resort-Day Long Package
          </Text>
          <Text>Dhaka,Bangladesh</Text>
        </Box>
      </Flex>

      <Box mt={"2"} borderBottom={"1px solid #FE94A2"}>
        <Flex justifyContent={"space-between"} px={"5"}>
          <Text color={"gray.400"}>Adult (1025x2)</Text>
          <Text>BDT 25638</Text>
        </Flex>

        <Flex mt={"3"} justifyContent={"space-between"} px={"5"}>
          <Text color={"gray.400"}>Child (1025x2)</Text>
          <Text>BDT 25638</Text>
        </Flex>

        <Flex mt={"3"} justifyContent={"space-between"} px={"5"}>
          <Text color={"gray.400"}>Infant (1025x2)</Text>
          <Text>BDT 25638</Text>
        </Flex>

        <Flex mt={"3"} justifyContent={"space-between"}>
          <Text ms={"5"} fontSize={"12px"} color={"#FE94A2"}>
            Discount:0
          </Text>
        </Flex>
      </Box>

      <Flex mt={"4"} justifyContent={"space-between"} px={"5"}>
        <Text>Sub-Total</Text>
        <Flex alignItems={"center"}>
          <Text color={"#FE94A2"}>BDT</Text> <Text>25634</Text>
        </Flex>
      </Flex>

      <Flex
        mt={"3"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"5"}
      >
        <Text fontSize={"14px"}>Apply cupon</Text>
        <Flex alignItems={"center"} ms={"20"}>
          <Box border={"1px solid #FE94A2 "}>
            <Input w={"100%"} border={"none"} borderRadius={"none"} />
          </Box>
          <Button
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
            Apply
          </Button>
        </Flex>
      </Flex>

      <Flex mt={"3"} px={"5"} pb={"1"}>
        <Box>
          <Text fontSize={"12px"} color={"#FE94A2"}>
            Vat 10% (lean Detail)
          </Text>
          <Text mt={"1"} fontSize={"12px"} color={"#FE94A2"}>
            Tax 10% (lean Detail)
          </Text>
        </Box>
      </Flex>

      <Flex
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        bg={"#FE94A2"}
        px={"4"}
        py={"1"}
      >
        <Flex>
          <Text color={"white"}>You pay</Text>
          <Box ms={"2"}>
            <Text fontSize={"14px"}>(For 7 travelers)</Text>
            <Text textAlign={"center"} color={"white"} fontSize={"10px"}>
              Including Vat & Tax
            </Text>
          </Box>
        </Flex>
        <Box>
          <Box>BDT 30,000</Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MiniPackage;
