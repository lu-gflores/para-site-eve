import React from 'react'
import styled from 'styled-components'
import heroBanner from '../img/hero-header.jpg'

const About = () => {
    return (
        <div>
            <StyledHeader>
            </StyledHeader>
            <h1>Premise</h1>
        </div>
    )
}
const StyledHeader = styled.header`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${heroBanner});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 90vh;
`

export default About
