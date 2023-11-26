import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import btc from '../assets/btc.png'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"full"} flexWrap={"wrap"} justifyContent={"center"}>
      <motion.div 
        style={{
          height: "80vh"
        }}
        animate={{
          translateY: "20px"
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image src={btc} w={"full"} h={"full"} objectFit={"contain"} cursor={"none"} />
      </motion.div>
    </Box>
  )
}

export default Home