import React from 'react'
import { Box, Button, Heading, HStack, Image, StackDivider, VStack } from '@chakra-ui/react'
import { GrAdd } from 'react-icons/gr'
import { BsArrowLeft } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header () {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Box
      bg='white'
      width={['100%', '100%', '50%', '50%']}
      p={[4, 4, 6, 8]}
    >
      <VStack
        divider={<StackDivider borderBottom='1px' />}
        alignItems='start'
      >
        <Image src='/assets/images/logo.png' alt='logo' boxSize={35} />
        <HStack
          width='full'
          justifyContent='space-between'
        >
          <HStack>
            {pathname !== '/' && <Button onClick={() => navigate('/')} variant='link' leftIcon={<BsArrowLeft />}>Back</Button>}
            <Heading size='md'>
              {pathname === '/' ? 'My project' : pathname === '/add-project' ? 'Add project' : 'Edit project'}
            </Heading>
          </HStack>
          {pathname === '/' && <Button onClick={() => navigate('/add-project')} leftIcon={<GrAdd />} colorScheme='red'>Add project</Button>}
        </HStack>
      </VStack>
    </Box>
  )
}
