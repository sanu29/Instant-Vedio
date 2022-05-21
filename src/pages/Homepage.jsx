import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'

export default function Homepage() {
  return (
    <>
    <Header/>
    <Flex pt={"5rem"} pl={'5rem'} height={'100vh'}  width={"calc(100%-64px)"}>
    <div>Home</div>


    </Flex>
    
    </>
  )
}
