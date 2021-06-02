import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3 } from '../styles'
import battle from '../img/Gameplay2/PE2battle.gif'
import menu from '../img/Gameplay2/PE2Menu.png'
import area from '../img/Gameplay2/dryfield.jpg'

const PE2Gameplay = () => {
    return (
        <div>
            <StyledGameplaySection>
                <Row>
                    <h2>Parasite Eve II Gameplay</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_3 className='box'>
                        <img src={area} alt='Mojave, town called Dryfield' />
                        <p>Explore the desert town Dryfield, Nevada, after reports of seeing unusual creatures.</p>
                    </SPAN_1_OF_3>
                    <SPAN_1_OF_3 className='box'>
                        <img src={battle} alt='firing weapon' />
                        <p>Battle takes place in real-time, so choose whether to engage or avoid enemies. </p>
                    </SPAN_1_OF_3>
                    <SPAN_1_OF_3 className='box'>
                        <img src={menu} alt='Game menu' />
                        <p>Having locked away her Parasite Energy, help Aya reawaken her abilities to overcome the horrors that await. Just like the previous game, resources are limited!</p>
                    </SPAN_1_OF_3>
                </Row>
            </StyledGameplaySection>
        </div>
    )
}
const StyledGameplaySection = styled.section`
    line-height: 1.5;
    .box {
        padding: 1%;
    }
    .box img {
        width: 100%;
        height: 380px;
        margin-bottom: 16px;
    }
`

export default PE2Gameplay
