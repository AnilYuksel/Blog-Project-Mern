import React from 'react'
import NavigationUp from '../Components/NavigationUp'
import CreateForm from "../Components/CreateForm"


const CreateEntryPage = () => {
  return (
    <>
      <div id='create-page'>
        <NavigationUp></NavigationUp>
        <div className='container w-50'>
          <CreateForm></CreateForm>
        </div>
      </div>
    </>

  )
}

export default CreateEntryPage