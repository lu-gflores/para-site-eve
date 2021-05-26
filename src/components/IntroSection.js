import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2 } from '../styles'
import Cover from '../img/PE1.png'
import eve1 from '../img/eve1.jpg'
import eve2 from '../img/eve2.jpg'

const IntroSection = () => {
    return (
        <>
            <StyledIntro>
                <Row>
                    <StyledContext>
                        <h2>Experience the classic horror RPG</h2>
                        <p>Experience the duology of Aya Brea who possesses abnormal abilities due to changes in her mitochondria.</p>
                    </StyledContext>
                </Row>
                <Row>
                    <h2 data-aos='fade-up'>Background</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_2>
                        <p data-aos='fade-right'>Released in 1998 on the original Playstation, <em>Parasite Eve</em> was the first M-Rated game released by Squaresoft (now known as Square Enix). It is an American biological horror themed turn-based RPG and serves as a detached sequel to the novel written by Hideaki Sena, although it is not necessary to read nor watch its film adaptation and instead serves as a backstory of the similar incident in Japan.
                        Nearly 1 million copies were sold in Japan in the first half of 1998 and had shipped over 1.94 million copies as of Februrary 2004.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2>
                        <StyledPortrait data-aos='fade-left' src={Cover} />
                    </SPAN_1_OF_2>
                </Row>
            </StyledIntro>
            <StyledIntro>
                <Row>
                    <h2>Parasite I & Parasite II</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_2>
                        <BoxImg>
                            <img src={eve1} alt='cutscene' />

                        </BoxImg>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2>
                        <BoxImg>
                            <img src={eve2} alt='cutscene' />
                        </BoxImg>
                    </SPAN_1_OF_2>
                </Row>
            </StyledIntro>
        </>
    )
}

const StyledContext = styled.div`
    margin-bottom: 20px;
    p {
        text-align: center;
    }
`
const StyledIntro = styled.section`
    line-height: 1.5;
`
const StyledPortrait = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 380px;
    border: 1px solid #fff;
    padding: 5px;
`
const BoxImg = styled.div`
    padding: 1%;
    img {
        width: 100%;
        height: 395px;
        margin-bottom: 16px;
}
`
export default IntroSection
