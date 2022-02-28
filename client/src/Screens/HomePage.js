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
                <div className='col-3' id="left-aside">
                    <Navigation search={search}></Navigation>
                </div>
                <div className='col-9' id="entries">

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