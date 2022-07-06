import { Box, Button, Flex ,Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { slider1,slider2,slider3,category1,category2,category3,category4,category5,category6 } from '../images/images'
import { getAllCategories } from '../slice/AllCategoriesSlice';
import Footer from './Footer';
import { useInterval } from './useInterval';
import ReactLoading from "react-loading";
import { getAllVedios } from '../slice/AllVedioSlice';
import {All,Sports,Kids,WebSeries,Knowledge,Movies} from '../slice/filteredSlice';
import { addToHistory } from '../slice/AllHistory';
export default function Home() {
  


  const authState = useSelector(state=>state.authReducer)
  const allCategories =useSelector(state=>state.AllCategoriesSlice)
  const dispatch  = useDispatch();
    useEffect (()=>{
      
    },[])
    const allData =useSelector(state=>state.AllVedioSlice)
      useEffect (()=>{
          dispatch(getAllVedios())
      },[])
  const sliderImageArray = [{img:slider2,link:210001224},{img:slider1,link:210001222},{img:slider3,link:210001227}]
  const [indexOfSlider, setIndexSlider] = useState(0) 
  const goToNext = ()=>indexOfSlider<2?setIndexSlider(indexOfSlider=>indexOfSlider+1):setIndexSlider(0)
  const goToPrevious = ()=>indexOfSlider>0?setIndexSlider(indexOfSlider=>indexOfSlider-1):setIndexSlider(2)
   useInterval(()=>{
      goToNext()
  },3000)
  let i =0;

  return (

    <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"} minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
     
      <Box display={"flex"} margin={"0rem 2rem"} justifyContent={"center"} position={"relative"} minWidth={"100%"} maxWidth={"70%"} height={"25rem"} bgColor={"black"}>
      <Box className="material-icons" position={"absolute"} top={"7rem"} left={"0"} color={"white"} cursor={"pointer"}
            onClick={()=>goToPrevious()}>chevron_left</Box>
      <Link to={"/vedio/"+sliderImageArray[indexOfSlider].link} style={{width:'100%',display:"flex"}} >
        <img src={sliderImageArray[indexOfSlider].img} width={"100%"}  />
        </Link>
        <Box className="material-icons" position={"absolute"} top={"7rem"} right={"0"} color={"white"} cursor={"pointer"}
      onClick={()=>goToNext()}
        >navigate_next</Box>
      </Box>

      
      <Box w={"100%"}>
      <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"semibold"} bgColor={"teal.900"} color={"white"} p={"0.9rem"} pb={"0.5rem"}> Categories </Text>
        <Flex flexWrap={"wrap"} w={"100%"} padding={"1rem"} pt={'1rem'} height={"fit-content"} alignItems={"center"} pb={"2rem"} bgColor={"teal.900"} mb={"2rem"} justifyContent={"space-between"}>
      
          {allCategories.category==="loading"?<ReactLoading type={'spin'} color="#4FD1C5" />:(allCategories.category).map((item)=>{
          return(
            <>
            <Link to={"/explore"} key={item._id} >
            <Box bgColor={'#ffffff'}  height={"100%"} width={"12rem"}  boxShadow={"lg"} border={"1px"} borderColor={"gray.200"} position={"relative"}>
            <img src={item.image} className="categoryImage"  margin={"none"}/>
            <Button colorScheme='teal' borderRadius={"none"}  variant='solid' position={"absolute"} bottom={"0px"} className="categories"
            onClick={()=>{
              switch(item.categoryName)
              {
                case 'Kids' : dispatch(Kids());
                              break;
                case 'All' : dispatch(All());
                break;
                case 'Movies' : dispatch(Movies());
                break;
                case 'Sports' : dispatch(Sports());
                break;
                case 'Knowledge' : dispatch(Knowledge());
                break;
                case 'WebSeries' : dispatch(WebSeries())
                break;
              }
            }}
            >{item.categoryName}</Button>
            </Box>
            </Link>
            </>
          )
        })
          
          }
          </Flex>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={"1.5rem"} fontWeight={"bold"} color={"teal.900"}> Trending </Text>
        <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
        {(allData.vedioList)==="loading"?  <ReactLoading type={'spin'} color="#4FD1C5" />:(allData.vedioList).filter((item)=>item.trending===true).map((item)=>{
            return(
              <Link to={"/vedio/"+item._id} key={item._id} >
              <Box bgColor={'#ffffff'} className={"trending"} height={"fit-content"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.200"}
               onClick={()=>dispatch( addToHistory(item))}
              >
              <img src={item.thumbnail} className="categoryImage"/>
              <Text pl={'5px'} fontWeight={"semibold"} marginTop={"1rem"}>{item.title}</Text>
              <Button colorScheme='teal' w="100%" borderRadius={"none"} marginTop={'1rem'} variant='solid' >Watch Now</Button>
              </Box>
              </Link>
            )
          })}
        </Flex>
      </Box>
    </Flex>

  )
}
