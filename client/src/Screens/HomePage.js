import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'
import Entry from "../Components/Entry"
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntries } from '../redux/actions/entryActions'

const HomePage = () => {

    const dispatch = useDispatch()
    const entries = useSelector((state) => state.entries)

    const [searchedEntry, setSearchedEntry] = useState('')


    const search = (event) => {
        setSearchedEntry(event.target.value)
    }

    let filteredEntries = entries.filter((entry) => {
        return entry.title.toLowerCase().indexOf(searchedEntry.toLowerCase()) !== -1
    })

    useEffect(() => {
        if (!entries[0]) {
            dispatch(fetchEntries())
        }

    }, [dispatch, entries])


    return (
        <div className='container' id='home-container'>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2' id="left-aside">
                    <Navigation search={search}></Navigation>
                </div>
                <div className='col-xl-9 col-lg-9 col-md-10 col-sm-10 col-10' id="entries">

                    {filteredEntries.map((entry) => (
                        <div key={entry._id}>
                            <Entry entry={entry}></Entry>
                            <hr className='divider'></hr></div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage