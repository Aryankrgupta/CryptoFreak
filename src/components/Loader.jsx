// import { Box, Spinner, VStack } from '@chakra-ui/react'
// import React from 'react'

// const Loader = () => {
//   return (
//     <VStack h={"90vh"} justifyContent={"center"}>
//       <Box transform={"scale=(3)"}>
//         <Spinner 
//         thickness='4px'
//         speed='0.65s'
//         emptyColor='gray.200'
//         color='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,11,175,1) 0%, rgba(1,176,234,1) 78%, rgba(0,212,255,1) 96%)'
//         size='xl' />
//       </Box>

//     </VStack>
//   )
// }



import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Loader() {
  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          // rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        Loading...
      </ChakraBox>
    </Container>
  )
}

// export default Loader