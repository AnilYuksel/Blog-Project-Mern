import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../actions/actionConstants"

const entryReducer = (entries = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...entries, action.payload]
        case DELETE:
            return entries.filter((entry) => entry._id !== action.payload)
        case UPDATE:
            return entries.map((entry)=> entry._id === action.payload._id ? action.payload :entry)      
        default:
            return entries

    }
}

export default entryReducer