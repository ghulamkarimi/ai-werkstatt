import axios from "axios"



const blogUrl = "http://localhost:7030/api/blog"



export const getBlog = ()=>{
    const url = `${blogUrl}/get-blog`
    return axios.get(url)
}