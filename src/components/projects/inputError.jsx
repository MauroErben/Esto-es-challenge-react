import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export default function InputError ({ children }) {
  return (
    <Box
      p={2}
    >
      <Text
        color='red.500'
      >
        {children}
      </Text>
    </Box>
  )
}
