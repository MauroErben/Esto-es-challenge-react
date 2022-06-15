import React from 'react'
import { VStack } from '@chakra-ui/react'
import Header from '../header'

export default function AppLayout ({ children }) {
  return (
    <VStack
      width='full'
      bg='gray.100'
      spacing={5}
    >
      <Header />
      {children}
    </VStack>
  )
}
