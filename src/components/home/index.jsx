import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import ProjectItems from './projectItem'

export default function Home () {
  const [project, setProject] = useState(JSON.parse(localStorage.getItem('projects')) || [])

  const handleSearch = (e) => {
    const search = e.target.value
    // Si escribio algo, busco en el array y filtro
    if (search.length > 0) {
      const filteredProject = project.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      setProject(filteredProject)
    } else {
      // Si no escribio nada, muestro todos los proyectos nuevamente
      const getProjects = JSON.parse(localStorage.getItem('projects')) || []
      setProject(getProjects)
    }
  }

  // Esta funcion se ejecuta cuando se elimina un proyecto
  const handleDeleteProject = (name) => {
    const result = confirm(`Are you sure you want to delete ${name}?`)
    if (result) {
      const newProjects = project.filter(item => item.name !== name)
      setProject(newProjects)
      localStorage.setItem('projects', JSON.stringify(newProjects))
    }
  }

  return (
    <VStack
      spacing={0}
      width={['100%', '100%', '50%', '50%']}
      alignItems='start'
    >
      <ProjectItems
        projects={project}
        handleDelete={handleDeleteProject}
        handleSearch={handleSearch}
      />
    </VStack>
  )
}
