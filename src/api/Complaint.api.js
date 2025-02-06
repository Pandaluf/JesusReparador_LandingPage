import axios from "axios";

const complaintApi = axios.create({
    baseURL: "http://127.0.0.1:8000/complaints/api/",
})

export const postComplaint = (complaint) => complaintApi.post("/", complaint)