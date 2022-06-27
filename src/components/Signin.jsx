import { Box, Button, Flex, Input, Stack, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { PasswordInput } from './PasswordInput'
import { LoginThunk } from '../slice/authSlice';
import { Toast } from "./Toast";

export default function Signin() {
  const [userDetails, setUserDetails] = useState({
    email:"none",
    password:"none"
  })
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const LoginHandler = () => {
    dispatch(LoginThunk(userDetails))
    .unwrap()
    .then((data)=>{
      //console.log(data)
        Toast(`Welcome ${data.foundUser.firstname}`)
        navigate("/")
      })
    .catch((error)=>Toast(error.errors[0]))
  }


  return (
   <>
   <Flex pt={"5rem"} bgColor={"teal.300"}  height={'100vh'} justifyContent={"center"} width={"calc(100%-64px)"}>
           <Flex bgColor={"gray.50"}  minWidth={"20rem"} padding={"1rem 3rem"} fontSize={"0.8rem"} height={"25rem"} maxWidth={"25rem"} mt={'1rem'} position={"relative"} rounded='md' boxShadow='2xl' >
          <Stack w={'100%'}>
        <Box w={"100%"} textAlign={"center"} color={"teal.900"} fontSize={"2rem"} fontWeight={"bold"} mb={'1rem'}>Login</Box>
          
        <Text>Username</Text>
                  <Input pr='4.5rem' placeholder='Enter username' h={'2.5rem'} m={"none"} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
                    value={userDetails.email==="none"?"":userDetails.email}
                  />
          <Text>Password</Text>
          <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'  m={"none"}
                onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
                value={userDetails.password==="none"?"":userDetails.password}
               />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
        <Text  textAlign={"right"} fontSize={'0.8rem'} cursor={"pointer"} pb={"4px"}  pt={"4px"}
        onClick={()=>{
          setUserDetails({...userDetails,email:"test@gmail.com", password:"Test12345"})
        
        }}>Login as guest</Text>

        <Button bgColor={"teal.300"} color={"teal.900"}  fontWeight={"bold"}
        onClick = {()=>{LoginHandler()}}
        >Submit</Button>
        <Link to={"/signup"}>
          <Text  textAlign={"center"} fontSize={'0.8rem'} cursor={"pointer"} pb={"1rem"}  pt={"1rem"}>Create a new account? </Text>
        </Link>
        
          </Stack>
       </Flex>
   </Flex>
   </>
  )
}
