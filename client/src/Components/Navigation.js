import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { logOut } from "../redux/actions/authActions"
import { useNavigate } from "react-router-dom"
// import decode from "jwt-decode"


const Navigation = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState()

    const navigate = useNavigate()

    const exit = async (id) => {
        await dispatch(logOut(id))
        setUser(null)
        navigate("/")
    }

    // const renewAccessToken = async (id) => {
    //     await dispatch(getAccessToken(id))
    //     setUser(JSON.parse(localStorage.getItem("user")))
    // }

    useEffect(() => {
        if (localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        

    //    const interval = setInterval(()=>{
    //     const accessToken = user?.accessToken
    //     if(accessToken){
    //         const decodedAccessToken = decode(accessToken)
    //         if(decodedAccessToken.exp * 1000 < new Date().getTime()){
    //            renewAccessToken(user.user._id)
    //         }
    //     }
    //    },5000)

    //    return () => {clearInterval(interval)}
        
    }, [location, user])



    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <Link to="/"><Navbar.Brand>BLOG</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav>
                            {
                                user ? (
                                    <>
                                        <Nav.Link>
                                            <Link to="/create">
                                                <Button variant='outline-warning'>Create Entry</Button>
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Button onClick={(e) => { exit(user.user._id) }} variant='outline-warning'>Log Out</Button>
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <><Nav.Link>
                                        <Link to="/signin">
                                            <Button variant='outline-warning'>SignIn</Button>
                                        </Link>
                                    </Nav.Link>
                                    </>
                                )
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation