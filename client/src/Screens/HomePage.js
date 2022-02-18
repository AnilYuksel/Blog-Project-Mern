import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import { Spinner, Row, Col } from "react-bootstrap"
import Entry from "../Components/Entry"
import { useDispatch,useSelector } from 'react-redux'
import { fetchEntries } from '../redux/actions/entryActions'

const HomePage = () => {

    const dispatch =useDispatch()
    const entries = useSelector((state)=>state.entries)
    useEffect(() => {
        if(!entries[0]){
            dispatch(fetchEntries())
        }
    }, [dispatch,entries])
    
    return (
        <div>
            <Navigation></Navigation>
            <div>
                {!entries.length ? <Spinner animation='border' /> :
                    <Row>
                        {entries.map((entry) => (
                            <Col sm={12} md={6} lg={4} xl={3} className="m-auto" key={entry._id}>
                                <Entry entry={entry}></Entry>
                            </Col>
                        ))}
                    </Row>}
            </div>
            <Footer></Footer>

        </div>
    )
}

export default HomePage