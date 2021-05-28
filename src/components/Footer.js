import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2 } from '../styles'

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
                    <p>Sample Text</p>
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
    p, a {
        margin-top: 30px;
        text-align: center;
    }
`
const StyledLinks = styled.a`
    margin: 0 1.5rem 0 1.5rem;
    color: white;
    :hover {
        color: grey;
    }
    i {
        padding: 0 10px;
        font-size: 2.5rem;
    }
`

export default Footer
