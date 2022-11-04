import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({name, id, image, symbol, price, currencySymbol}) => {
  return (
    <Link to={`/coin/${id}`}>
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

            <Heading size={"md"} noOfLines={1}>{symbol}</Heading>

            <Text noOfLines={1}>{name}</Text>

            <Text noOfLines={1}>{price? `${currencySymbol} ${price}` : "N/A" }</Text>
        </VStack>
    </Link>
  )
}

export default CoinCard