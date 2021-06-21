import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { Row, SPAN_1_OF_3 } from '../styles'
import background from '../img/critics-background.jpg'

const title = 'Critics'

const Critics = () => {
    return (
        <StyledCritics>
            <InView threshold={0.25} triggerOnce>
                {({ ref, inView }) => (
                    <Row>
                        <motion.h2 ref={ref} variants={headLine} animate={`${inView ? 'visible' : 'hidden'}`}>
                            {title.split('').map((char, idx) => {
                                return (
                                    <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                )
                            })}
                        </motion.h2>
                    </Row>
                )}
            </InView>

            <InView threshold={0.25} triggerOnce>
                {({ ref, inView }) => (
                    <Row>
                        <SPAN_1_OF_3>
                            <StyledText>
                                <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                                    "Parasite Eve should be lauded for its presentation, which, in a testament to Square's work, is second to none. Everything from its
                                    character design to its pre-rendered backgrounds to its CG cinematics are utterly breathtaking."
                                </motion.p>
                            </StyledText>
                            <br />
                            <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>- Randy Nelson, IGN</motion.p>
                        </SPAN_1_OF_3>
                        <SPAN_1_OF_3>
                            <StyledText>
                                <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                                    "The music is amazing. Legendary composer Yoko Shimomura managed to blend opera with fast-paced techno and made it somehow scary and really cool. It gets your heart
                                    racing when there's action happening on screen or when a somber emotional moment happening. "
                                </motion.p>
                            </StyledText>
                            <br />
                            <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>-Suzi, The Sphere Hunter</motion.p>
                        </SPAN_1_OF_3>
                        <SPAN_1_OF_3>
                            <StyledText>
                                <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                                    "The series is amazing, it makes me sad that Square has forgotton about the franchise. I would pay lots of money for a ground-up remake or an actual third game
                                    in the series."
                                </motion.p>
                            </StyledText>
                            <br />
                            <motion.p ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>- Jerry Dobracki, BagoGames</motion.p>
                        </SPAN_1_OF_3>
                    </Row>
                )}
            </InView>

        </StyledCritics>
    )
}

const headLine = {
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

const StyledCritics = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
`
const StyledText = styled.div`
    line-height: 1.5;
    margin-top: 13px;
    p {
        font-weight: 100;
        font-style: italic;
    }

`
export default Critics
