import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Row, Col } from '../styles'
const Nav = () => {
    return (
        <nav>
            <Row>
                <StyledNav>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Story</Link></li>
                    <li><Link to='/'>Cast</Link></li>
                </StyledNav>
            </Row>
        </nav>
    )
}

const StyledNav = styled.ul`
    float:right;
    list-style: none;
    margin-top: 55px;
    background-color: coral;
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

