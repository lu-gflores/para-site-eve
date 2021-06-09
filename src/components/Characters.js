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
                            The main protagonist and and heroine of the series. A strong-willed NYPD detective dragged into the apocalyptic events in New York. In 1997, Christmas Eve,
                            Aya attended an opera performance at Carnegie Hall with her blind date, starring Melissa as the lead role. Suddenly, during her performance, Melissa suddently
                            transformed into Eve and started killing the audience through spontaneous combustion. During and after Eve's encounter, Aya's mitochondria and genes mutated and granted
                            her unique abilites such as healing, scanning, etc. through Parasite Energy. Her goal is to stop Eve from eradicating humanity and reproducing superior beings that can alter and control their DNA.
                        </p>
                    </SPAN_2_OF_3>
                    <SPAN_1_OF_3>
                        <img src={Aya} alt='Aya Brea' />
                    </SPAN_1_OF_3>
                </Row>
            </StyledSection1>
            <StyledSection2>
                <Row>
                    <h1>Melissa Pearce / Eve</h1>
                </Row>
                <Row>
                    <SPAN_2_OF_3>
                        <p>
                            An actress and opera singer who was performing at the Carnegie Hall on Christmas Eve, who later transformed into Mitochondria Eve. During her performance,
                            her mitochondria began to mutate and fully take over, thus awakening as Eve.
                            Her advanced mitochrondria communicated with the own audience, resulted in the spontaneous combustion and killing hundreds, although Aya was somehow immune. After Aya's encounter, Eve flees and is set loose in New York,
                            becoming a major threat to not only the city but to humanity.
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
                            A veteran detective of the NYPD and Aya's partner. He acts as the support role for Aya, encouraging her with words of experience despite dealing with his divorce. He is also father, however due to his dedication to his job, he is unable to take care
                            of his son properly. Due to this, Daniel harbors a strong paternal sense and is very protective of his son as well as Aya.
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
                            A japanese scientist who is very interested in the mitochondria and the first Eve. He is very polite but introverted, thus has a hard time communicating with Aya and Daniel. After hearing about the Carnegie Hall incident, he flies to NYC to investigate and assists Aya and Daniel
                            in stopping Eve by providing his knowledge and research.
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
    background-color: #393e46;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 520px;
    }
`
const StyledSection2 = styled.section`
    line-height: 1.5;
    background-color: #00adb5;
    color: #393e46;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 520px;
    }
`


export default Characters
