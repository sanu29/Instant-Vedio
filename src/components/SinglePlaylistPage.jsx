import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AllPlaylist, { deleteVideoFromPlaylist, getSinglePlaylist } from "../slice/AllPlaylist"
import ReactLoading from "react-loading";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Flex, Input, Radio, Text, useDisclosure } from '@chakra-ui/react'
export const SinglePlaylist = () =>{
    const dispatch = useDispatch()
    let params= useParams()

    const navigate = useNavigate()
    useState(()=>{

        (async()=>{

                dispatch(getSinglePlaylist(params.playlistId))
       })()
     
     },[])
     const playlistData = useSelector(state=>state.AllPlaylist)
  
     const single = (playlistData.playlists.filter((item)=>item._id===params.playlistId)[0])
     console.log(single)
     return(<>
        <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
          
       <Flex justifyContent={"start"} w={"100%"} flexWrap={"wrap"}>
        <Text width={"100%"} textAlign={"center"} fontSize={'1.2rem'} fontWeight={'Bolder'} color={'teal.900'}>{single.name}</Text>
            {single==="loading"?  
            <Flex justifyContent={"start"} w={"100%"} flexWrap={"wrap"}>
            <ReactLoading type={'spin'} color="#4FD1C5" /></Flex>:
            single.videos.length===0?(<Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}><Flex mt={'2rem'} flexDirection={"column"}><h2>No Videos Added Click here to add more</h2><Button onClick={()=>navigate('/explore')}>Browse More</Button></Flex></Flex>):
            single.videos.map((item)=>{
            return(
              
                <Box bgColor={'#ffffff'} display={"flex"} flexDirection={"column"} position={"relative"} height={"14rem"} width={"20rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"} pb={"2rem"}
                key={item._id} justifyContent={"start"}
                >
                  <Link to={"/vedio/"+item._id}>
                <img src={item.thumbnail} className="categoryImage"/>
                </Link>

               <Flex alignItems={"center"} justifyContent={"space-between"}>
               <Link to={"/vedio/"+item._id}>
               <Text p={'0.5rem'} fontWeight={"semibold"} pb={0}>{item.title}</Text>
               </Link>
               <Box marginRight={'5px'} cursor={"pointer"} display={"flex"} alignItems={"center"} justifyContent={"center"}  marginLeft={"1rem"}><span className="material-icons  " title={"Delete From Playlist"} onClick={()=>{dispatch(deleteVideoFromPlaylist({playlistId:params.playlistId,videoId:item._id}))}}>delete</span></Box>
               </Flex>
                </Box>
            )
            
            
            })}
        </Flex>
        </Flex>
        </>
    )   
}