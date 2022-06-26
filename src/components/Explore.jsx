import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVedios } from '../slice/AllVedioSlice'
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';
import { getAllCategories } from '../slice/AllCategoriesSlice';
import {All,Sports,Kids,WebSeries,Knowledge,Movies} from '../slice/filteredSlice';
import filteredSlice from '../slice/filteredSlice';
export const Explore = () => {
const allData =useSelector(state=>state.AllVedioSlice)
const dispatch  = useDispatch();
useEffect (()=>{
    dispatch(getAllVedios())
},[])

const allCategories =useSelector(state=>state.AllCategoriesSlice)
  useEffect (()=>{
    dispatch(getAllCategories())
  },[])

  const filteredSlice = useSelector(state=>state.filteredSlice).filteredBy;




    return(<>
     <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
        
      <Box margin={'1rem'} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(All())} backgroundColor={filteredSlice==='All'?'teal.900':""} color={filteredSlice==='All'?'#ffff':"teal.900"}>All
             </Box>
             <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(Sports())} backgroundColor={filteredSlice==='Sports'?'teal.900':""} color={filteredSlice==='Sports'?'#ffff':"teal.900"}>Sports
             </Box>
             <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(Movies())} backgroundColor={filteredSlice==='Movies'?'teal.900':""} color={filteredSlice==='Movies'?'#ffff':"teal.900"}>Movies
             </Box>
             <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(WebSeries())} backgroundColor={filteredSlice==='WebSeries'?'teal.900':""} color={filteredSlice==='WebSeries'?'#ffff':"teal.900"}>WebSeries
             </Box>
             <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(Knowledge())} backgroundColor={filteredSlice==='Knowledge'?'teal.900':""} color={filteredSlice==='Knowledge'?'#ffff':"teal.900"}>Knowledge
             </Box>
             <Box margin={'1rem'} border={'1px'}  fontWeight={"bolder"} padding={'0.3rem'} borderRadius={'15px'} minWidth={'5rem'} textAlign="center" cursor={'pointer'} onClick={()=>dispatch(Kids())} backgroundColor={filteredSlice==='Kids'?'teal.900':""} color={filteredSlice==='Kids'?'#ffff':"teal.900"}>Kids
             </Box>
          </Box>
        
     <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>

          {(allData.vedioList)==="loading"?  <ReactLoading type={'spin'} color="#4FD1C5" />:(allData.vedioList).filter(item=>filteredSlice==="All"?item:item.categoryName===filteredSlice?item:"").map((item)=>{
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
 