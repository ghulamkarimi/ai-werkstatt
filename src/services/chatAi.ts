import axios from "axios"

const chatAiUrl = "http://localhost:7030/api"



export const getChatAi = ()=>{
    const url = `${chatAiUrl}/get-generate-text`
    return axios.get(url)
}