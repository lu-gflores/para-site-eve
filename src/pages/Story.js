import React from 'react'
import styled from 'styled-components'
import storyBanner from '../img/story-img/storybanner.jpg'
import PE1Story from '../components/PE1Story'

const Story = () => {
    return (
        <div>
            <StyledHeader>
                <h1>Story</h1>
            </StyledHeader>
            <PE1Story />
        </div>
    )
}
const StyledHeader = styled.header`
    height: 83vh;
    background: linear-gradient(171deg, rgba(0,0,0,0.3) 17%, rgba(0,0,0,0.3) 54%), url(${storyBanner});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`
export default Story
