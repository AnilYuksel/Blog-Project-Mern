import axios from "axios"


const API = axios.create({
  baseURL: "https://zamazingo.herokuapp.com/",
  withCredentials: true
})

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
  }
  return req
})


export const fetchEntries = async () => {
  return await API.get("/entry")
}

export const createEntry = async (newEntry) => {
  return await API.post('/entry', newEntry)
}

export const deleteEntry = async (id) => {
  return await API.delete(`/entry/${id}`)
}

export const updateEntry = async (id, updatedEntry) => {
  return await API.put(`/entry/${id}`, updatedEntry)
}

export const fetchEntry = async (id) => {
  return await API.get(`/entry/${id}`)
}

export const signUp = async (formData) => {
  return await API.post("/signup", formData)
}

export const signIn = async (formData) => {
  return await API.post("/signin", formData)
}

export const logOut = async (id) => {
  return await API.get(`/logout/${id}`)
}

export const refreshAccessToken = async (userId) => {
  return await API.get(`/refresh/${userId}`)
}

export const createComment = async (id, comment) => {
  return await API.post(`/entry/${id}`, { comment })
}


