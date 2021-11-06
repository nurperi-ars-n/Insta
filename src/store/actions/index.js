export const LOGIN = 'LOGIN'
export const LOG_OUT = 'LOG_OUT'

export const login = (user) => ({
    type:LOGIN,
    payload:user
})

export const log_out = () => ({
    type:LOG_OUT,
   
})