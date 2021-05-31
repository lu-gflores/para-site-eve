import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2, SPAN_2_OF_2 } from '../styles'
import Cover from '../img/PE1.png'
import introImg from '../img/intro.jpg'
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
                        <StyledIntroImage></StyledIntroImage>
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
            <StyledDuo>
                <Row>
                    <Row>
                        <h2>Parasite Eve I & Parasite Eve II</h2>
                    </Row>
                    <Row>
                        <BoxImg>
                            <img src={eve1} alt='cutscene' />
                            <h3>Parasite Eve I</h3>
                            <p>In 1997, NYPD officer Aya Brea attemps to stop Eve, a mysterious woman who plans to eradicate humanity through spontaenous combustion.</p>
                        </BoxImg>
                        <BoxImg>
                            <img src={eve2} alt='cutscene' />
                            <h3>Parasite Eve II</h3>
                            <p>Three years after the events of <em>Parasite Eve I</em>, Aya is pulled into another adventure where enemies she previously encountered are in the American Southwest.</p>
                        </BoxImg>

                    </Row>
                </Row>
            </StyledDuo>
        </>
    )
}

const StyledContext = styled.div`
    margin-bottom: 20px;
    p {
        text-align: center;
    }
`
const StyledIntroImage = styled.div`
    margin: 1.9rem 0 1.5rem 0; 
    background-image: url(${introImg});
    width: 100%;
    height: 55vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 25px;
`
const StyledIntro = styled.section`
    line-height: 1.5;
    h2,h3 {
        font-family: 'Century Gothic', sans-serif;
    }
`
const StyledDuo = styled.section`
    line-height: 1.5;
    background: linear-gradient(171deg, rgba(187,190,187,1) 17%, rgba(104,170,157,0.9612219887955182) 54%, rgba(213,219,215,1) 86%);
    color: #000;
    h2,h3 {
        font-family: 'Century Gothic', sans-serif;
    }
    `
const StyledPortrait = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 380px;
    border: 1px solid #fff;
    padding: 5px;
`
const BoxImg = styled(SPAN_1_OF_2)`
    padding: 1%;
    img {
        width: 100%;
        height: 350px;
        border-radius: 20px;
        margin-bottom: 16px;
}
`
export default IntroSection
