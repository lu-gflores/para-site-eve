import React from 'react'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'
import PE1Gameplay from '../components/PE1Gameplay'
import PE2Gameplay from '../components/PE2Gameplay'
import gameplayBanner from '../img/parasite-eve-in-the-water.jpg'

const Gameplay = () => {
    return (
        <div>
            <StyledHeader>
                <h1>Gameplay</h1>
            </StyledHeader>
            <PE1Gameplay />
            <PE2Gameplay />
            <ScrollTop />
        </div>
    )
}

const StyledHeader = styled.header`
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 85vh;
    ::before {
        content: '';
        background: linear-gradient(171deg, rgba(187,190,187,0.3) 17%, 
    rgba(104,170,157,0.5) 54%, 
    rgba(213,219,215,0.7) 86%), 
    url(${gameplayBanner});
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
    h1 {
        position: relative;
        text-align: center;
        font-size: 8rem;
        opacity: 0.85;
    }

`

// const StyledHeroText = styled.div`
//     position: absolute;
//     top: 30%;
//     left: 12%;
//     h1 {
//         font-size: 6rem;
//     }
// `
export default Gameplay
