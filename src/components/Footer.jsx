import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <Box 
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={10}
    px={16}
    // py={[16, 8]}
    >
        <Stack flexWrap={"wrap"} justifyContent={"center"} textAlign={"center"}>
            <VStack>
                <Text >All rights reserved 2022 AR Enterprises</Text>
                <HStack fontSize={"3xl"} p={4}>
                    <AiOutlineInstagram />
                    <AiFillYoutube />
                    <BsTwitter />
                </HStack>
            </VStack>
        </Stack>   
    </Box>
  )
}

export default Footer