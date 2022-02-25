import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="main-head-logo">
                <h1><Link to="/">i-Note</Link></h1>
            </div>
            <ul>
                <li class= "number1" ><Link to="/">Main</Link></li>
                <li class = "number2" ><Link to="/create">Create Note</Link></li>
                <li class="number3" onClick={logoutSubmit}><Link to="/">Logout</Link></li>
            </ul>
        </header>
    )
}