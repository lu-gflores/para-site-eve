import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import { Row, SPAN_1_OF_2 } from '../styles'

import battle from '../img/Gameplay1/battle.jpg'
import map from '../img/Gameplay1/map.jpg'
import menu from '../img/Gameplay1/pe-menu.jpg'
import tuneup from '../img/Gameplay1/tune-up.png'

import shot1 from '../img/Gameplay1/pe_shot1.jpg'
import shot2 from '../img/Gameplay1/pe_shot2.jpg'
import shot3 from '../img/Gameplay1/pe_shot3.jpg'
import shot4 from '../img/Gameplay1/pe_shot4.jpg'

const PE1Gameplay = () => {
    return (
        <>
            <StyledGameSection>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <h2>Parasite Eve Gameplay</h2>
                            <p >
                                <em>
                                    "Hmph... You're the only one who seems to be fine...
                                    <br />
                                    You should be awakening soon...
                                    <br />
                                    Listen...
                                    <br />
                                    Your cells are trying to communicate...
                                    <br /> They're... calling out..."</em>
                            </p>
                        </Row>
                    )}
                </InView>

                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }}>
                            <SPAN_1_OF_2 className='box'>
                                <img src={map} alt='Map of Manhattan, New York' />
                                <motion.p ref={ref} variants={description} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`}>
                                    {'Explore Manhattan over the course of six-days in the attempt stop Eve from destroying humanity.'.split('').map((char, idx) => {
                                        return (
                                            <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                        )
                                    })}
                                </motion.p>
                            </SPAN_1_OF_2>
                            <SPAN_1_OF_2 className='box'>
                                <img src={battle} alt='Encounter' />
                                <motion.p ref={ref} variants={description} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`}>
                                    {'As you explore, encounter enemies that underwent mutation by Eve. In a turn-based combat and using the Active Time Bar, choose how to spend your action, whether to attack, use abilities, change weapons, or flee.'
                                        .split('').map((char, idx) => {
                                            return (
                                                <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                            )
                                        })}
                                </motion.p>
                            </SPAN_1_OF_2>
                        </Row>
                    )}
                </InView>
                <InView threshold={0.25} triggerOnce>
                    {({ ref, inView }) => (
                        <Row ref={ref} animate={inView ? { opacity: 1 } : { opacity: 0 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 2 }} >
                            <SPAN_1_OF_2 className='box'>
                                <img src={menu} alt='Game menu' />
                                <motion.p ref={ref} variants={description} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`}>
                                    {`Level up through battles to unlock her Parasite Energy thanks to Aya's mitochondria as well boose her various attributes. 
                                Spend Bonus Points to increase your ATB, item capacity, or weapons/armor attributes.`.split('').map((char, idx) => {
                                        return (
                                            <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                        )
                                    })}
                                </motion.p>
                            </SPAN_1_OF_2>
                            <SPAN_1_OF_2 className='box'>
                                <img src={tuneup} alt='Upgrading rifle in menu' />
                                <motion.p ref={ref} variants={description} initial='hidden' animate={`${inView ? 'visible' : 'hidden'}`} >
                                    {`As traditional survival horror goes, manage your inventory space as necessary. Whether it's upgrading, selling, or tossing wepaons and armor, make it count! Space and resources are limited!`
                                        .split('').map((char, idx) => {
                                            return (
                                                <motion.span key={char + '-' + idx} variants={letter}>{char}</motion.span>
                                            )
                                        })}
                                </motion.p>
                            </SPAN_1_OF_2>
                        </Row>
                    )}
                </InView>


            </StyledGameSection>
            <StyledImageSection>
                <StyledShowCase1 className='clearfix'>
                    <li>
                        <figure>
                            <motion.img transition={{ duration: 0.6 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} src={shot1} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <motion.img transition={{ duration: 0.6 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} src={shot2} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <motion.img transition={{ duration: 0.6 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} src={shot3} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <motion.img transition={{ duration: 0.6 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} src={shot4} alt='Screen shot 1' />
                        </figure>
                    </li>
                </StyledShowCase1>
            </StyledImageSection>
        </>
    )
}

const description = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.03
        }
    }
}

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
    }
}
const StyledGameSection = styled.section`
    line-height: 1.3;
    color: #000;
    /* background: linear-gradient(328deg, rgba(254,252,251,1) 10%, rgba(224,172,185,1) 31%, rgba(167,93,127,1) 48%, rgba(254,252,251,1) 87%); */
    background-color: #C9D6DF;
    p {
        text-align: center;
        padding: 1.5rem 0 1.5rem 0;
    }
    .box {
        padding: 1%;
        text-align: center;
    }
    .box img {
        width: 100%;
        height: 380px;
        margin-bottom: 16px;
    }
`
const StyledImageSection = styled.section`
    padding: 0;
`
const StyledShowCase1 = styled.ul`
    list-style: none;
    width: 100%;
    background-color: #000;
    display: flow-root;
    li {
        display: block;
        float: left;
        width: 25%;
    }
    figure {
        width: 100%;
        margin: 0;
        overflow: hidden;
        background-color: #000;
    }
    figure img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        opacity: 0.7;
    }
    @media only screen and (max-width: 1023px) {
        figure img {
            height: 180px;
        }
    }
    @media only screen and (max-width: 480px) {
        figure img{
            height: 100px;
        }
    }
`

export default PE1Gameplay
