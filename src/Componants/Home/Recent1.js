import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Recent1 = (props) => {
    return (

        <Flex
            py={4}
        >
            <Box
                shadow="0px 0px 9px #EFCACA;"

                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                rounded={{ lg: "lg" }}

                bg={'white'}
            >
                <Box p={'2'} >
                    <Box width={'32'} h={'full'} >
                        <Image src={props.img}></Image>
                    </Box>
                </Box>

                <Box mt={'2'} maxW={{ base: "xl", lg: "5xl" }} ms={3} >
                    <Text fontWeight={'bold'}>Dark mode in ui design for mobileApps: beauty born in  the darkness</Text>
                    <Text fontSize={'10px'}>In publishing and graphic design, Lorem ipsum is a placeholder text...</Text>
                    <Flex cursor={'pointer'} alignItems={'center'} fontWeight={'bold'} > Learn more <Box ms={'2'} mt='0.5'><HiOutlineArrowNarrowRight /></Box></Flex>
                </Box>
            </Box>
        </Flex>

    );
};
export default Recent1;