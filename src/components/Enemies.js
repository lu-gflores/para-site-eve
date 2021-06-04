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
                    <SPAN_1_OF_4>

                    </SPAN_1_OF_4>
                </Row>
            </StyledEnemiesSection>
        </div>
    )
}

const StyledEnemiesSection = styled.section`
    line-height: 1.5;
    background-color: red;
    text-align: center;
`

export default Enemies
