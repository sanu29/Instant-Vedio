import { Box, Button, Flex, Input, Stack, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { PasswordInput } from './PasswordInput'

export default function Signin() {



  return (
   <>
   <Flex pt={"5rem"} bgColor={"teal.300"}  height={'100vh'} justifyContent={"center"} width={"calc(100%-64px)"}>
           <Flex bgColor={"gray.50"}  minWidth={"20rem"} padding={"1rem 3rem"} fontSize={"0.8rem"} height={"25rem"} maxWidth={"25rem"} mt={'1rem'} position={"relative"} rounded='md' boxShadow='2xl' >
          <Stack w={'100%'}>
        <Box w={"100%"} textAlign={"center"} color={"teal.900"} fontSize={"2rem"} fontWeight={"bold"} mb={'1rem'}>Login</Box>
          
        <Text>Username</Text>
                  <Input pr='4.5rem' placeholder='Enter username' h={'2.5rem'} m={"none"}/>
          <Text>Password</Text>
        <PasswordInput />
        <Text  textAlign={"right"} fontSize={'0.8rem'} cursor={"pointer"} pb={"4px"}  pt={"4px"}>Login as guest</Text>

        <Button bgColor={"teal.300"} color={"teal.900"}  fontWeight={"bold"}>Submit</Button>
        <Link to={"/signup"}>
          <Text  textAlign={"center"} fontSize={'0.8rem'} cursor={"pointer"} pb={"1rem"}  pt={"1rem"}>Create a new account? </Text>
        </Link>
        
          </Stack>
       </Flex>
   </Flex>
   </>
  )
}
