import React,{useState,useEffect} from 'react'
import {fetchEntry} from "../axios/axios"
import ReactFileBase64 from "react-file-base64"
import { Form, Button } from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import { updateEntry } from '../redux/actions/entryActions'
import { useDispatch } from 'react-redux'


const UpdateEntry = ({id}) => {

  const dispatch = useDispatch()

    const [entryData, setEntryData] = useState({
        title: "",
        content: "",
        creator: "",
        image: ""
      })

      useEffect(()=>{
        const getEnt = async () => {
            const {data} = await fetchEntry(id)
            setEntryData(data)
        }
        getEnt()
      },[id])

    const navigate = useNavigate()
  return (
    <>
        <Form onSubmit={(e) => {
        e.preventDefault()
        dispatch(updateEntry(id,entryData))
        navigate("/")
      }}>
        <Form.Group className='mt-3'>
          <h1>Edit an Entry</h1>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Baslik</Form.Label>
          <Form.Control name="title" value={entryData.title} type="text" onChange={(e)=>{setEntryData({...entryData,title:e.target.value})}}></Form.Control>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Yazar</Form.Label>
          <Form.Control name="creator" value={entryData.creator} type="text" onChange={(e)=>{setEntryData({...entryData,creator:e.target.value})}}></Form.Control>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Form.Label>Entry</Form.Label>
          <Form.Control name="content" value={entryData.content} type="text"  as="textarea" rows={3} onChange={(e)=>{setEntryData({...entryData,content:e.target.value})}}></Form.Control>
        </Form.Group>
        <Form.Group className='mt-3'>
          <ReactFileBase64 type="file" value={entryData.image} multiple={false} onDone={({base64}) => {setEntryData({...entryData,image:base64})}}></ReactFileBase64>
        </Form.Group>
        <Button className='w-100 mt-3' type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default UpdateEntry