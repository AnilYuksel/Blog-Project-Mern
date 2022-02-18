import React from 'react'
import { Card } from "react-bootstrap"
import moment from "moment"
import {Link} from "react-router-dom"
import {MdModeEdit, MdDelete} from "react-icons/md"
import {deleteEntry} from "../redux/actions/entryActions"
import {useDispatch} from "react-redux"
function Entry({ entry }) {

  const dispatch = useDispatch()

  return (
    <>
      <Card className='rounded py-3 my-3'>
        <Card.Img variant="top" src={entry.image} />
        <Card.Body>
          <Card.Title>{entry.title}</Card.Title>
          <Card.Text>
            {entry.content}
          </Card.Text>
          <Card.Title>Author: {entry.creator}</Card.Title>
          <Card.Subtitle>{moment(entry.createdAt).fromNow()}</Card.Subtitle>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between bg-white pb-0'>
          <Link to={`update/${entry._id}`} style={{cursor:"pointer"}}><MdModeEdit size={25} color='blue'></MdModeEdit></Link>
          <MdDelete onClick={()=>{dispatch(deleteEntry(entry._id))}} style={{cursor:"pointer"}} color='red' size={25}></MdDelete>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Entry