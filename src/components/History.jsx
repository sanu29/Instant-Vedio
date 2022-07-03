import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistory, deleteHistory, deleteHistoryAll, getHistory } from '../slice/AllHistory'
import ReactLoading from "react-loading";
import { Link, useNavigate } from 'react-router-dom';
export const History = () =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getHistory())
    },[])

    const navigate = useNavigate()
    const history = useSelector(state=>state.AllHistory).history;
    console.log(history)
    return(<>
        <Flex pt={"4rem"} pl={'5rem'} direction={"column"} w={"100%"}  minHeight={'100vh'} bgColor={"gray.100"} minWidth="fit-content" >
            <Text display={"flex"} margin={'1rem'} marginRight={"3rem"} cursor={"pointer"} justifyContent={"end"} fontWeight={'bold'}
            onClick={()=>dispatch(deleteHistoryAll())}
            >Clear All History</Text>

       <Flex justifyContent={"center"} w={"100%"} flexWrap={"wrap"}>

            {history==="loading"?  
            <ReactLoading type={'spin'} color="#4FD1C5" />:
            history.length===0?(<Flex flexDirection={"column"}><h2>No History Click here to browse more</h2><Button onClick={()=>navigate('/explore')}>Browse More</Button></Flex>):
            history.map((item)=>{
            return(
              
                <Box bgColor={'#ffffff'} display={"flex"} flexDirection={"column"} position={"relative"} height={"18rem"} width={"15rem"}  margin={"1rem"} boxShadow={"lg"} border={"1px"} borderColor={"gray.300"}
                key={item._id}
                >
                  <Link to={"/vedio/"+item._id}>
                <img src={item.thumbnail} className="categoryImage"/>
                </Link>
                <Text p={'0.5rem'} fontWeight={"semibold"} pb={0}>{item.title}</Text>

               <Flex alignItems={"center"} justifyContent={"flex-end"}>
                
               <Flex alignItems={"center"} margin={"1rem"}>
                        <Box margin={'5px'} cursor={"pointer"}><span className="material-icons  " title={"Delete From History"} onClick={()=>dispatch(deleteHistory(item._id))}>delete</span></Box>
                </Flex>
          
               </Flex>
                </Box>
            )
            
            
            })}
        </Flex>
        </Flex>
        </>
    )   
}