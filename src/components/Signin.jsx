import { Box, Flex, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PasswordInput } from './PasswordInput'

export default function Signin() {
  return (
   <>
   <Flex height={"100%"} bgColor={"teal.300"}   justifyContent={"center"} width={"calc(100%-64px)"}>
           <Flex bgColor={"gray.50"}  minWidth={"10rem"} height={"30rem"} width={"25rem"} mt={'1rem'} position={"relative"} left={'-5rem'} rounded='md'padding={"1rem"} boxShadow='2xl' >
          <Stack w={'100%'}>
        <Box w={"100%"} textAlign={"center"} color={"teal.900"} fontSize={"2rem"} fontWeight={"bold"} mb={'1rem'}>Login</Box>
          
        <Text>Username</Text>
          <Input placeholder='medium size' size='md' m={"none"} />
          <Text>Password</Text>
        <PasswordInput />
        <Text mt={"1rem"}>Login as guest</Text>


          </Stack>
       </Flex>
   </Flex>
   </>
  )
}
