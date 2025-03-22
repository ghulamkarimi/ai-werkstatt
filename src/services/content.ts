import { TContent } from "@/interface";
import axios from "axios";

const contentUrl = "http://localhost:7030/api/content"


export const createContent = (content:TContent)=>{
    const url = `${contentUrl}/create`
    return axios.post(url,content)
}

export const getAllContent = ()=>{
    const url = `${contentUrl}/get-content`
    return axios.get(url)
}