import React from 'react'
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../slice/authSlice'
export default function Header() {

const [isLargerThan620] = useMediaQuery('(min-width: 620px)')
const [menuDisp, setMenuDisp] = useState("none")
const authState = useSelector(state=>state.authReducer)
const dispatch = useDispatch()
const authButton = () =>
{ if(authState.isLogin)
 {
   return (
       
         <Button bgColor='teal.900' color={'white'} border={'0.5px'}
           _hover={{color:'teal.900',bgColor:"teal.300"}}
           onClick={()=>dispatch(Logout())}
           >Logout</Button>
    
   )}
return(
     <Link to={"/login"}>
     <Button bgColor='teal.900' color={'white'} border={'0.5px'}
       _hover={{color:'teal.900',bgColor:"teal.300"}}>Login</Button>
     </Link>)

}
console.log(authState)
  if(isLargerThan620)
  {
    return(
      <>
  <Flex justifyContent={'space-between'} alignItems={"center"} width={'100%'} height={'4rem'} bgColor={'teal.300'}
    color={'teal.900'} position={"fixed"} top={"0rem"} zIndex={1}>
    <Box ml={'3rem'} fontSize={'1.8rem'} fontWeight={'bolder'}>
      Instant Videos
    </Box>
    <Box mr={'2rem'} fontSize={'1.8rem'} fontWeight={'bolder'} display={"flex"} >

      <Link to={"/profile"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} mr={'2rem'}>
      <span className="material-icons md-48">account_circle</span>
      </Button>
      </Link>
      
      {authButton()}

    </Box>

  </Flex>
  <Flex direction={"column"} justifyContent={'start'} alignItems={"center"}  width={'5rem'} 
    bgColor={'teal.300'} color={'teal.900'} position={"fixed"} pt={'4rem'} minHeight={"calc(100%)"}>

    <Link to={"/"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span className="material-icons md-48 ">home</span>
    </Button>
    </Link>

    <Link to={"/explore"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span className="material-icons md-48 ">explore</span>
    </Button>
    </Link>

    <Link to={"/playlist"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span className="material-icons md-48 ">playlist_add</span>
    </Button>
    </Link>

    <Link to={"/history"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span className="material-icons md-48 ">history</span>
    </Button>
    </Link>

    <Link to={"/watchlater"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"}
      width={"100%"} textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span className="material-icons md-48 ">watch_later</span>
    </Button>
    </Link>
  </Flex>

</>


)
}
else{
  return (
    <>
     <Flex justifyContent={'space-between'} alignItems={"center"} width={'100%'} height={'4rem'} bgColor={'teal.300'}
    color={'teal.900'} position={"relative"} top={"0rem"} zIndex={1}>
    <Box ml={'3rem'} fontSize={'1.8rem'} color={"white.100"} fontWeight={'bolder'}>
      Instant Videos
    </Box>
    <Box mr={'2rem'} fontSize={'1.8rem'} fontWeight={'bolder'} display={"flex"} alignItems={"center"} >

    <Button bgColor={"teal.300"} border={"none"} shadow={"none"} mr={'2rem'}
    onClick={()=>menuDisp==='none'?setMenuDisp('flex'):setMenuDisp('none')}
    >
      <span className="material-icons md-48">menu</span>
      </Button>
 
      <Box display={menuDisp} flexDirection={"column"} top={"4rem"} bgColor={"white"} border={"1px"} fontSize={'0.8rem'} position={"absolute"}
      >
        <Link to={'/explore'}><Text borderBottom={'1px'} p={"4px 8px"}
        _hover={{bgColor:'teal.300'}}
        >Explore</Text></Link >
        <Link to={'/watchlater'}><Text borderBottom={'1px'} p={"4px 8px"}
        _hover={{bgColor:'teal.300'}}
        >Watch Later</Text></Link >
        <Link to={'/history'}><Text borderBottom={'1px'} p={"4px 8px"}
        _hover={{bgColor:'teal.300'}}
        >History</Text></Link >
        <Link to={'/playlist'}><Text borderBottom={'1px'} p={"4px 8px"}
        _hover={{bgColor:'teal.300'}}
        >Playlist</Text></Link >
        <Link to={'/profile'}><Text borderBottom={'1px'} p={"4px 8px"}
        _hover={{bgColor:'teal.300'}}
        >Profile</Text></Link >
     </Box>
      <Link to={"/login"}>
      <Button bgColor='teal.900' color={'white'} border={'0.5px'}
        _hover={{color:'teal.900',bgColor:"teal.300"}}>Login</Button>
      </Link>


    </Box>

  </Flex>
    
    </>


  )
}}