import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(props){

    return(
        <header>
            <nav>
            {/* <nav> will change into Links once completed */}
                <a href="#">Home</a>
                <a>Log In</a>
                <a>Sign Up</a>                             
            </nav>
        </header>
    )

}