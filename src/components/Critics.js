import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3 } from '../styles'
import background from '../img/critics-background.jpg'

const Critics = () => {
    return (
        <StyledCritics>
            <Row>
                <h2>Critics</h2>
            </Row>
            <Row>
                <SPAN_1_OF_3>
                    <p><em>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                        Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida.
                        Etiam congue diam non tempus consequat.
                </em></p>
                    <br />
                    <p>- Critic</p>
                </SPAN_1_OF_3>
                <SPAN_1_OF_3>
                    <p><em>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                        Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida.
                        Etiam congue diam non tempus consequat.
                </em></p>
                    <br />
                    <p>- Critic</p>
                </SPAN_1_OF_3>
                <SPAN_1_OF_3>
                    <p><em>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                        Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida.
                        Etiam congue diam non tempus consequat.
                </em></p>
                    <br />
                    <p>- Critic</p>
                </SPAN_1_OF_3>
            </Row>
        </StyledCritics>
    )
}
const StyledCritics = styled.section`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;

`
export default Critics
