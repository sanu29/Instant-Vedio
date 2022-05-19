import React from 'react'
import { Box, Button, Flex } from "@chakra-ui/react"
export default function Header() {
  return(
    <>
     <Flex justifyContent={'space-between'} alignItems={"center"} width={'100%'} height={'4rem'} bgColor={'teal.300'} color={'teal.900'} position={"fixed"} top={"0rem"}>
        <Box ml={'3rem'} fontSize={'1.8rem'} fontWeight={'bolder'}>
                  Instant UI
        </Box>
        <Box mr={'2rem'} fontSize={'1.8rem'} fontWeight={'bolder'} display={"flex"} >
        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} mr={'2rem'}>
            <span class="material-icons md-48" >account_circle</span>
        </Button>
              <Button bgColor='teal.900' color={'white'} border={'0.5px'} _hover={{color:'teal.900',bgColor:"teal.300"}}>Login</Button>
        </Box>
        
        </Flex>
        <Flex direction={"column"} justifyContent={'start'} alignItems={"center"} width={'5rem'} id="side-nav" bgColor={'teal.300'} color={'teal.900'}
        position={"fixed"}  top={"4rem"} height={"calc(100vh-10vh)"}
        >
        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} height={"5rem"} width={"100%"} textAlign={'center'}>
            <span class="material-icons md-48 " >home</span>
        </Button>
        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} height={"5rem"} width={"100%"} textAlign={'center'}>
            <span class="material-icons md-48 " >explore</span>
        </Button>

        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} height={"5rem"} width={"100%"} textAlign={'center'}>
            <span class="material-icons md-48 " >playlist_add</span>
        </Button>
        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} height={"5rem"} width={"100%"} textAlign={'center'}>
            <span class="material-icons md-48 " >history</span>
        </Button>
        <Button bgColor={"teal.300"} border={"none"}  shadow={"none"} height={"5rem"} width={"100%"} textAlign={'center'}>
            <span class="material-icons md-48 " >watch_later</span>
        </Button>
        </Flex>
        
    </>  


  )  
}
