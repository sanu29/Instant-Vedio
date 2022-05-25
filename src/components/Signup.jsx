import React, { useState } from 'react'
import { Box, Button, Flex, Input, Stack, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom'
import { PasswordInput } from './PasswordInput'
import { useDispatch, useSelector } from "react-redux";
import { SignupThunk } from '../slice/authSlice';
import { Toast } from "./Toast";
import { SignUpValidation } from './SignUpValidation';
export  const Signup =() =>{
  const dispatch = useDispatch()
  const [userDetails, setUserDetails] = useState({
    firstname:"none",
    lastname:"none",
    email:"none",
    password:"none"

  }) 
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const [error, setError] = useState("none")
  console.log(error)
  const signupHandler = () => {

    dispatch(SignupThunk(userDetails))
    .unwrap()
    .then((data)=>{
        Toast(`Welcome ${data.createdUser.firstname}`)
        navigate("/")
      })
    .catch((error)=>Toast(error.errors[0]))
  }



      return (
        <>
        <Flex pt={"3rem"} bgColor={"teal.300"}  minHeight={'100vh'}fontSize={'0.8rem'} justifyContent={"center"} width={"calc(100%-64px)"}>
               
               
                <Flex bgColor={"gray.50"}  minWidth={"24rem"} height={'33rem'} maxWidth={"30rem"} mt={'1rem'} position={"relative"} rounded='md'padding={"1rem 3rem"} boxShadow='2xl' >
               <Stack w={'100%'}>
             <Box w={"100%"} textAlign={"center"} color={"teal.900"} fontSize={"1.5rem"} fontWeight={"bold"} mb={'1rem'}>Signup</Box>
             <Text>First Name</Text>
              <Input pr='4.5rem' placeholder='Enter First Name' h={'2.5rem'} m={"none"} 
              onChange={(e)=>setUserDetails({...userDetails,firstname:e.target.value})}
              
              />
       
              <Text>Last Name</Text>
              <Input pr='4.5rem' placeholder='Enter Last Name' h={'2.5rem'} m={"none"} 
              onChange={(e)=>setUserDetails({...userDetails,lastname:e.target.value})}
              />
         
             <Text>Email</Text>
            <Input pr='4.5rem' placeholder='Enter email id' h={'2.5rem'} m={"none"} 
            onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
            />
            <Text>Password</Text>
            <InputGroup size='md'>
            <Input pr='4.5rem'  placeholder='Enter password'  m={"none"}  type={show ? 'text' : 'password'}
            onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm'
                 onClick={handleClick}
                 >
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
            <Text pt={'1rem'}></Text>
             <Button bgColor={"teal.300"} color={"teal.900"}  fontWeight={"bold"} onClick={()=>{
               const validation = SignUpValidation(userDetails)
               console.log(validation)
               if(validation.status === true)
               {
                signupHandler()
               }
               else{
                 setError(error=>validation.error)
               }
              
               }}>Submit</Button>
             <Link to={"/login"}>
               <Text  textAlign={"center"} fontSize={'0.8rem'} cursor={"pointer"} pb={"1rem"}  pt={"1rem"}>Already Have Account?</Text>
             </Link>
             
               </Stack>
            </Flex>
        </Flex>
        </>
       )
     }

