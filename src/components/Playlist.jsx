import { Box, Button, Flex, Input, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from "react-loading";
import { Link, useNavigate } from 'react-router-dom';
import { addToPlaylist, deletePlaylist, getPlaylist } from '../slice/AllPlaylist';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'
export const Playlist = () =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPlaylist())
    },[])
    const [newPlaylistName, setNewPlaylistName] = useState("")
    const navigate = useNavigate()
    const Playlist = useSelector(state=>state.AllPlaylist).playlists;
    const { isOpen, onOpen, onClose } = useDisclosure()

const PlaylistModal = () =>{

    
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new Playlist</ModalHeader>
            <ModalCloseButton  onClick={()=>{
                onClose()
              }}/>
            <ModalBody >
            <Input variant='outline' placeholder='Playlist Name' value={newPlaylistName}  onChange={(e)=>setNewPlaylistName(e.target.value)}/>
            </ModalBody>
            <ModalFooter>
            
              <Button  mr={3} variant='ghost' onClick={()=>{
                onClose()
              }}>
                Close
              </Button>
            <Button colorScheme='teal' onClick={()=>{
                
                dispatch(addToPlaylist({name:newPlaylistName}))
                onClose()
              }}>Add New Playlist</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }



    
    console.log(Playlist)
    return(<>
        <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
        <Button onClick={onOpen} borderRadius={"none"}>Create new Playlist</Button>
            {PlaylistModal()}
           <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>

            {Playlist==="loading"?  
            <ReactLoading type={'spin'} color="#4FD1C5" />:
            Playlist.length===0?(<Flex flexDirection={"column"} mt={'2rem'}><h2>No Playlist Click here to browse more</h2><Button onClick={()=>navigate('/explore')}>Browse More</Button></Flex>):
            Playlist.map((item)=>{
            return(
              
                <Box bgColor={'#ffffff'} display={"flex"} flexDirection={"column"} position={"relative"} height={"4rem"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"}
                key={item._id}
                >
                
                        <Flex alignItems={"center"} margin={"1rem"} justifyContent={"space-between"} >
                                <Text  fontWeight={"semibold"} pb={0}>{item.name}</Text>
                                <Box marginLeft={'5px'} cursor={"pointer"} display={'flex'} justifyContent={"center"} alignItems={'center'}><span className="material-icons  " onClick={()=>dispatch(deletePlaylist(item._id))} title={"Delete Playlist"}>delete</span></Box>
                        </Flex>
              
             
                </Box>
            )
            
            
            })}
        </Flex>
        </Flex>
        </>
    )   
}