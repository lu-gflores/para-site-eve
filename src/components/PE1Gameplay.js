import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3 } from '../styles'
import battle from '../img/Gameplay1/battle.jpg'
import map from '../img/Gameplay1/map.jpg'
import menu from '../img/Gameplay1/pe-menu.jpg'

import shot1 from '../img/Gameplay1/pe_shot1.jpg'
import shot2 from '../img/Gameplay1/pe_shot2.jpg'
import shot3 from '../img/Gameplay1/pe_shot3.jpg'
import shot4 from '../img/Gameplay1/pe_shot4.jpg'


const PE1Gameplay = () => {
    return (
        <div>
            <StyledGameSection>
                <Row>
                    <h2>Parasite Eve Gameplay</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_3 className='box'>
                        <img src={map} alt='Map of Manhattan, New York' />
                        <p>Explore Manhattan over the course of six-days in the attempt stop Eve from destroying humanity.</p>
                    </SPAN_1_OF_3>
                    <SPAN_1_OF_3 className='box'>
                        <img src={battle} alt='Encounter' />
                        <p>As you explore, encounter enemies that underwent mutation by Eve. Using the Active Time Bar, choose how to spend your action, whether to attack, use abilities, change weapons, or flee.</p>
                    </SPAN_1_OF_3>
                    <SPAN_1_OF_3 className='box'>
                        <img src={menu} alt='Game menu' />
                        <p>Gain experience to level up to unlock her Parasite Energy thanks to Aya's mitochondria. Alter weapon and armor attributes and carefully manage your resources. Spaces are limited!</p>
                    </SPAN_1_OF_3>
                </Row>
            </StyledGameSection>
            <section>
                <StyledShowCase1>
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
            </section>
        </div>
    )
}

const StyledGameSection = styled.section`
    line-height: 1.3;
    .box {
        padding: 1%;
    }
    .box img {
        width: 100%;
        height: 380px;
        margin-bottom: 16px;
    }
`
const StyledShowCase1 = styled.ul`
    list-style: none;
    width: 100%;
    li {
        display: block;
        float: left;
        width: 25%;
    }
    figure {
        width: 100%;
        margin: 0;
        overflow: hidden;
    }
    figure img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        opacity: 0.7;
    }
`

export default PE1Gameplay
