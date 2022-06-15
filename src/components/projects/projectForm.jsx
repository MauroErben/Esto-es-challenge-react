import React, { useState, useEffect } from 'react'
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button
} from '@chakra-ui/react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import InputError from './inputError'
import { useLocation, useNavigate } from 'react-router-dom'

const projectScheme = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  manager: Yup.string().required('Please select a project manager'),
  assigned: Yup.string().required('Please select a person')
})

export default function ProjectorForm () {
  const [project, setProject] = useState(JSON.parse(localStorage.getItem('projects')) || [])
  const navigate = useNavigate()

  // Esto es para detectar la ruta actual
  const { pathname, state } = useLocation()

  const submitForm = (values, { resetForm }) => {
    // Esto es para setear una fecha de creacion o edicion
    values.date = new Date().toLocaleDateString()

    // Esto es para crear un nuevo proyecto
    if (pathname === '/add-project') {
      setProject([...project, values])
    } else {
      // Esto es para actualizar el proyecto
      setProject(project.map(p => (p.name === state.name ? values : p)))
    }
    setTimeout(() => {
      // Navegamos a la ruta principal tras guardar el proyecto
      navigate('/', { replace: true })
    }, 400)
  }
  // Cada vez que un proyecto cambia, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(project))
  }, [project])

  return (
    <Formik
      enableReinitialize
      initialValues={
        {
          name: state?.name || '',
          description: state?.description || '',
          manager: state?.manager || '',
          assigned: state?.assigned || '',
          status: state?.status || 'Enabled'
        }
      }
      validationSchema={projectScheme}
      onSubmit={submitForm}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur, touched }) => (
        <VStack
          alignItems='start'
          bg='white'
          w={['100%', '100%', '50%', '50%']}
          p={[4, 4, 6, 8]}
          spacing={4}
        >
          <FormControl>
            <FormLabel>Project Name</FormLabel>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name='name'
              type='text'
              value={values.name}
              placeholder='Project Name'
            />
            {touched.name && errors.name && <InputError>{errors.name}</InputError>}
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name='description'
              type='text'
              value={values.description}
              placeholder='Description'
            />
            {touched.description && errors.description && <InputError>{errors.description}</InputError>}
          </FormControl>

          <FormControl>
            <FormLabel>Project manager</FormLabel>
            <Select
              onChange={handleChange}
              onBlur={handleBlur}
              name='manager'
              value={values.manager}
              placeholder='Select a person'
            >
              <option>Franco Lopez</option>
              <option>Lucas Acosta</option>
              <option>Mauro Hidalgo</option>
              <option>Jose React</option>
            </Select>
            {touched.manager && errors.manager && <InputError>{errors.manager}</InputError>}
          </FormControl>

          <FormControl>
            <FormLabel>Assigned to</FormLabel>
            <Select
              onChange={handleChange}
              onBlur={handleBlur}
              name='assigned'
              value={values.assigned}
              placeholder='Select a person'
            >
              <option>Ignacio Truffa</option>
              <option>Martin Perez</option>
              <option>Horacio Lopez</option>
              <option>Mauro Erben</option>
            </Select>
            {touched.assigned && errors.assigned && <InputError>{errors.assigned}</InputError>}
          </FormControl>

          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
              name='status'
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </Select>
          </FormControl>
          <Button
            onClick={handleSubmit}
            colorScheme='red'
          >
            {pathname === '/add-project' ? 'Create project' : 'Save changes'}
          </Button>
        </VStack>
      )}
    </Formik>
  )
}
