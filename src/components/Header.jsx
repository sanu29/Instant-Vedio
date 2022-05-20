import React from 'react'
import { Box, Button, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
export default function Header() {
return(
<>
  <Flex justifyContent={'space-between'} alignItems={"center"} width={'100%'} height={'4rem'} bgColor={'teal.300'}
    color={'teal.900'} position={"absolute"} top={"0rem"}>
    <Box ml={'3rem'} fontSize={'1.8rem'} fontWeight={'bolder'}>
      Instant Videos
    </Box>
    <Box mr={'2rem'} fontSize={'1.8rem'} fontWeight={'bolder'} display={"flex"}>

      <Link to={"/profile"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} mr={'2rem'}>
      <span class="material-icons md-48">account_circle</span>
      </Button>
      </Link>

      <Link to={"/login"}>
      <Button bgColor='teal.900' color={'white'} border={'0.5px'}
        _hover={{color:'teal.900',bgColor:"teal.300"}}>Login</Button>
      </Link>


    </Box>

  </Flex>
  <Flex direction={"column"} justifyContent={'start'} alignItems={"center"}  width={'5rem'}
    bgColor={'teal.300'} color={'teal.900'} position={"absolute"} top={"4rem"} height={"calc(100vh-10vh)"}>

    <Link to={"/"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span class="material-icons md-48 ">home</span>
    </Button>
    </Link>

    <Link to={"/explore"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span class="material-icons md-48 ">explore</span>
    </Button>
    </Link>

    <Link to={"/playlist"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span class="material-icons md-48 ">playlist_add</span>
    </Button>
    </Link>

    <Link to={"/history"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"} width={"100%"}
      textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span class="material-icons md-48 ">history</span>
    </Button>
    </Link>

    <Link to={"/watchlater"}> <Button bgColor={"teal.300"} border={"none"} shadow={"none"} height={"5rem"}
      width={"100%"} textAlign={'center'} _focus={{border:'none',shadow:'none'}}>
    <span class="material-icons md-48 ">watch_later</span>
    </Button>
    </Link>
  </Flex>

</>


)
}