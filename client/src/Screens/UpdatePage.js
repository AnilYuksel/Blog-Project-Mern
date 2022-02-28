import React from 'react'
import UpdateEntry from '../Components/UpdateEntry'
import { useParams } from "react-router-dom"
import NavigationUp from '../Components/NavigationUp'

const UpdateScreen = () => {

  const { id } = useParams()

  return (

    <div id='update-page'>
      <NavigationUp></NavigationUp>
      <div className='container w-50'>
        <UpdateEntry id={id}></UpdateEntry>
      </div>
    </div>
  )
}

export default UpdateScreen