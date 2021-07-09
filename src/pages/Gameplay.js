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
                <h1>Mechanics</h1>
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
        background: linear-gradient(171deg, rgba(0,0,0,0.3) 17%, rgba(0,0,0,0.3) 54%), url(${gameplayBanner});
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
        font-size: 56px;
        opacity: 0.85;
        color: #fff;
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
