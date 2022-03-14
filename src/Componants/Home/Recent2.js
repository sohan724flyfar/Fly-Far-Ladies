import { Box, Flex, Image, Text } from "@chakra-ui/react";
import thumbsup from '../../images/thumbsup.png'
import massage from '../../images/massage.png'
import share from '../../images/share.png'

const Recent2 = (props) => {
    return (

        <Flex
            shadow="0px 0px 11px rgba(245, 153, 166, 0.85);"
            rounded="lg"
            p={2}
            w="full"
            alignItems="center"
            justifyContent="center"
            mt={'5'}
        >
            <Box
                mx="auto"
                rounded="lg"
                maxW="xl"
            >
                <Image
                    rounded="xl"
                    w="full"
                    h={'full'}
                    fit="cover"
                    src={props.img}
                // border={'1px solid #FE94A2'}


                />

                <Box p={3}>
                    <Text fontWeight={'bold'}>Dark mode in ui design for mobile
                        Apps: beauty born in  the darkness</Text>
                    <Text mt={'2'} fontSize={'10px'}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly  In publishing and graphic design, Lorem ipsum is a placeholder text....</Text>
                    <Flex mt={'2'} fontSize={'12px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Flex><Text me={'2'} pe={'2'} borderRight={'1px'}>Date 1 Apr,2022</Text> <span >7 Min</span> </Flex>
                        <Flex alignItems={'center'}>
                            <Image src={thumbsup}></Image>
                            <Image ms={'2'} src={massage}></Image>
                            <Image ms={'2'} src={share}></Image>
                        </Flex>
                    </Flex>



                </Box>
            </Box>
        </Flex>

    );
};
export default Recent2;