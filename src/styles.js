import styled from 'styled-components'

export const Row = styled.div`
    zoom: 1;
    ::before, ::after{
        content: '';
        display: table;
    }
    :after {
        clear: both;
    }
    @media only screen and (max-width: 1200px) {
        padding: 0 2%;
    }
`
export const Col = styled.div`
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
    :first-child{
        margin-left: 0;
    }
    @media only screen and (max-width: 480px) {
        margin: 0
    }
`