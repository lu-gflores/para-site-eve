import React from 'react'
import styled from 'styled-components'
import heroBanner from '../img/hero-header.jpg'
import IntroSection from '../components/IntroSection'
const About = () => {
    return (
        <div>
            <StyledHeader>
            </StyledHeader>
            <IntroSection />
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
const StyledHeroText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
`

export default About
