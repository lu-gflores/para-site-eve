import React from 'react'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'
import Characters from '../components/Characters'
const Cast = () => {
    return (
        <div>
            <StyledHeader>
                <StyledHeroText>
                    <h1>Cast</h1>
                </StyledHeroText>
            </StyledHeader>
            <Characters />
            <ScrollTop />
        </div>
    )
}

const StyledHeader = styled.header`
    height: 80vh;
    background: linear-gradient(171deg, rgba(187,190,187,1) 17%, rgba(104,170,157,0.9612219887955182) 54%, rgba(213,219,215,1) 86%);
`
const StyledHeroText = styled.div`
    position: absolute;
    top: 30%;
    left: 12%;
    h1 {
        font-family: 'Century Gothic', sans-serif;
        font-size: 6rem;
    }
`


export default Cast
