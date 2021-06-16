import React from 'react'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'

import storyBanner from '../img/story-img/storybanner.jpg'

import PE1Story from '../components/PE1Story'
import PE2Story from '../components/PE2Story'
import Enemies from '../components/Enemies'
const Story = () => {
    return (
        <div>
            <StyledHeader>
                <h1>Story</h1>
            </StyledHeader>
            <PE1Story />
            <PE2Story />
            <Enemies />
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
        background: linear-gradient(171deg, rgba(0,0,0,0.3) 17%, rgba(0,0,0,0.3) 54%), url(${storyBanner});
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
        opacity: 0.75;
    }
`
export default Story
