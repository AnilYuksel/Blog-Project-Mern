import React from 'react'
import defaultImage from "./images/default.jpg"
import Comment from './Comment'

function EntryDetail({ entry }) {
  return (
    <div className='container'>
      <div className='d-flex flex-column align-items-center'>
        <div className='mt-5'>
          <h1 className='text-center' id='detail-header'>{entry.title}</h1>
        </div>
        <div className='mt-3' id='detail-image-div'>
          {
            entry.image ? (<img src={entry.image} id="detail-image" alt=""></img>) : (<img src={defaultImage} id="detail-image" alt=""></img>)
          }
        </div>
        <div>
          <hr className='divider'></hr>
        </div>
        <div className='mt-3' id='detail-paragraph'>
          <p>{entry.content}</p>
        </div>
      </div>
      <div>
        <Comment entry={entry}></Comment>
      </div>

    </div>
  )
}

export default EntryDetail