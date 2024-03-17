import axios from "axios"
const signinHandler = async (username, password) => {
    const opts = {
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/auth/signin`,
        "Content-Type": "application/json",
        data: {
            username,
            password
        }
    }
    var response = {};
    await axios(opts)
        .then(res => {
            response = {
                type: "ok",
                token: res.data.token
            }
        })
        .catch(err => {
            response = {
                type: "error",
                msg: err.response.data.msg.msg
            }
        })
    return response;
}


const signupHandler = async (username, password, confirmPassword, nickname) => {
    var response = {}
    if(password !== confirmPassword) {
        response = {
            type: "error",
            msg: "Confirm Password isn't match!"
        }
        return response;
    }
    const opts = {
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/auth/signup`,
        data: {
            username,
            password,
            nickname
        }
    }
    await axios(opts)
        .then(res => {
            response = {
                type: "ok",
                token: res.data.token
            }
        })
        .catch(err => {
            console.log(err);
            response = {
                type: "error",
                msg: err.response.data.msg
            }
        })
    return response;
}

export {signinHandler,signupHandler}