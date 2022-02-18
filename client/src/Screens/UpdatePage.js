import React from 'react'
import { Container } from 'react-bootstrap'
import UpdateEntry from '../Components/UpdateEntry'
import {useParams} from "react-router-dom"

const UpdateScreen = () => {

    const {id} = useParams()

  return (
    <Container>
        <UpdateEntry id={id}></UpdateEntry>
    </Container>
  )
}

export default UpdateScreen