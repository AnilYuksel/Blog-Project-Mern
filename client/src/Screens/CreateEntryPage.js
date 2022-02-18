import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import CreateForm from "../Components/CreateForm"


const CreateEntryPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className='container w-50'>
        <CreateForm></CreateForm>
      </div>
      <Footer></Footer>
    </>

  )
}

export default CreateEntryPage