import React from 'react'
import NavigationUp from '../Components/NavigationUp'
import CreateForm from "../Components/CreateForm"
import { Container,Row,Col } from "react-bootstrap"


const CreateEntryPage = () => {
  return (
    <>
      <div id='auth-page'>
        <NavigationUp></NavigationUp>
        <Container id='auth-page-container'>
          <Row>
          <Col >
            <CreateForm ></CreateForm>
          </Col>
        </Row>
        </Container>
        


      </div>
    </>

  )
}

export default CreateEntryPage