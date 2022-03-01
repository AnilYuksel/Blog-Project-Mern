import React, { useLayoutEffect, useRef, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { signUp, signIn } from "../redux/actions/authActions"
import NavigationUp from '../Components/NavigationUp'
import { useNavigate } from "react-router-dom"

function AuthPage() {
  const initialFormData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  const [login, setLogin] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    await dispatch(signIn(formData))     
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    await dispatch(signUp(formData))
    navigate("/")
  }

  const userState = useSelector((state) => state.user)
  const { error } = userState
  const user = JSON.parse(localStorage.getItem("user"))

  const preventInitialRender = useRef(true)

  useLayoutEffect(()=>{
    if(preventInitialRender.current){
      preventInitialRender.current = false
      return
    }
    if(user){
      navigate("/")
    }
  },[navigate,error,userState,user])

 

  return (
    <><div id='auth-page'>
      <NavigationUp></NavigationUp>
      <Container id='auth-page-container'>
        <Row>
          <Col >
            {
              login ?
                (
                  <Form id='form' className='align-content-center mt-5'
                    onSubmit={(e) => handleSignIn(e)}>
                    <h1 className='text-center mt-3'>Sign In</h1>
                    {error && <p>{error}</p>}
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
                : (<Form id="form" className='align-content-center mt-5'
                  onSubmit={(e) => handleSignUp(e)}>
                  <h1 className='text-center mt-3'>Sign Up</h1>
                  {error && <p>{error}</p>}
                  <Form.Group className='mt-3'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={(e) => setFormData({ ...formData, userName: e.target.value })} type='text' placeholder='User Name'></Form.Control>
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
    </div>
    </>
  )
}

export default AuthPage


