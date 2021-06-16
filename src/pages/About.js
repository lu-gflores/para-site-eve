import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_2_OF_2 } from '../styles'
import heroBanner from '../img/hero-header.jpg'

import ScrollTop from '../components/ScrollTop'
import IntroSection from '../components/IntroSection'
import Critics from '../components/Critics'
import Staff from '../components/Staff'

const About = () => {
    return (
        <div>
            <StyledHeader>
                <Row>
                    <SPAN_2_OF_2>
                        <img src={heroBanner} alt='hero banner of parasite eve' />
                    </SPAN_2_OF_2>
                </Row>
            </StyledHeader>
            <IntroSection />
            <Critics />
            <Staff />
            <ScrollTop />
        </div>
    )
}
const StyledHeader = styled.section`
   background-color: #f4f4f4;
   color: #000;
   img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: auto;
        border-radius: 10px;
        opacity: 0.75;
        box-shadow: 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);;
    }
`
export default About
