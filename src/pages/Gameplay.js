import React from 'react'
import styled from 'styled-components'

const Gameplay = () => {
    return (
        <div>
            <StyledHeader>
                <h1>Gameplay</h1>
            </StyledHeader>
        </div>
    )
}

const StyledHeader = styled.header`
    height: 80vh;
    background: linear-gradient(171deg, rgba(187,190,187,1) 17%, rgba(104,170,157,0.9612219887955182) 54%, rgba(213,219,215,1) 86%);
`
export default Gameplay
