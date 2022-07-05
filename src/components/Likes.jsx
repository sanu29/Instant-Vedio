import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from "react-loading";
import { Link, useNavigate } from 'react-router-dom';
import { deleteWatchlater, getWatchlater } from '../slice/AllWatchlater';
import { deleteLikes, getLikes } from '../slice/AllLike';
import { addToHistory } from '../slice/AllHistory';
export const Likes = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getLikes())
    },[])

    const navigate = useNavigate()
    
  const LikesData = useSelector(state=>state.AllLike)
    console.log(LikesData)
    return(<>
        <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
          
      

            {LikesData.likes==="loading"?  
             <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
            <ReactLoading type={'spin'} color="#4FD1C5" />
            </Flex>:
           LikesData.likes.length===0?( <Flex justifyContent={"center"}  mt={'2rem'} w={"100%"} flexWrap={"wrap"}><Flex flexDirection={"column"}><h2>No liked videos Click here to browse more</h2><Button onClick={()=>navigate('/explore')}>Browse More</Button></Flex></Flex>):
           LikesData.likes.map((item)=>{
            return(
                <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>
                <Box bgColor={'#ffffff'} display={"flex"} flexDirection={""} position={"relative"} height={"10.1rem"} width={"25rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"} pb={"2rem"}
                key={item._id}
                >
                  <Link to={"/vedio/"+item._id} onClick={()=>dispatch(addToHistory(item))}>
                <img src={item.thumbnail} className="categoryImage" />
                </Link>

               <Flex alignItems={"center"} flexDirection={"column"} justifyContent={"space-around"}>
                
               <Text p={'0.5rem'} fontWeight={"semibold"} pb={0} w={'90%'}>{item.title}</Text>
               <Flex>
               <Text  pt={"5px"}  color={"gray.600"} fontSize={"0.8rem"}>{item.views} Views | {item.date}</Text>
               <Box marginRight={'5px'} cursor={"pointer"} display={"flex"} alignItems={"center"} justifyContent={"center"}  marginLeft={"1rem"}><span className="material-icons  " title={"Delete From Likes"} onClick={()=>dispatch(deleteLikes(item._id))}>thumb_up</span></Box>
          
               </Flex>
                           </Flex>
                </Box>     </Flex>
            )
            
            
            })}
       
        </Flex>
        </>
    )   
}