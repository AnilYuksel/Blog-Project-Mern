import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logOut, getAccessToken } from "../redux/actions/authActions"
import { useNavigate } from "react-router-dom"
import decode from "jwt-decode"


const Navigation = ({ search }) => {
    
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

        <div className='d-flex flex-column' id='nav'>
            <div>
                <h1 className='mt-5'>ZAMAZINGO</h1>
            </div>
            <div className='mt-auto'>
                    <h5 className='text-center'>Share What You Have In Your Mind ...</h5>
                </div>
            <div className='mt-auto'>
                <ul>
                    <li>
                        <Link to="/"> HOME</Link>
                    </li>
                    {
                        user ? (
                            <>
                                <li>
                                    <Link to="/create">
                                      ZINGO
                                    </Link>
                                </li>
                                <li>
                                    <a id='logo-name' href='#!' onClick={(e) => { exit(e,user.user._id) }} variant='outline-warning'>LOG OUT</a>
                                </li>
                            </>
                        ) : (
                            <>       <li>
                                <Link to="/signin">
                                    SIGN IN
                                </Link>
                            </li>

                            </>
                        )
                    }
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className='mt-auto' id='search-div'>
                <form className="form">
                    <input id='search' onChange={search} className="form-control mt-1" type="search" placeholder="Search by Title" aria-label="Search" />
                </form>
            </div>
            <div className='footer mt-auto' id='footer'>
                <span>COPYRIGHT &copy; 2022 ANIL YUKSEL</span>
            </div>

        </div>


    )
}

export default Navigation