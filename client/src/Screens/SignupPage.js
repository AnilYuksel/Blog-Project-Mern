import React, { useLayoutEffect, useRef, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { signUp } from '../redux/actions/authActions'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import NavigationUp from '../Components/NavigationUp'

function SignupPage() {

  const initialFormData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [formData, setFormData] = useState(initialFormData)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    await dispatch(signUp(formData))
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
  }, [navigate, error, userState, user])

  return (
    <>
      <div id='auth-page'>
        <NavigationUp></NavigationUp>
        <Container id='auth-page-container'>
          <Row>
            <Col >
              <Form id='form' className='align-content-center mt-5'
                onSubmit={(e) => handleSignup(e)}>
                <h1 className='text-center mt-3'>Sign Up</h1>
                {errorMessage==="This email has already been taken" && <div className="alert alert-danger" role="alert">This email has already been taken</div> }
                {errorMessage==="This user name has already been taken" && <div className="alert alert-danger" role="alert">This user name has already been taken</div> }
                {errorMessage==="Password can't be confirmed" && <div className="alert alert-danger" role="alert">Password can't be confirmed</div> }
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
                <Button className='w-100 mt-3' type='submit' >LogIn</Button>
                <Form.Text>Do you have already an account? <Link to="/signin">Sign Up</Link> </Form.Text>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SignupPage