import React from 'react'
import { Box, Button, Flex, Input, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PasswordInput } from './PasswordInput'

export default function Signup() {
    return (
        <>
        <Flex pt={"3rem"} bgColor={"teal.300"}  minHeight={'100vh'}fontSize={'0.8rem'} justifyContent={"center"} width={"calc(100%-64px)"}>
                <Flex bgColor={"gray.50"}  minWidth={"24rem"} height={'33rem'} maxWidth={"30rem"} mt={'1rem'} position={"relative"} rounded='md'padding={"1rem 3rem"} boxShadow='2xl' >
               <Stack w={'100%'}>
             <Box w={"100%"} textAlign={"center"} color={"teal.900"} fontSize={"1.5rem"} fontWeight={"bold"} mb={'1rem'}>Signup</Box>
             <Text>First Name</Text>
                       <Input pr='4.5rem' placeholder='Enter First Name' h={'2.5rem'} m={"none"}/>
       
               <Text>Last Name</Text>
                       <Input pr='4.5rem' placeholder='Enter Last Name' h={'2.5rem'} m={"none"}/>
         
             <Text>Email</Text>
                       <Input pr='4.5rem' placeholder='Enter email id' h={'2.5rem'} m={"none"} />
               <Text>Password</Text>
             <PasswordInput />
                <Text pt={'1rem'}></Text>
             <Button bgColor={"teal.300"} color={"teal.900"}  fontWeight={"bold"}>Submit</Button>
             <Link to={"/login"}>
               <Text  textAlign={"center"} fontSize={'0.8rem'} cursor={"pointer"} pb={"1rem"}  pt={"1rem"}>Already Have Account?</Text>
             </Link>
             
               </Stack>
            </Flex>
        </Flex>
        </>
       )
     }

