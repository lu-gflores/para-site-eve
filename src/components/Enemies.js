import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_4 } from '../styles'

import rat from '../img/enemies/pe1enemies/Rat.png'
import snake from '../img/enemies/pe1enemies/Snake.png'
import monkey from '../img/enemies/pe1enemies/Monkey.png'
import pterodactyl from '../img/enemies/pe1enemies/Pterodactyl.png'
import spider from '../img/enemies/pe1enemies/Spider.png'
import alligator from '../img/enemies/pe1enemies/Alligator.png'
import spiderWoman from '../img/enemies/pe1enemies/Spider-woman.png'
import armadillo from '../img/enemies/pe1enemies/Armadillo.png'

const Enemies = () => {
    return (
        <div>
            <StyledEnemiesSection>
                <Row>
                    <h2>Neo-Mitochondrial Creatures</h2>
                </Row>
                <Row>
                    <p>Neo-Mitochondrial Creatures (NMCs) are the series main enemies, each behaving differently in terms of attack, defense, and style. They are mutated animals or other lifeforms
                that are taken over by their modified mitochondria. They first appear and wreak havoc in New York City after coming into contact with Eve in the first game and reappear again in Dryfield in the second game, only they are altered.</p>
                </Row>
                <Row>
                    <h2>Parasite Eve NMCs</h2>
                </Row>
                <Row>
                    <SPAN_1_OF_4 className='box'>
                        <img src={rat} alt='rat' />
                        <h1>Rat</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={snake} alt='snake' />
                        <h1>Snake</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={monkey} alt='Monkey' />
                        <h1>Monkey</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={armadillo} alt='Armadillo' />
                        <h1>Armadillo</h1>
                    </SPAN_1_OF_4>
                </Row>
                <Row>
                    <SPAN_1_OF_4 className='box'>
                        <img src={pterodactyl} alt='pterodactyl' />
                        <h1>Pterodactyl</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={spider} alt='spider' />
                        <h1>Spider</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={alligator} alt='Alligator' />
                        <h1>Alligator</h1>
                    </SPAN_1_OF_4>
                    <SPAN_1_OF_4 className='box'>
                        <img src={spiderWoman} alt='Spider Woman' />
                        <h1>Spider Woman</h1>
                    </SPAN_1_OF_4>
                </Row>
            </StyledEnemiesSection>
        </div>
    )
}

const StyledEnemiesSection = styled.section`
    line-height: 1.5;
    text-align: center;
    .box{
        padding: 1%;
    }
    .box img{
        width: 100%;
        height: 225px;
        margin: 15px 0 15px 0 ;
    }
`

export default Enemies
