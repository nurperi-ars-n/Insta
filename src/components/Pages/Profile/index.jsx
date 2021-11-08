import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { log_out } from '../../../store/actions'

export const Profile = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const isAuth = useSelector((state) => state.isAuth)
    // console.log(state);

    // function log_out_user() {
    //     dispatch(log_out)
       
    // }
    // console.log(state);

  

    return <div>

        <button onClick={() => dispatch(log_out())}>LOG OUT</button>
    </div>
}