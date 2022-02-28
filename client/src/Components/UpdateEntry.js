import React, { useState, useEffect } from 'react'
import { fetchEntry } from "../axios/axios"
import ReactFileBase64 from "react-file-base64"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { updateEntry } from '../redux/actions/entryActions'
import { useDispatch } from 'react-redux'



const UpdateEntry = ({ id }) => {

  const dispatch = useDispatch()

  const [entryData, setEntryData] = useState({
    title: "",
    content: "",
    image: ""
  })

  useEffect(() => {
    const getEnt = async () => {
      const { data } = await fetchEntry(id)
      setEntryData(data)
    }
    getEnt()
  }, [id])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(updateEntry(id, entryData))
    await navigate("/")
  }

  return (
    <>
      <Form id='form' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mt-5'>
          <h1 >EDIT YOUR ZINGO</h1>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label >ZINGO TITLE</Form.Label>
          <Form.Control name="title" value={entryData.title} type="text" onChange={(e) => { setEntryData({ ...entryData, title: e.target.value }) }}></Form.Control>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label >ZINGO</Form.Label>
          <Form.Control name="content" value={entryData.content} type="text" as="textarea" rows={5} onChange={(e) => { setEntryData({ ...entryData, content: e.target.value }) }}></Form.Control>
        </Form.Group>
        <Form.Group className='mt-3' id='file-selector'>
          <ReactFileBase64 type="file" value={entryData.image} multiple={false} onDone={({ base64 }) => { setEntryData({ ...entryData, image: base64 }) }}></ReactFileBase64>
        </Form.Group>
        <Button className='w-100 mt-3' type='submit'>UPDATE</Button>
      </Form>
    </>
  )
}

export default UpdateEntry