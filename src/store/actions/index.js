export const LOGIN = 'LOGIN'
export const LOG_OUT = 'LOG_OUT'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'
export const ADD_POST = 'ADD_POST'


export const login = (user) => ({
    type:LOGIN,
    payload:user
})

export const log_out = () => ({
    type:LOG_OUT,
   
})

export const change_token = (token) => ({
    type:CHANGE_TOKEN,
    payload:token
})

export const add_post = (user) => ({
    type:ADD_POST,
})
