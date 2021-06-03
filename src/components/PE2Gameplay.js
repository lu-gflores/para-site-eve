import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3 } from '../styles'

import battle from '../img/Gameplay2/PE2battle.gif'
import menu from '../img/Gameplay2/PE2Menu.png'
import area from '../img/Gameplay2/dryfield.jpg'

import shot5 from '../img/Gameplay2/shot5.jpg'
import shot6 from '../img/Gameplay2/shot6.jpg'
import shot7 from '../img/Gameplay2/shot7.jpg'
import shot8 from '../img/Gameplay2/shot8.jpg'

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
            <section>
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
            </section>
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
const StyledShowCase2 = styled.ul`
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
