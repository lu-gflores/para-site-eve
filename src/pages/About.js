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
                    <h2>Premise</h2>
                </Row>
                <Row>
                    <Col>
                        <SPAN_1_OF_2>
                            <p>Released in 1998 on the original Playstation, <em>Parasite Eve</em> was the first M-Rated game released by Squaresoft (now known as Square Enix). It is an American biological horror themed turn-based RPG.
                        It serves as a detached sequel to the novel written by Hideaki Sena, although it is not necessary to read nor watch its film adaptation and instead serves as a backstory of the similar incident in Japan.</p>
                        </SPAN_1_OF_2>
                    </Col>
                    <Col>
                        <SPAN_1_OF_2>
                            <StyledPortrait src={Cover} />
                        </SPAN_1_OF_2>
                    </Col>
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

`
const StyledPortrait = styled.img`
    border-radius: 8px;
    width: 80%;
    height: auto;
    border: 1px solid #fff;
    padding: 2px;
`
export default About
