import {getToken} from "../handler/token.handler.js"
import axios from "axios"

const axiosCall = async (url) => {
    const opts = {
        url,
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    let response = {};
    await axios(opts)
        .then(res => {
            response = res.data;
        })
        .catch(err => {
            console.log(err);
        })
    return response;
}

const getData = async ({url,page}) => {
    if(!page) page = 1;
    let res = {};
    const uri = `${process.env.REACT_APP_SERVER_URL}/api/${url}?page=${page}`;
    await axiosCall(uri)
        .then(data => {
            res = data;
        })
        .catch(err => {
            console.log(err);
        })
    return res;
}

export {getData}