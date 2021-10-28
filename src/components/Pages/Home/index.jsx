import React from 'react'
import logo from '../../../assets/imgs/logo.png'
import './Home.css'
export const Home = () => {
    return (
        <div>
<header className={'head-home'}>
    <img className='logo-inst' src={logo} alt=""/>
    <div>
        <input type="text" placeholder={'Search...'}/>
    </div>

</header>
        </div>
    )
}