import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from "react-loading";
import { Link, useNavigate } from 'react-router-dom';
import { deleteWatchlater, getWatchlater } from '../slice/AllWatchlater';
export const Watchlater = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getWatchlater())
    },[])

    const navigate = useNavigate()
    
  const watchLaterData = useSelector(state=>state.AllWatchLater);

    return(<>
        <Flex pt={"4rem"} pl={'5rem'} mt={"2rem"} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
          
       <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>

            {watchLaterData.watchlater==="loading"?  
            <ReactLoading type={'spin'} color="#4FD1C5" />:
            watchLaterData.watchlater.length===0?(<Flex flexDirection={"column"}><h2>No watchlater Click here to browse more</h2><Button onClick={()=>navigate('/explore')}>Browse More</Button></Flex>):
            watchLaterData.watchlater.map((item)=>{
            return(
              
                <Box bgColor={'#ffffff'} display={"flex"} flexDirection={"column"} position={"relative"} height={"14rem"} width={"20rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"} pb={"2rem"}
                key={item._id}
                >
                  <Link to={"/vedio/"+item._id}>
                <img src={item.thumbnail} className="categoryImage"/>
                </Link>

               <Flex alignItems={"center"} justifyContent={"space-between"}>
                
               <Text p={'0.5rem'} fontWeight={"semibold"} pb={0} w={'90%'}>{item.title}</Text>
               <Box marginRight={'5px'} cursor={"pointer"} display={"flex"} alignItems={"center"} justifyContent={"center"}  marginLeft={"1rem"} marginRight={"1rem"}><span className="material-icons  " title={"Delete From watchlater"} onClick={()=>dispatch(deleteWatchlater(item._id))}>watch_later</span></Box>
               </Flex>
                </Box>
            )
            
            
            })}
        </Flex>
        </Flex>
        </>
    )   
}