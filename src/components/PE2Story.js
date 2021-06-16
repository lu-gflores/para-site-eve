import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_2_OF_3 } from '../styles'
import Eve2 from '../img/story-img/Eve2Story.jpg'

const PE2Story = () => {
    return (
        <div>
            <StyledStory>
                <Row>
                    <h1>Parasite Eve II Story</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Eve2} alt='Parasite Eve 2' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Three years after stopping Eve, Aya Brea now an FBI agent works in the Mitochondrion Investigation and Supresstion
                            Team, or MIST, a branch with the purpose of finding and suppressing the NMCs that begin appearing throughout the United States. Dispatched to
                            Akropolis Tower shopping mall to support a SWAT team, Aya and her partner Rupert investigate to find new forms of NMCs who are able to pass as human and
                            begin their on-slaught. As they begin to eliminate the NMCs, Aya realizes the building is rigged to explode and fights a psychopathic NMC. After the raid and
                            barely escaping with their lives, Aya is then sent by the MIST director to investigate a remote desert town of Dryfield, Nevada, after reports of
                            unusual animals being seen.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledStory>
        </div>
    )
}


const StyledStory = styled.section`
    line-height: 1.5;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 420px;
    }
    p {
        padding: 2%;
    }
`

export default PE2Story
