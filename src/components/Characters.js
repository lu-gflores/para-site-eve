import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_2_OF_3 } from '../styles'
import Aya from '../img/characters/aya.png'
import Eve from '../img/characters/eve.png'
import Daniel from '../img/characters/Daniel.png'
import Maeda from '../img/characters/Maeda.png'
const Characters = () => {
    return (
        <div>
            <StyledSection1>
                <Row>
                    <h1>Aya Brea</h1>
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
                        <img src={Aya} alt='Aya Brea' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledSection1>
            <StyledSection2>
                <Row>
                    <h1>Eve</h1>
                </Row>
                <Row>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat. Etiam eu nunc lectus.
                            Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                    <SPAN_1_OF_3>
                        <img src={Eve} alt='Eve' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledSection2>
            <StyledSection1>
                <Row>
                    <h1>Daniel Dollis</h1>
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
                        <img src={Daniel} alt='Daniel Dollis' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledSection1>
            <StyledSection2>
                <Row>
                    <h1>Kunihiko Maeda</h1>
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
                        <img src={Maeda} alt='Kunihiko Maeda' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledSection2>
        </div>
    )
}

const StyledSection1 = styled.section`
    line-height: 1.5;
    background-color: red;
    img {
        width: 100%;
        height: 520px;
    }
`
const StyledSection2 = styled.section`
    line-height: 1.5;
    background-color: #000;
    img {
        width: 100%;
        height: 520px;
    }
`


export default Characters