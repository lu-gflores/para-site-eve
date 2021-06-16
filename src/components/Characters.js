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
                        <div className='box'>
                            <p>
                                The main protagonist and and heroine of the series. A strong-willed NYPD detective dragged into the apocalyptic events in New York. In 1997, Christmas Eve,
                                Aya attended an opera performance at Carnegie Hall with her blind date, starring Melissa as the lead role. Suddenly, during her performance, Melissa suddently
                                transformed into Eve and started killing the audience through spontaneous combustion. During and after Eve's encounter, Aya's mitochondria and genes mutated and granted
                                her unique abilites such as healing, scanning, etc. through Parasite Energy. Her goal is to stop Eve from eradicating humanity and reproducing superior beings that can alter and control their DNA.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                An actress and opera singer who was performing at the Carnegie Hall on Christmas Eve, who later transformed into Mitochondria Eve. During her performance,
                                her mitochondria began to mutate and fully take over, thus awakening as Eve.
                                Her advanced mitochrondria communicated with the own audience, resulted in the spontaneous combustion and killing hundreds, although Aya was somehow immune. After Aya's encounter, Eve flees and is set loose in New York,
                                becoming a major threat to not only the city but to humanity.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A veteran detective of the NYPD and Aya's partner. He acts as the support role for Aya, encouraging her with words of experience despite dealing with his divorce. He is also father, however due to his dedication to his job, he is unable to take care
                                of his son properly. Due to this, Daniel harbors a strong paternal sense and is very protective of his son as well as Aya.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A japanese scientist who is very interested in the mitochondria and the first Eve. He is very polite but introverted, thus has a hard time communicating with Aya and Daniel. After hearing about the Carnegie Hall incident, he flies to NYC to investigate and assists Aya and Daniel
                                in stopping Eve by providing his knowledge and research.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A former accountant who's daughter was killed by an NMC in the events of the first game. He joins the Mitochondrion Investation and Supression Team, or MIST, a branch of the FBI that formed
                                after the NYC incident and serves as Aya's partner. Aya sees Rupert as a quiet and reserved man, but merciless around NMCs and is treated as an outcast.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                An agent of MIST and master of information "retrieval". He is rather laid back and a loner, but considers Aya a close friend. He provides backup for Aya during her time in Dryfield by striking a deal with
                                one of the locals by selling firearms.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A bounty hunter who likes to live on the edge. He is very skilled in a variety of weapons and enjoys the thrill of the hunt. He is also very secretive about his background and proves to be a
                                cooperative ally for Aya, although she finds him annoying at first. It is hinted that he may have some interest in Aya during their time in Dryfield.
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A MIST member and a friend of Aya. She runs a weapons depot at the MIST Headquarters stationed at LA, California. She sells guns and equipment for Aya at her own shop, Bouquet's Guns and Ammo, in exchange for BP (Bounty Points).
                            </p>
                        </div>
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
                        <div className='box'>
                            <p>
                                A local dog who demonstrates obedience, intelligence, bravery, and loyalty. He assists Aya in a variety of ways during her time in Dryfield regardless of how dangerous the situation is.
                            </p>
                        </div>
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
    .box {
        padding: 5%;
    }
`
const StyledSection2 = styled.section`
    line-height: 1.5;
    background-color: #00adb5;
    color: #000;
    img {
        margin: 10px 0 5px 0;
        width: 100%;
        height: 520px;
    }
    .box {
        padding: 5%;
    }
`


export default Characters
