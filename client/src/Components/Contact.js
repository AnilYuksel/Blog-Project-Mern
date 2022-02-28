import React from 'react'
import { Form, Button } from "react-bootstrap"
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom"

function Contact() {

  const navigate = useNavigate()

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_po4e73c', e.target, 'user_lmZkGWqEn4sL8hogGB9gh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    await navigate("/")
  }

  return (
    <>
      <div className='container' id='auth-page-container'>
        <Form id='form' onSubmit={sendEmail}>
          <Form.Group className='mt-5'>
            <h1 className='text-center'>Get In Touch</h1>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control name="fullname" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control name="email" type="email"></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Subject</Form.Label>
            <Form.Control name="subject" type="text"></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" type="text" as="textarea" rows={3} ></Form.Control>
          </Form.Group>
          <Button className='w-100 mt-3' type='submit'>Submit</Button>
        </Form>
      </div>
    </>

  )
}

export default Contact