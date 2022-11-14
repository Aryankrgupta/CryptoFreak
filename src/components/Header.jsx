import { Avatar, HStack } from '@chakra-ui/react'
import React from 'react'
import {  useColorMode, Button } from '@chakra-ui/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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

      <div>
      {isAuthenticated ? (
      <Button className='btn' onClick={() => logout({ returnTo: window.location.origin })} mr={2} ><span>{user.name}</span></Button>) : (<Button onClick={() => loginWithRedirect()} mr={2}>login</Button>)}
      
      <Button onClick={toggleColorMode} p={0}>
        {colorMode === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </Button>
      </div>
      
      </HStack>
  )
}

export default Header