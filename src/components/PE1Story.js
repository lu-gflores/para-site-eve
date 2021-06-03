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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
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
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 420px;
    }
`

export default PE1Story
