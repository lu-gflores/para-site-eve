import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3 } from '../styles'
import battle from '../img/Gameplay1/battle.jpg'
import map from '../img/Gameplay1/map.jpg'
import menu from '../img/Gameplay1/pe-menu.jpg'

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
                        <p>As you explore, encounter enemies that underwent mutation by Eve. Using the Active time Bar, choose how to spend your action, whether to attack, use abilities, change weapons, or flee.</p>
                    </SPAN_1_OF_3>
                    <SPAN_1_OF_3 className='box'>
                        <img src={menu} alt='Game menu' />
                        <p>Gain experience to level up and unlock hidden abilities thanks to Aya's mitochondria. Alter weapon and armor attributes and carefully manage your resources. Spaces are limited!</p>
                    </SPAN_1_OF_3>
                </Row>
            </StyledGameSection>
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

export default PE1Gameplay
