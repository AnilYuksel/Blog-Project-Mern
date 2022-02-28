import { FETCH_ALL, CREATE, DELETE, UPDATE, CREATE_COMMENT } from "../actions/actionConstants"
import * as axios from "../../axios/axios"

export const fetchEntries = () => async (dispatch) => {
    try {
        const { data } = await axios.fetchEntries()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createEntry = (entry) => async (dispatch) => {
    try {
        const { data } = await axios.createEntry(entry)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteEntry = (id) => async (dispatch) => {
    try {
        await axios.deleteEntry(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const updateEntry = (id, updateEntry) => async (dispatch) => {
    try {
        const { data } = await axios.updateEntry(id, updateEntry)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {

    }
}

export const createComment = (id, comment) => async (dispatch) => {
    try {
        const { data } = await axios.createComment(id, comment)
        dispatch({ type: CREATE_COMMENT, payload: data })
        return data.comments
    } catch (error) {
        console.log(error)
    }
}