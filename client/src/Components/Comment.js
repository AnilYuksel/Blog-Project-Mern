import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { createComment } from "../redux/actions/entryActions"
import { Button, Form } from "react-bootstrap"


function Comment({ entry }) {

    const user = JSON.parse(localStorage.getItem("user"))

    const [comments, setComments] = useState(entry?.comments)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const handleClick = async (e) => {
        e.preventDefault()
        const exportComment = `${user.user.userName}: ${comment}`
        const newComment = await dispatch(createComment(entry._id, exportComment))
        await setComments(newComment)
        await setComment('')
    }

    return (
        <>
            {user && (
                <div className='d-flex align-items-center'>
                    <Form className='my-2 w-100'>
                        <Form.Group>
                            <Form.Control className='w-100' id='comment-form-control' onChange={(e) => setComment(e.target.value)} name='comment' type='text' placeholder='Share Your Idea'></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button id='form-button' className='mx-2 ' onClick={(e) => handleClick(e)}>Share</Button>
                </div>
            )}
            <div className='mb-5' id='comment-content'>
                <ul className='list-group list-group-flush '>
                    {comments.length >= 1 ? (<h5 className='m-0'>Comments</h5>) : null}
                    {comments.map((c, i) => (
                        <li className='list-group-item p-0 mt-3' key={i}>
                            <p className='m-0'>{c}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Comment