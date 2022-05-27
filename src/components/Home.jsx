import { Box, Button, Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { slider1,slider2,slider3,category1,category2,category3,category4,category5,category6 } from '../images/images'
import Footer from './Footer';
import { useInterval } from './useInterval';
export default function Home() {
  
  const authState = useSelector(state=>state.authReducer)
  const sliderImageArray = [slider2,slider1,slider3]
  const [indexOfSlider, setIndexSlider] = useState(0) 
  const goToNext = ()=>indexOfSlider<2?setIndexSlider(indexOfSlider=>indexOfSlider+1):setIndexSlider(0)
  const goToPrevious = ()=>indexOfSlider>0?setIndexSlider(indexOfSlider=>indexOfSlider-1):setIndexSlider(2)
  const categories = [{category:category1,title:"Sports"},{category:category4,title:"Kids"},{category:category3,title:"Web Series"},
                      {category:category2,title:"Knowledge"}, {category:category5,title:"Movies"}]
  useInterval(()=>{
      goToNext()
  },5000)
  let i =0;
  
  return (
    <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
      
      <Box display={"flex"} margin={"0rem 2rem"} justifyContent={"center"} position={"relative"} minWidth={"100%"} maxWidth={"70%"} height={"25rem"} bgColor={"black"}>
      <Box className="material-icons" position={"absolute"} top={"7rem"} left={"0"} color={"white"} cursor={"pointer"}
            onClick={()=>goToPrevious()}
      >chevron_left</Box>
        <img src={sliderImageArray[indexOfSlider]} width={'100%'}/>
        <Box className="material-icons" position={"absolute"} top={"7rem"} right={"0"} color={"white"} cursor={"pointer"}
      onClick={()=>goToNext()}
        >navigate_next</Box>

      </Box>
      <Box w={"100%"}>
      <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"semibold"} bgColor={"teal.900"} color={"white"} p={"0.9rem"} pb={"0.5rem"}> Categories </Text>
        <Flex flexWrap={"wrap"} w={"100%"} padding={"1rem"} pt={'1rem'} height={"fit-content"} alignItems={"center"} pb={"2rem"} bgColor={"teal.900"} mb={"2rem"} justifyContent={"space-between"}>
      
          {categories.map((item)=>{
            return(
              <>
              <Link to={"/explore"} key={i++} >
              <Box bgColor={'#ffffff'} height={"100%"} width={"12rem"}  boxShadow={"lg"} border={"1px"} borderColor={"gray.200"} position={"relative"}>
              <img src={item.category} className="categoryImage" bgColor={"black"} margin={"none"}/>
              <Button colorScheme='teal' borderRadius={"none"} variant='solid' position={"absolute"} bottom={"0px"}>{item.title}</Button>
              
              {/* <Text textAlign={"center"} fontSize={"1.2rem"} fontWeight={"bold"} >{item.title}</Text> */}
              </Box>
              </Link>
              </>
            )
          })}
          </Flex>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={"1.5rem"} fontWeight={"bold"} color={"teal.900"}> Must Watch </Text>
        <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
          {categories.map((item)=>{
            return(
              <Link to={"/explore"} key={i++}>
              <Box bgColor={'#ffffff'}  height={"fit-content"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.200"}>
              <img src={item.category} className="categoryImage"/>
              <Text pl={'1rem'} fontWeight={"semibold"}>{item.title}</Text>
              <Text p="1rem" fontSize={"12px"}>This vedio belongs to youtube and the lin is added in backend</Text>
              <Button colorScheme='teal' w="100%" borderRadius={"none"} variant='solid'>Watch Now</Button>
              </Box>
              </Link>
            )
          })}
        </Flex>
      </Box>
    </Flex>

  )
}
