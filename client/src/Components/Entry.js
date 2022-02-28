import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { MdDateRange } from "react-icons/md"
import { deleteEntry } from "../redux/actions/entryActions"
import { useDispatch, useSelector } from "react-redux"
import defaultImage from "./images/default.jpg"

function Entry({ entry }) {

  const [user, setUser] = useState()
  const userState = useSelector((state) => state.user)

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"))
    setUser(userData)
  }, [userState])


  const dispatch = useDispatch()

  return (
    <>
      <div className='row my-5' id='card-body'>
        <div className="col-4 p-0" >
          {
            entry.image ? (<div id="image-cover"><img src={entry.image} id="card-image" alt=""></img></div>) : (<div id="image-cover"><img src={defaultImage} id="card-image" alt=""></img></div>)
          }
        </div>
        <div className="col-8 p-0">
          <div className='d-flex flex-column justify-content-center h-100' id='card-content'>
            <div>
              <h3>
                {
                  entry.title.length >= 42 ? entry.title.slice(0, 42).concat("...") : entry.title
                }
              </h3>
            </div>
            <div>
              <h5>{entry.author.userName}</h5>
            </div>
            <div>
              <span id='date-logo'>
                <MdDateRange></MdDateRange>
              </span>
              <span id='date'>
                {
                  entry.date.length >= 10 ? entry.date.slice(0, 10) : entry.date
                }
              </span>
            </div>
            <div>
              <p className='mt-2'>
                {
                  entry.content.length >= 175 ? entry.content.slice(0, 175).concat("...") : entry.content
                }
              </p>
            </div>
            <div ><Link to={`entry-details/${entry._id}`} state={{ entry: entry }}>Read More ...</Link></div>
            {
              user?.user?._id === entry.creatorId || user?.user?.googleId === entry.creatorId ?
                (
                  <div className='d-flex mt-3'>
                    <Link to={`update/${entry._id}`} style={{ cursor: "pointer" }}><button className='btn'>Edit</button></Link>
                    <button className='btn mx-2' onClick={() => { dispatch(deleteEntry(entry._id)) }} >Delete</button>
                  </div>
                ) : null
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default Entry