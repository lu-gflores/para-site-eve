import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { Row, SPAN_1_OF_2 } from '../styles'
import Cover from '../img/PE1.png'
import introImg from '../img/intro.jpg'
import eve1 from '../img/eve1.jpg'
import eve2 from '../img/eve2.jpg'

const headLine = 'Experience the classic horror RPG'
const subtitleLine = 'Experience the duology of Aya Brea who possesses abnormal abilities due to changes in her mitochondria.'


const IntroSection = () => {
    return (
        <>
            <StyledIntro>
                <Row>
                    <InView threshold={0.25} triggerOnce>
                        {({ ref, inView }) => (
                            <StyledContext>
                                <motion.h2 ref={ref} variants={introSentence} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`}>
                                    {headLine.split('').map((char, idx) => {
                                        return (
                                            <motion.span key={char + "-" + idx} variants={letter}>{char}</motion.span>
                                        )
                                    })}
                                </motion.h2>
                                <motion.p ref={ref} variants={introSentence} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`}>
                                    {subtitleLine.split('').map((char, idx) => {
                                        return (
                                            <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                        )
                                    })}
                                </motion.p>

                                <StyledIntroImage ref={ref} initial='hidden' transition={{ duration: 0.6 }} animate={`${inView ? 'visible' : 'hidden'}`} variants={introImageVar} ></StyledIntroImage>

                            </StyledContext>
                        )}
                    </InView>
                </Row>
                <Row>
                    <h2>Background</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_2>
                        <p>Released in 1998 on the original Playstation, <em>Parasite Eve</em> was the first M-Rated game released by Squaresoft (now known as Square Enix). It is an American biological horror themed turn-based RPG and serves as a detached sequel to the novel written by Hideaki Sena, although it is not necessary to read nor watch its film adaptation and instead serves as a backstory of the similar incident in Japan.
                            Nearly 1 million copies were sold in Japan in the first half of 1998 and had shipped over 1.94 million copies as of Februrary 2004.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2>
                        <StyledPortrait src={Cover} />
                    </SPAN_1_OF_2>
                </Row>
            </StyledIntro>
            <StyledDuo>
                <Row>
                    <Row>
                        <h2>Parasite Eve I & Parasite Eve II</h2>
                    </Row>
                    <InView threshold={0.15} triggerOnce>
                        {({ ref, inView }) => (
                            <Row>
                                <BoxImg>
                                    <motion.img ref={ref}
                                        initial='hidden'
                                        transition={{ duration: 0.6 }}
                                        animate={`${inView ? 'visible' : 'hidden'}`}
                                        variants={introImageVar}
                                        whileTap={{ scale: 0.8 }}
                                        src={eve1}
                                        alt='cutscene' />
                                    <h3>Parasite Eve I</h3>
                                    <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                                        In 1997, NYPD officer Aya Brea attempts to stop Eve, a mysterious woman who plans to eradicate humanity through spontaenous combustion.
                                    </motion.p>
                                </BoxImg>
                                <BoxImg>
                                    <motion.img ref={ref}
                                        initial='hidden'
                                        transition={{ duration: 0.6 }}
                                        animate={`${inView ? 'visible' : 'hidden'}`}
                                        variants={introImageVar}
                                        whileTap={{ scale: 0.8 }}
                                        src={eve2}
                                        alt='cutscene' />
                                    <h3>Parasite Eve II</h3>
                                    <motion.p animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                                        Three years after the events of <em>Parasite Eve I</em>, Aya is pulled into another adventure where enemies she previously encountered are reportedly sighted in the American Southwest.
                                    </motion.p>
                                </BoxImg>
                            </Row>
                        )}
                    </InView>
                </Row>
            </StyledDuo>
        </>
    )
}
const introSentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.03,
        },
    },
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
}
const introImageVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}


const StyledContext = styled.div`
    margin-bottom: 20px;
    p {
        text-align: center;
    }
`
const StyledIntroImage = styled(motion.div)`
    margin: 1.9rem 0 1.5rem 0; 
    background-image: url(${introImg});
    width: 100%;
    height: 55vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #fff;
    box-shadow: 10px 10px 10px #000;
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
    /* background: linear-gradient(171deg, rgba(187,190,187,1) 17%, rgba(104,170,157,0.9612219887955182) 54%, rgba(213,219,215,1) 86%); */
    background: #C9D6DF;
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
    box-shadow: 10px 10px 10px #000;
    padding: 5px;
`
const BoxImg = styled(SPAN_1_OF_2)`
    padding: 1%;
    img {
        width: 100%;
        height: 350px;
        border-radius: 20px;
        margin-bottom: 16px;
        box-shadow: 10px 10px 10px #000;
}
`
export default IntroSection
