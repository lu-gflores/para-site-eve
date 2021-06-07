import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Row, Col } from '../styles'
import logo from '../img/logo.png'

const Nav = () => {
    const { pathname } = useLocation()
    // const [expand, setExpand] = useState(false)

    // const handleToggle = e => {

    // }

    return (
        <StyledNavBar>
            <div>
                <Link className="logo-img" to='/'>
                    <img src={logo} alt='Parasite Eve Home' />
                </Link>
            </div>
            <ul>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/story'>Story</Link></li>
                <li><Link to='/cast'>Cast</Link></li>
                <li><Link to='/gameplay'>Gameplay</Link></li>
            </ul>
        </StyledNavBar>
        // <nav>
        //     <StyledNav>
        //         <li><Link to='/'>About</Link></li>
        //         <li><Link to='/story'>Story</Link></li>
        //         <li><Link to='/cast'>Cast</Link></li>
        //         <li><Link to='/gameplay'>Gameplay</Link></li>
        //     </StyledNav>
        // </nav>
    )
}

const StyledNavBar = styled.nav`
    min-height: 8vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    background:#282828;
    z-index: 10;
    a {
        color: #fff;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    .logo-img img {
        background-color: #fff;
        border-radius: 15px;
        width: 5rem;
        height: 4.5rem;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        .logo-img {
            display: inline-block;
            margin: 1.8rem;
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
`

// const StyledNav = styled.ul`
//     float:right;
//     list-style: none;
//     margin-top: 55px;
//     margin-right: 2rem;
//     background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
//     li{
//         display: inline;
//         margin-left: 40px;
//     }
//     a:link, a:visited {
//         color: white;
//         text-decoration: none;
//         padding: 8px 0;
//         letter-spacing: 2px;
//         font-size: 90%;
//     }
//     li a:hover, li:active {
//         border-bottom: 2px solid rgb(202, 155, 155)
//     }
// `


export default Nav

