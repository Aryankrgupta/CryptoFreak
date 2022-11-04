import { HStack } from '@chakra-ui/react'
import React from 'react'
import {  useColorMode, Button } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} wrap={"wrap"} justifyContent={"space-between"}>
      <div>
        <Button variant={'unstyle'} color={'white'}>
          <Link to={"/"}>Home</Link>  
        </Button>
        <Button variant={'unstyle'} color={'white'}>
          <Link to={"/exchanges"}>Exchange</Link>  
        </Button>
        <Button variant={'unstyle'} color={'white'}>
          <Link to={"/coins"}>Coin</Link>  
        </Button>
      </div>
      <Button onClick={toggleColorMode} p={0}>
        {colorMode === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>
      </HStack>
  )
}

export default Header