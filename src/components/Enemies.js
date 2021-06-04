import React from 'react'
import styled from 'styled-components'
import { Row } from '../styles'
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
