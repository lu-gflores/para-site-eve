import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_2_OF_3 } from '../styles'
import Aya from '../img/characters/aya.png'
import Eve from '../img/characters/eve.png'
import Daniel from '../img/characters/Daniel.png'
import Maeda from '../img/characters/Maeda.png'
import Pierce from '../img/characters/Pierce.png'
import Rupert from '../img/characters/Rupert.png'
import Kyle from '../img/characters/kyle.png'
import Jodie from '../img/characters/Jodie.png'
import Flint from '../img/characters/Flint.png'

const Characters = () => {
    return (
        <div>
            <section>
                <h2>Parasite Eve</h2>
            </section>
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

            <section>
                <h2>Parasite Eve II</h2>
            </section>
            <StyledSection1>
                <Row>
                    <h1>Rupert Broderick</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Rupert} alt='Broderick' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledSection1>
            <StyledSection2>
                <Row>
                    <h1>Pierce Carradine</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Pierce} alt='Pierce Carradine' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledSection2>
            <StyledSection1>
                <Row>
                    <h1>Kyle Madigan</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Kyle} alt='Kyle Madigan' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledSection1>
            <StyledSection2>
                <Row>
                    <h1>Jodie Bouquet</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Jodie} alt='Jodie Bouquet' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledSection2>
            <StyledSection1>
                <Row>
                    <h1>Flint</h1>
                </Row>
                <Row>
                    <SPAN_1_OF_3>
                        <img src={Flint} alt='Flint, the goodest boy' />
                    </SPAN_1_OF_3>
                    <SPAN_2_OF_3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum eleifend mauris, eu cursus orci auctor ultricies.
                            Cras viverra quam ut lorem pulvinar, ut dignissim augue gravida. Etiam congue diam non tempus consequat.
                            Etiam eu nunc lectus. Integer ac efficitur lectus, et euismod quam. Maecenas eleifend tortor vel efficitur consequat. Integer aliquam quis nunc ac molestie.
                        </p>
                    </SPAN_2_OF_3>
                </Row>
            </StyledSection1>
        </div>
    )
}

const StyledSection1 = styled.section`
    line-height: 1.5;
    background-color: red;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 520px;
    }
`
const StyledSection2 = styled.section`
    line-height: 1.5;
    background-color: #000;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 520px;
    }
`


export default Characters
