import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_1_OF_2 } from '../styles'

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
                <Row>
                    <h2>Parasite Eve Gameplay</h2>
                    <p><em>"Hmph... You're the only one who seems to be fine...<br /> You should be awakening soon...<br /> Listen... <br /> Your cells are trying to communicate... <br /> They're... calling out..."</em></p>
                </Row>
                <Row>
                    <SPAN_1_OF_2 className='box'>
                        <img src={map} alt='Map of Manhattan, New York' />
                        <p>Explore Manhattan over the course of six-days in the attempt stop Eve from destroying humanity.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2 className='box'>
                        <img src={battle} alt='Encounter' />
                        <p>As you explore, encounter enemies that underwent mutation by Eve. In a turn-based combat and using the Active Time Bar, choose how to spend your action, whether to attack, use abilities, change weapons, or flee.</p>
                    </SPAN_1_OF_2>
                </Row>
                <Row>
                    <SPAN_1_OF_2 className='box'>
                        <img src={menu} alt='Game menu' />
                        <p>Level up through battles to unlock her Parasite Energy thanks to Aya's mitochondria as well boose her various attributes. Spend Bonus Points to increase your ATB, item capacity, or weapons/armor attributes.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2 className='box'>
                        <img src={tuneup} alt='Upgrading rifle in menu' />
                        <p>As traditional survival horror goes, manage your inventory space as necessary. Whether it's upgrading, selling, or tossing wepaons and armor, make it count! Space and resources are limited!</p>
                    </SPAN_1_OF_2>
                </Row>
            </StyledGameSection>
            <StyledImageSection>
                <StyledShowCase1 className='clearfix'>
                    <li>
                        <figure>
                            <img src={shot1} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot2} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot3} alt='Screen shot 1' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot4} alt='Screen shot 1' />
                        </figure>
                    </li>
                </StyledShowCase1>
            </StyledImageSection>
        </>
    )
}

const StyledGameSection = styled.section`
    line-height: 1.3;
    color: #000;
    background: linear-gradient(328deg, rgba(254,252,251,1) 10%, rgba(224,172,185,1) 31%, rgba(167,93,127,1) 48%, rgba(254,252,251,1) 87%);
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
