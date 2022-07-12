import { Box, Button, Flex ,Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';



export const  Profile = ()  =>{
  
  const authState = useSelector(state=>state.authReducer)

  return (
    <Flex pt={"4rem"} pl={'5rem'} w={"100%"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" flexDirection={'column'}>
     
        <Box height={'5rem'} mt={'3rem'} width={'5rem'} backgroundColor={'teal.900'} borderRadius={"100%"} display={"flex"} justifyContent={"center"} alignItems={'center'}
        color={"teal.300"} fontSize={'2rem'} fontWeight={'bold'} fontStyle={"italic"}>
            {authState.user.firstname[0]}{authState.user.lastName[0]}
        </Box>
       <Text mt={'1rem'} fontSize={'1.2rem'} fontWeight={"semibold"}>{authState.user.firstname}  {authState.user.lastName}</Text> 
       <Text  fontSize={'1rem'} fontWeight={"semibold"}>{authState.user.email}</Text> 

        <Flex justifyContent={'space-evenly'} w={"100%"} mt={'1rem'}>
            <Box display={'flex'} flexDirection={"column"} justifyContent={"center"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"}  justifyContent={"center"}>  Likes </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"}  textAlign={"center"}>   {authState.user.likes.length}</Text> 
            </Box>
            <Box display={'flex'} flexDirection={"column"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"}>  Watch Later  </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"} textAlign={"center"}>   {authState.user.watchlater.length}</Text> 
            </Box>
            <Box display={'flex'} flexDirection={"column"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"}>  Playlist </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"} textAlign={"center"}>   {authState.user.playlists.length}</Text> 
            </Box>
        </Flex>
    </Flex>

  )
}
