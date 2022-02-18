import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { signUp,signIn } from "../redux/actions/authActions"
import Message from "../Components/Message"
import Navigation from '../Components/Navigation'



function SignInPage() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const userState = useSelector((state) => state.user)
  const { error } = userState

  const [formData, setFormData] = useState(initialFormData)
  const [login, setLogin] = useState(true)

  const dispatch = useDispatch()


 
// function errorCheck() {
//   const error = userState.error
//   if (login) {
//     dispatch(signIn(formData))
//     if(!error){
//       navigate("/")
//     }
//   } 
// }

  return (
    <>
    <Navigation></Navigation>
      <Container className='w-50 '>
        <Row>
          <Col >
            {
              login ?
                (
                  <Form className='align-content-center mt-3'
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (login) {
                        dispatch(signIn(formData))
                        
                      }
                      
                    }}
                  >
                    <h1 className='text-center mt-3'>Sign In</h1>
                    {error && <Message>{error}!</Message>}
                    <Form.Group className='mt-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type='email' placeholder='E-mail'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type='password' placeholder='Password'></Form.Control>
                    </Form.Group>
                    <Button className='w-100 mt-3' type='submit' >LogIn</Button>
                    <Form.Text>Don't have an account? <span onClick={(e) => setLogin(!login)} style={{ fontWeight: "bold", cursor: "pointer" }}>Sign Up</span> </Form.Text>
                  </Form>
                )
                : (<Form className='align-content-center mt-3'
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!login) {
                      dispatch(signUp(formData))
                      
                    }
                  }}>
                  <h1 className='text-center mt-3'>Sign Up</h1>
                  {error && <Message>{error}!</Message>}
                  <Form.Group className='d-flex'>

                    <Form.Control className='m-2' onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type='text' placeholder='First Name'></Form.Control>

                    <Form.Control className='m-2' onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type='text' placeholder='last Name'></Form.Control>
                  </Form.Group>
                  <Form.Group className='mt-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type='email' placeholder='E-mail'></Form.Control>
                  </Form.Group>
                  <Form.Group className='mt-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type='password' placeholder='Password'></Form.Control>
                  </Form.Group>
                  <Form.Group className='mt-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type='password' placeholder='Password'></Form.Control>
                  </Form.Group>
                  <Button className='w-100 mt-3' type='submit'>SignUp</Button>
                  <Form.Text>Do you have already an account? <span onClick={(e) => setLogin(!login)} style={{ fontWeight: "bold", cursor: "pointer" }}>Sign In</span> </Form.Text>
                </Form>)
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignInPage


