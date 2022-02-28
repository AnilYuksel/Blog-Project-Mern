import { AUTH, SIGNUP_FAIL, LOGOUT, LOGOUT_FAIL, SIGNIN_FAIL, REFRESH_ACCESS_TOKEN_SUCCESS, REFRESH_ACCESS_TOKEN_FAIL } from "../actions/actionConstants"
import * as axios from "../../axios/axios"


export const signUp = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.signUp(formData)

        dispatch({ type: AUTH, payload: data })
    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const signIn = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.signIn(formData)

        dispatch({ type: AUTH, payload: data })
    } catch (error) {
        dispatch({
            type: SIGNIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}

export const logOut = (id) => async (dispatch) => {
    try {
        const { message } = await axios.logOut(id)

        dispatch({ type: LOGOUT, payload: message })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getAccessToken = (id) => async (dispatch) => {
    try {
        const { data } = await axios.refreshAccessToken(id)
        dispatch({ type: REFRESH_ACCESS_TOKEN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: REFRESH_ACCESS_TOKEN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}