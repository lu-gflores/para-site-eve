import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_2_OF_3 } from '../styles'
import Eve1 from '../img/eve1.jpg'
const PE1Story = () => {
    return (
        <div>
            <StyledStory>
                <Row>
                    <h1>Parasite Eve I Story</h1>
                </Row>
                <Row>
                    <SPAN_2_OF_3>
                        <p>
                            On Christmas Eve of 1997, NYPD rookie officer Aya Brea attends an Opera at Carnegie Hall with a blind date. During the performance, lead actress Melissa Pearce begins to attack the audience
                            through sponteneous combustion, with the exception of Aya for an unknown reason. As Aya confonts Melissa on stage, Melissa vaguely states that Aya's mitochondria needs more time to develop and flees.
                            During this encounter, she learns that she is able to use mysterious powers known as Parasite Energy. As she pursues Melissa backstage, Aya encounters monsterous creatuers known as Neo-Mitochondrial Creatures (NMCs)
                            and learns of Melissa's changes. As soon as Aya catches up to Melissa, Melissa begins to mutate into a flying beast and declares herself as Eve. After the second battle, Eve once again flees into the sewers and
                            is set loose in New York City, transforming nearly every living thing into NMCs and Aya must eliminate them and stop Eve from destroying humanity.
                        </p>
                    </SPAN_2_OF_3>
                    <SPAN_1_OF_3>
                        <img src={Eve1} alt='Parasite Eve 1' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledStory>
        </div>
    )
}

const StyledStory = styled.section`
    line-height: 1.5;
    color: #000;
    background-color: #f4f4f4;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 420px;
    }
`

export default PE1Story
