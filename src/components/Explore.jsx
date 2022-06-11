import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVedios } from '../slice/AllVedioSlice'
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
export const Explore = () => {
    const allData =useSelector(state=>state.AllVedioSlice)

    const dispatch  = useDispatch();
useEffect (()=>{
    dispatch(getAllVedios())
},[])
    return(<>
     <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
    



     <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>

          {(allData.vedioList)==="loading"?  <ReactLoading type={'spin'} color="#4FD1C5" />:(allData.vedioList).map((item)=>{
                        return(
            
                          <Box bgColor={'#ffffff'} display={"flex"} flexDirection={"column"} position={"relative"} height={"18rem"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"}>
                          <img src={item.thumbnail} className="categoryImage"/>
                          <Text p={'0.5rem'} fontWeight={"semibold"} pb={0}>{item.title}</Text>
                         <Flex alignItems={"center"} justifyContent={"flex-end"}>
                       
                          <span class="material-icons  sm-48"  >visibility</span>
                          <Text p={'0.5rem'} color={"gray.500"} fontSize={"0.8rem"} pb={'0.5rem'} pl={"0"}>{item.views}</Text>
                         </Flex>

                          <Link to={"/vedio/"+item._id}>
                          <Button colorScheme='teal' bgcolor={"teal.900"} w="100%" borderRadius={"none"} position={"absolute"} bottom={"0px"} variant='solid' alignSelf={"flex-end"} justifySelf={"end"} >Watch Now</Button>
                          </Link>
                          
                          </Box>
          )})}
        </Flex>
     </Flex>
    </>)
}
 