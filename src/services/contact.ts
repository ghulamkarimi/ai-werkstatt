import { TContactFormData, TContent } from "@/interface";
import axios from "axios";

const contentUrl = "http://localhost:7030/contact/api/send"


export const sendFormData = async(contactForm:TContactFormData)=>{
    const url = `${contentUrl}`
    return axios.post(url,contactForm)
}