import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2 } from '../styles'

const Footer = () => {
    return (
        <StyledFooter>
            <Row>
                <SPAN_1_OF_2>
                    <p>Sample Text</p>
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

export default Footer
