import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Row, Col } from '../styles'
import logo from '../img/logo.png'

const Nav = () => {
    // const [expand, setExpand] = useState(false)

    // const handleToggle = e => {

    // }

    return (
        <nav>
            <StyledNav>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Story</Link></li>
                <li><Link to='/'>Cast</Link></li>
                <li><Link to='/'>Gameplay</Link></li>
            </StyledNav>
        </nav>
    )
}

const StyledNav = styled.ul`
    float:right;
    list-style: none;
    margin-top: 55px;
    margin-right: 2rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
    li{
        display: inline;
        margin-left: 40px;
    }
    a:link, a:visited {
        color: white;
        text-decoration: none;
        padding: 8px 0;
        letter-spacing: 2px;
        font-size: 90%;
    }
    li a:hover, li:active {
        border-bottom: 2px solid rgb(202, 155, 155)
    }
`


export default Nav

