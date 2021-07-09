import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { Row, SPAN_1_OF_3, SPAN_1_OF_2 } from '../styles'
import staffbgImage from '../img/Parasite_eve_m_001.jpg'

const Staff = () => {
    return (
        <>
            <StyledStaffSection>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <h2>Parasite Eve I Staff</h2>
                        </Row>
                    )}
                </InView>

                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <SPAN_1_OF_3>
                                <h1>Director</h1>
                                <h3>Takashi Tokita</h3>
                            </SPAN_1_OF_3>
                            <SPAN_1_OF_3>
                                <h1>Producer</h1>
                                <h3>Hironbu Sakaguchi</h3>
                            </SPAN_1_OF_3>
                            <SPAN_1_OF_3>
                                <h1>Programmer</h1>
                                <h3>Hiroshi Kawai</h3>
                            </SPAN_1_OF_3>
                        </Row>
                    )}
                </InView>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <SPAN_1_OF_2>
                                <h1>Artist</h1>
                                <h3>Tetsuya Nomura</h3>
                            </SPAN_1_OF_2>
                            <SPAN_1_OF_2>
                                <h1>Composer</h1>
                                <h3>Yoko Shimomura</h3>
                            </SPAN_1_OF_2>
                        </Row>
                    )}
                </InView>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <h2>Parasite Eve II Staff</h2>
                        </Row>
                    )}
                </InView>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <SPAN_1_OF_3>
                                <h1>Director</h1>
                                <h3>Kenichi Iwao</h3>
                            </SPAN_1_OF_3>
                            <SPAN_1_OF_3>
                                <h1>Producer</h1>
                                <h3>Yusuke Hirata</h3>
                            </SPAN_1_OF_3>
                            <SPAN_1_OF_3>
                                <h1>Writer</h1>
                                <h3>Kenichi Iwao</h3>
                            </SPAN_1_OF_3>
                        </Row>
                    )}
                </InView>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <SPAN_1_OF_2>
                                <h1>Artists</h1>
                                <h3>Tetsuya Nomura</h3>
                                <h3>Fumi Nakashima</h3>
                            </SPAN_1_OF_2>
                            <SPAN_1_OF_2>
                                <h1>Composer</h1>
                                <h3>Naoshi Mizuta</h3>
                            </SPAN_1_OF_2>
                        </Row>
                    )}
                </InView>
            </StyledStaffSection>
        </>
    )
}

const StyledStaffSection = styled.section`
    line-height: 1.8;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${staffbgImage}) ;
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: contain;
    color: #fff;
    h1 {
        text-align: center;
    }
`
// const StyledStaffSection2 = styled.section`
//     line-height: 1.8;
//     background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
//     background-position: center center;
//     background-attachment: fixed;
//     background-size: cover;
//     h1 {
//         text-align: center;
//     }
// `
export default Staff
