import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVedios } from '../slice/AllVedioSlice'

export const Explore = () => {
    const allData =useSelector(state=>state.AllVedioSlice)

    const dispatch  = useDispatch();
useEffect (()=>{
    dispatch(getAllVedios())
},[])
console.log(allData.vedioList)

    return(<>
     <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
    



     <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
          {(allData.vedioList).map((item)=>{
            return(
            
              <Box bgColor={'#ffffff'}  height={"fit-content"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.200"}>
              <img src={item.thumbnail} className="categoryImage"/>
              <Text pl={'1rem'} fontWeight={"semibold"}>{item.title}</Text>
              <Text p="1rem" fontSize={"12px"}>This vedio belongs to youtube and the lin is added in backend</Text>
              <Button colorScheme='teal' w="100%" borderRadius={"none"} variant='solid'>Watch Now</Button>
              </Box>
            
            )
          })}
        </Flex>
     </Flex>
    </>)
}
