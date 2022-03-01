import React, { useLayoutEffect, useRef, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "../redux/actions/authActions"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import NavigationUp from '../Components/NavigationUp'


function SigninPage() {

  const initialFormData = {
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState(initialFormData)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault()
    await dispatch(signIn(formData))
  }

  const userState = useSelector((state) => state.user)
  const { error } = userState
  const [ errorMessage,setErrorMessage ] = useState('')
  const user = JSON.parse(localStorage.getItem("user"))

  const preventInitialRender = useRef(true)

  useLayoutEffect(() => {
    if (preventInitialRender.current) {
      preventInitialRender.current = false
      return
    }
    if(error){
      setErrorMessage(`${error}`)
    }
    if (user) {
      setErrorMessage("null")
      navigate("/")
    }
  }, [navigate, user,setErrorMessage,error])

  return (
    <>
      <div id='auth-page'>
        <NavigationUp></NavigationUp>
        <Container id='auth-page-container'>
          <Row>
            <Col >
              <Form id='form' className='align-content-center mt-5'
                onSubmit={(e) => handleSignIn(e)}>
                <h1 className='text-center mt-3'>Sign In</h1>
                {errorMessage==="User not found" && <div className="alert alert-danger" role="alert">User not found!</div> }
                {errorMessage==="Check your password" && <div className="alert alert-danger" role="alert">Please provide a valid password!</div> }
                <Form.Group className='mt-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type='email' placeholder='E-mail'></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} type='password' placeholder='Password'></Form.Control>
                </Form.Group>
                <Button className='w-100 mt-3' type='submit' >LogIn</Button>
                <Form.Text>Don't you have an account? <Link to="/signup">Sign Up</Link> </Form.Text>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SigninPage