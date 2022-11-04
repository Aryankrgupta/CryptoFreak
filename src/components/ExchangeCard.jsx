import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({ name, url, image, rank }) => {
  return (
    <a href={url} target={'blank'}>
        <VStack 
        w={52}
        shadow={"lg"}
        p={8}
        borderRadius={"lg"}
        transition={"all 0.5s"}
        m={4}
        css={{
            "&:hover":{
                transform: 'scale(1.1)'
            }
        }}
        >
            <Image src={image} alt={"Exchange"} width={'50'} height={"50"} objectFit={"contain"} />
            <Text fontWeight={"bold"}>RANK</Text>
            <Heading size={"md"} noOfLines={1}>{rank}</Heading>
            <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a>
  )
}

export default ExchangeCard