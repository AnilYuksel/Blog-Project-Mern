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
                <div className='col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2' id="left-aside">
                    <Navigation></Navigation>
                </div>
                <div className='col-xl-9 col-lg-9 col-md-10 col-sm-10 col-10' id="entry-detail">
                    <EntryDetail entry={entry}></EntryDetail>
                </div>

            </div>
        </div>


    )
}

export default EntryDetailsPage