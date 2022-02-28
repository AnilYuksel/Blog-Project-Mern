import React from 'react'
import Navigation from '../Components/Navigation'
import EntryDetail from '../Components/EntryDetail'
import { useLocation } from "react-router-dom"

function EntryDetailsPage() {

    const location = useLocation()
    const { entry } = location.state

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-3' id="left-aside">
                    <Navigation></Navigation>
                </div>
                <div className='col-9' id="entry-detail">
                    <EntryDetail entry={entry}></EntryDetail>
                </div>

            </div>
        </div>


    )
}

export default EntryDetailsPage