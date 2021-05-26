import React from 'react'
import styled from 'styled-components'
import heroBanner from '../img/hero-header.jpg'
import { Row, Col, SPAN_1_OF_2 } from '../styles'
import Cover from '../img/PE1.png'

const About = () => {
    return (
        <div>
            <StyledHeader>
            </StyledHeader>
            <StyledSection>
                <Row>
                    <h2 data-aos='fade-up'>Premise</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_2>
                        <p>Released in 1998 on the original Playstation, <em>Parasite Eve</em> was the first M-Rated game released by Squaresoft (now known as Square Enix). It is an American biological horror themed turn-based RPG.
                        It serves as a detached sequel to the novel written by Hideaki Sena, although it is not necessary to read nor watch its film adaptation and instead serves as a backstory of the similar incident in Japan.
                        Nearly 1 million copies were sold in Japan in the first half of 1998 and had shipped over 1.94 million copies as of Februrary 2004.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2>
                        <StyledPortrait src={Cover} />
                    </SPAN_1_OF_2>
                </Row>
            </StyledSection>
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
const StyledSection = styled.section`
    line-height: 1.5;
`
const StyledPortrait = styled.img`
    border-radius: 8px;
    max-width: 100%;
    max-height: auto;
    border: 1px solid #fff;
    padding: 5px;
`
export default About
