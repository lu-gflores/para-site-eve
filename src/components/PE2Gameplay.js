import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_2 } from '../styles'

import battle from '../img/Gameplay2/PE2battle.gif'
import menu from '../img/Gameplay2/PE2Menu.png'
import area from '../img/Gameplay2/dryfield.jpg'
import peEnergy from '../img/Gameplay2/parasite-energy.png'

import shot5 from '../img/Gameplay2/shot5.jpg'
import shot6 from '../img/Gameplay2/shot6.jpg'
import shot7 from '../img/Gameplay2/shot7.jpg'
import shot8 from '../img/Gameplay2/shot8.jpg'

const PE2Gameplay = () => {
    return (
        <>
            <StyledGameplaySection>
                <Row>
                    <h2>Parasite Eve II Gameplay</h2>
                    <p><em>"I don't suppose I'll be fighting any giant cactus creatures?"</em></p>
                </Row>
                <Row>
                    <SPAN_1_OF_2 className='box'>
                        <img src={area} alt='Mojave, town called Dryfield' />
                        <p>Explore the desert town Dryfield, Nevada, after reports of seeing unusual creatures.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2 className='box'>
                        <img src={battle} alt='firing weapon' />
                        <p>Battle takes place in real-time, so choose whether to engage or avoid enemies. </p>
                    </SPAN_1_OF_2>
                </Row>
                <Row>
                    <SPAN_1_OF_2 className='box'>
                        <img src={menu} alt='Game menu' />
                        <p>With a blend of survival horror and rpg elements, gain EXP through battles to raise Aya's stats to survive this adventure.</p>
                    </SPAN_1_OF_2>
                    <SPAN_1_OF_2 className='box'>
                        <img src={peEnergy} alt='Parasite energy menu' />
                        <p>Having locked away her Parasite Energy, help Aya reawaken her abilities to overcome the horrors that await. This time Parasite Energy is divided in four areas, each based on the player's situtation.</p>
                    </SPAN_1_OF_2>
                </Row>
            </StyledGameplaySection>
            <StyledImageSection>
                <StyledShowCase2>
                    <li>
                        <figure>
                            <img src={shot5} alt='shot 5' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot6} alt='shot 6' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot7} alt='shot 7' />
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img src={shot8} alt='shot 8' />
                        </figure>
                    </li>
                </StyledShowCase2>
            </StyledImageSection>
        </>
    )
}
const StyledGameplaySection = styled.section`
    line-height: 1.5;
    /* background: linear-gradient(328deg, rgba(93,84,79,1) 4%, rgba(183,180,175,1) 63%, rgba(225,226,205,1) 95%); */
    background: #393e46;
    p{
        text-align: center;
        padding: 1.5rem 0 1.5rem 0;
    }
    .box {
        padding: 1%;
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
const StyledShowCase2 = styled.ul`
    list-style: none;
    width: 100%;
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
export default PE2Gameplay
