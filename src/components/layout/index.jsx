import React from 'react'
import { VStack } from '@chakra-ui/react'
import Header from '../header'

export default function AppLayout ({ children }) {
  return (
    <VStack
      width='full'
      paddingBottom={[4, 4, 8, 8]}
      bg='gray.100'
      spacing={5}
    >
      <Header />
      {children}
    </VStack>
  )
}
