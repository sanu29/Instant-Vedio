import { Box, Button, Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory, historySlice } from '../slice/AllHistory'
import { addToWatchlater, deleteWatchlater, getWatchlater } from '../slice/AllWatchlater'
import { addToLikes, deleteLikes, getLikes } from '../slice/AllLike'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'
import { useRef } from 'react'
import { addToPlaylist } from '../slice/AllPlaylist'

export  const  SingleVedio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let params= useParams()
  const dispatch  = useDispatch();
  const [singeVedioData, setSingleVedioData] = useState("loading")
  useEffect(()=>{
    (async()=>{
         const vedioData = await axios.get(`/api/video/${params.vedioId}`)
        setSingleVedioData(vedioData.data.video);
        dispatch(getWatchlater())
        dispatch(getLikes())
        
    })()
  
  },[])
  const playlistData = useSelector(state=>state.AllPlaylist)
  console.log(playlistData.playlists)
  const [showNewPlaylist , setShowNewPlaylist] = useState('none') 
  const [newPlaylistName, setNewPlaylistName] = useState("New Playlist")
  const PlaylistModal = () =>{
    return (
      <>
              <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add to Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              {(playlistData.playlists).length>0?playlistData.playlists.map((item)=><h2 cursor={'pointer'}>{item.name}</h2>):<h2>No Playlist Created yet!</h2>}
           
              <h1 onClick={()=>setShowNewPlaylist('block')}> Create new playlist</h1>
              <Input variant='outline' placeholder='Name' value={newPlaylistName} display={showNewPlaylist} onChange={(e)=>setNewPlaylistName(e.target.value)}/>
            </ModalBody>
  
            <ModalFooter>
              <Button  mr={3} variant='ghost' onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' onClick={()=>{
                
                dispatch(addToPlaylist({name:newPlaylistName,videos:[singeVedioData]}))
                onClose()
              }}>Add </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  const watchLaterData = useSelector(state=>state.AllWatchLater)
  const likesData = useSelector(state=>state.AllLike)
  console.log(likesData.likes)
  const fillIcon = () =>{
    if((watchLaterData.watchlater).length>0)
    {
    const status = (watchLaterData.watchlater).find((item)=>item._id == singeVedioData._id)
    return (status==undefined?false:true)
    }
    else{
      return false
    }
  }
  const fillLikes = () =>{
    if((likesData.likes).length>0 && likesData.likes!=='loading')
    {
    console.log(likesData.likes)
    const status = (likesData.likes).find((item)=>item._id == singeVedioData._id)
    return (status==undefined?false:true)
    }
    else{
      return false
    }
  }
  if(singeVedioData === "loading" || watchLaterData.watchlater === "loading")
  {
    return  <Flex pt={"5rem"} pl={'6rem'} direction={"column"} w={"100%"} justifyContent={""} alignItems={""} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
      saniya
    </Flex>
  }
  else{
    return(
    <Flex className='main'>
    <Flex justifyContent={""} w={"100%"} flexWrap={"wrap"}></Flex>
        <iframe className='singleVedio' 
        src={`https://www.youtube.com/embed/`+singeVedioData.src+`?showinfo=0&autoplay=1&rel=0`} title="YouTube video player" 
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        <Flex  w={'50rem'} justifyContent={"space-between"}>
          <Flex flexDirection={"column"}>
                <Text padding={'1rem'} pl={"0rem"} fontSize={"1.5rem"} pb={0} fontWeight={"semibold"}> {singeVedioData.title}</Text>
              <Text  pt={"5px"}  color={"gray.600"} fontWeight={"semibold"}>{singeVedioData.views} Views | {singeVedioData.date}</Text>
          </Flex>
         
              <Flex alignItems={"center"} >
              <Box margin={'1rem'} cursor={"pointer"}
              onClick = {onOpen}
              
              ><span className="material-icons md-48  " title={"Add to Playlist"}>playlist_add</span>
              {PlaylistModal()}
              
              </Box>
              <Box margin={'1rem'} cursor={"pointer"} onClick={()=>{
                    const getElement = (watchLaterData.watchlater).find((item)=>item._id==singeVedioData._id)
                    if(getElement===undefined)
                    {
                      dispatch( addToWatchlater(singeVedioData))
                    }
                    else{
                    {
                      dispatch( deleteWatchlater(singeVedioData._id))
                    }
                    }}}> <span className={fillIcon()?'material-icons  md-48':"material-symbols-outlined  md-48"} title={"Add to Watchlater"}>watch_later</span></Box>
              <Box margin={'1rem'} cursor={"pointer"}
              onClick={()=>{
                if((likesData.likes).length>0)
                {
                  const getElement = (likesData.likes).find((item)=>item._id==singeVedioData._id)
                  if(getElement===undefined)
                  {
                    dispatch( addToLikes(singeVedioData))
                  }
                  else{
                  {
                    dispatch( deleteLikes(singeVedioData._id))
                  }
                }

                }
                else{
                  dispatch( addToLikes(singeVedioData))
                }
              }}
              > 
         <span className={fillLikes()?'material-icons  md-48':"material-symbols-outlined  md-48"} title={"Like"}>thumb_up</span></Box>
              </Flex>

      </Flex>
               
        
      
    </Flex>
    )
  }
  
      
      


}

