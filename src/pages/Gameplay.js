import React from 'react'
import styled from 'styled-components'
import PE1Gameplay from '../components/PE1Gameplay'
import gameplayBanner from '../img/parasite-eve-in-the-water.jpg'

const Gameplay = () => {
    return (
        <div>
            <StyledHeader>
                {/* <StyledHeroText>
                    <h1>Gameplay</h1>
                </StyledHeroText> */}
            </StyledHeader>
            <PE1Gameplay />
        </div>
    )
}

const StyledHeader = styled.header`
    height: 80vh;
    background: linear-gradient(171deg, rgba(187,190,187,0.4) 17%, rgba(104,170,157,0.9612219887955182) 54%, rgba(213,219,215,0.5) 86%), url(${gameplayBanner});
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
`

const StyledHeroText = styled.div`
    position: absolute;
    top: 30%;
    left: 12%;
    h1 {
        font-size: 6rem;
    }
`
export default Gameplay
