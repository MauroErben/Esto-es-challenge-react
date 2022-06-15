import React from 'react'
import {
  Heading,
  HStack,
  VStack,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  FormControl,
  Input
} from '@chakra-ui/react'
import { RiMenu5Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'

export default function ProjectItems ({ projects, handleDelete, handleSearch }) {
  const navigate = useNavigate()
  return (
    <>
      <FormControl
        marginBottom={5}
      >
        <Input
          bg='gray.300'
          type='search'
          placeholder='Search project'
          onChange={(e) => handleSearch(e)}
        />
      </FormControl>

      <VStack
        bg='white'
        width='full'
      >
        {projects.length > 0
          ? projects.map((project, index) => (
            <HStack
              key={index}
              width='full'
              justifyContent='space-between'
              padding={[4, 4, 6, 8]}
              borderBottom='1px solid'
              opacity={project.status === 'Enabled' ? 1 : 0.5}
            >
              <VStack
                justifyContent='start'
                alignItems='start'
                fontSize='sm'
              >
                <Heading size='sm'>{project.name}</Heading>
                <Text>Creation date: {project.date}</Text>
                <Text>{project.description}</Text>
                <HStack>
                  <Image objectFit='contain' boxSize={8} borderRadius='full' src='/assets/images/persona.jpg' />
                  <Text>{project.assigned}</Text>
                </HStack>
              </VStack>
              <Menu>
                <MenuButton
                  aria-label='Options'
                  as={IconButton}
                  icon={<RiMenu5Fill />}
                  variant='outline'
                />
                <MenuList>
                  <MenuItem onClick={() => navigate('/edit-project', { state: project })} icon={<AiTwotoneEdit />}>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => handleDelete(project.name)} icon={<AiFillDelete />}>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          ))
          : <Text>No projects found</Text>}
      </VStack>
    </>
  )
}
