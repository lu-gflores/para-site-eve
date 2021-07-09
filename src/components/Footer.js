import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2, SPAN_1_OF_4 } from '../styles'
import sonyLogo from '../img/sony.png'
import ps1Logo from '../img/Playstation_logo.svg'
import squaresoftLogo from '../img/Squaresoft_Logo.svg'

const Footer = () => {
    return (
        <StyledFooter>
            <Row>
                <SPAN_1_OF_2>
                    <StyledLinks href='https://www.linkedin.com/in/george-flores-a84b24157/' target='_blank' rel='noreferrer'>
                        <i className="fab fa-linkedin"></i>
                    </StyledLinks>
                    <StyledLinks href='https://github.com/lu-gflores' target='_blank' rel='noreferrer'>
                        <i className="fab fa-github"></i>
                    </StyledLinks>
                    <StyledLinks href='https://twitter.com/lu_gflores' target='_blank' rel='noreferrer'>
                        <i className="fab fa-twitter"></i>
                    </StyledLinks>
                </SPAN_1_OF_2>
                <SPAN_1_OF_2>
                    <StyledLogos>
                        <img src={squaresoftLogo} alt='Squaresoft' />
                        <img src={ps1Logo} alt='Playstation 1' />
                        <img src={sonyLogo} alt='Sony Computer Entertainment' />
                    </StyledLogos>
                </SPAN_1_OF_2>
            </Row>
            <Row>
                <p>Copyright &copy;2021 Created by <a href='https://github.com/lu-gflores' target='_blank' rel='noreferrer'>George Flores</a></p>
            </Row>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 50px;
    font-size: 80%;
    background: #1E2022;
    color: #fff;
    a{
        text-decoration: none;
        color: #fff;
    }
    p, a {
        margin-top: 30px;
        text-align: center;
    }
`
const StyledLinks = styled.a`
    margin: 0 1.5rem 0 1.5rem;
    color: white;
    :hover {
        color: #52616B;
    }
    i {
        padding: 0 10px;
        font-size: 2.5rem;
    }
`
const StyledLogos = styled.div`
    img{
        height: 65px;
        width: 120px;
    }
`

export default Footer
