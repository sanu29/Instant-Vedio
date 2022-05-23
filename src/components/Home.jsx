import { Box, Flex ,Text} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { slider1,slider2,slider3,category1,category2,category3,category4,category5,category6 } from '../images/images'
import Footer from './Footer';
import { useInterval } from './useInterval';
export default function Home() {
  

  const sliderImageArray = [slider2,slider1,slider3]
  const [indexOfSlider, setIndexSlider] = useState(0) 
  const goToNext = ()=>indexOfSlider<2?setIndexSlider(indexOfSlider=>indexOfSlider+1):setIndexSlider(0)
  const goToPrevious = ()=>indexOfSlider>0?setIndexSlider(indexOfSlider=>indexOfSlider-1):setIndexSlider(2)
  const categories = [{category:category1,title:"Sports"},{category:category4,title:"Kids"},{category:category3,title:"Web Series"},
                      {category:category2,title:"Knowledge"}, {category:category6,title:"Comedy"},{category:category5,title:"Movies"}]
  useInterval(()=>{
      goToNext()
  },5000)
  
  
  return (
    <Flex pt={"5rem"} pl={'5rem'} direction={"column"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content">
      
      <Box display={"flex"} margin={"1rem 2rem"} justifyContent={"center"} position={"relative"} minWidth={"90%"} maxWidth={"100%"} height={"18rem"}>
      <Box className="material-icons" position={"absolute"} top={"7rem"} left={"0"} color={"white"} cursor={"pointer"}
            onClick={()=>goToPrevious()}
      >chevron_left</Box>
        <img src={sliderImageArray[indexOfSlider]} width={'100%'}/>
        <Box className="material-icons" position={"absolute"} top={"7rem"} right={"0"} color={"white"} cursor={"pointer"}
      onClick={()=>goToNext()}
        >navigate_next</Box>

      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={"1.5rem"} fontWeight={"bold"} color={"teal.900"}> Categories </Text>
        <Flex justifyContent={"center"}>
          {categories.map((item)=>{
            return(
              <Link to={"/explore"}>
              <Box bgColor={'#ffffff'} height={"14rem"} width={"10rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.200"}>
              <img src={item.category} className="categoryImage"/>
              <Text textAlign={"center"} fontSize={"1.2rem"} fontWeight={"bold"}>{item.title}</Text>
              </Box>
              </Link>
            )
          })}
        </Flex>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={"1.5rem"} fontWeight={"bold"} color={"teal.900"}> Must Watch </Text>
        <Flex justifyContent={"center"}>
          {categories.map((item)=>{
            return(
              <Link to={"/explore"}>
              <Box bgColor={'#ffffff'} height={"14rem"} width={"10rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.200"}>
              <img src={item.category} className="categoryImage"/>
              <Text textAlign={"center"} fontSize={"1.2rem"} fontWeight={"bold"}>{item.title}</Text>
              </Box>
              </Link>
            )
          })}
        </Flex>
      </Box>
    </Flex>

  )
}
