import React, { useState, useEffect, useCallback  } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logOut, getAccessToken } from "../redux/actions/authActions"
import { useNavigate } from "react-router-dom"
import decode from "jwt-decode"
import { Nav, Navbar, Container } from "react-bootstrap"


const NavigationUp = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [user, setUser] = useState()

  const userState = useSelector(state => state.user)

  const navigate = useNavigate()

  const exit = async (e,id) => {
    e.preventDefault()
    await dispatch(logOut(id))
    setUser(null)
    navigate("/")
  }

  const renewAccessToken = useCallback(async (id) => {
    if (!userState.googleLogin) {
        dispatch(getAccessToken(id))
        setUser(JSON.parse(localStorage.getItem("user")))
    }
}, [dispatch, userState])

  useEffect(() => {
    if (localStorage.getItem('user') && !user) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }

    const interval = setInterval(() => {
      const accessToken = user?.accessToken
      if (accessToken) {
        const decodedAccessToken = decode(accessToken)
        if (decodedAccessToken.exp * 1000 < new Date().getTime()) {
          renewAccessToken(user.user._id)
        }
      }
    }, 5000)

    return () => { clearInterval(interval) }


  }, [location, user, renewAccessToken, userState])



  return (
    <>
      <Navbar expand="lg" id='nav-up'>
        <Container>
          <Navbar.Brand><h1>ZAMAZINGO</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='p-2' to="/">HOME</Link>
              {
                user ? (
                  <>

                    <Link className='p-2' to="/create">ZINGO</Link>


                    <a className='p-2' href='#!' onClick={(e) => { exit(e,user.user._id) }} variant='outline-warning'>LOG OUT</a>

                  </>

                ) : (
                  <>

                    <Link className='p-2' to="/signin">
                      SIGN IN
                    </Link>

                  </>
                )
              }
              <Link className='p-2' to="/contact">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  )
}

export default NavigationUp