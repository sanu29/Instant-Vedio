import { Box, Button, Flex ,Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteLikes, getLikes } from '../slice/AllLike';
import { getWatchlater } from '../slice/AllWatchlater';
import { addToPlaylist, deletePlaylist, getPlaylist } from '../slice/AllPlaylist';
import { useNavigate } from 'react-router-dom';

export const  Profile = ()  =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getLikes())
        dispatch(getWatchlater())
        dispatch(getPlaylist())
    },[])
const navigate = useNavigate()
  const LikesData = useSelector(state=>state.AllLike)
  const authState = useSelector(state=>state.authReducer)
  const watchLaterData = useSelector(state=>state.AllWatchLater);
  const Playlist = useSelector(state=>state.AllPlaylist).playlists;
    console.log(Playlist)
  return (
    <Flex    className={"mainPage"} w={"100%"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" flexDirection={'column'}>
     
        <Box height={'5rem'} mt={'4rem'} width={'5rem'} backgroundColor={'teal.900'} borderRadius={"100%"} display={"flex"} justifyContent={"center"} alignItems={'center'}
        color={"teal.300"} fontSize={'2rem'} fontWeight={'bold'} fontStyle={"italic"}>
            {authState.user.firstname[0]}{authState.user.lastName[0]}
        </Box>
       <Text mt={'2rem'} fontSize={'1.2rem'} fontWeight={"semibold"}>{authState.user.firstname}  {authState.user.lastName}</Text> 
       <Text  fontSize={'0.8rem'} fontWeight={"semibold"}>{authState.user.email}</Text> 

        <Flex justifyContent={'space-evenly'} w={"100%"} mt={'3rem'}>
            <Box display={'flex'} flexDirection={"column"} justifyContent={"center"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"}  justifyContent={"center"} backgroundColor={"teal.300"} padding={"0.5rem"} borderRadius={'5px'} width={"7rem"} textAlign={"center"} mb={"10px"}>  Likes </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"}  textAlign={"center"}>   {LikesData.likes==='loading'?"loading":LikesData.likes.length}</Text> 
            </Box>
            <Box display={'flex'} flexDirection={"column"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"} backgroundColor={"teal.300"} padding={"0.5rem"} borderRadius={'5px'}  width={"7rem"} textAlign={"center"} mb={"10px"}>  Watch Later  </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"} textAlign={"center"}>  {watchLaterData.watchlater==='loading'?"loading":watchLaterData.watchlater.length}</Text> 
            </Box>
            <Box display={'flex'} flexDirection={"column"}>
            <Text  fontSize={'1rem'} fontWeight={"semibold"} backgroundColor={"teal.300"} padding={"0.5rem"} borderRadius={'5px'}  width={"7rem"} textAlign={"center"} mb={"10px"}>  Playlist </Text> 
            <Text  fontSize={'1rem'} fontWeight={"semibold"} textAlign={"center"}>   {Playlist==='loading'?"loading":Playlist.length}</Text> 
            </Box>
        </Flex>

        <Button mt={"4rem"} onClick={()=>navigate('/explore')} variant={"outline"} borderColor={"teal.300"} _hover={{backgroundColor:"teal.300",color:"teal.900"}}>Browse More Videos</Button>
    
    </Flex>

  )
}
