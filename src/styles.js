import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Row = styled(motion.div)`
    max-width: 1140px;
    margin: 0 auto;
    zoom: 1;
    :before, :after{
        content: "";
        display: table;
    }
    :after {
        clear: both;
    }
    @media only screen and (max-width: 1200px) {
        padding: 0 2%;
    }
    @media only screen and (max-width: 767px) {
        padding: 0 4%;
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
        margin: 0;
    }
`
// Grid of 2
export const SPAN_2_OF_2 = styled(Col)`
    width: 100%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }

`
export const SPAN_1_OF_2 = styled(Col)`
    width: 49.2%;
    @media only screen and (max-width: 480px) {
    width: 100%;
    }
`

// Grid of 3
export const SPAN_1_OF_3 = styled(Col)`
    width: 32.26%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`
export const SPAN_2_OF_3 = styled(Col)`
    width: 66.13%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`
export const SPAN_3_OF_3 = styled(Col)`
    width: 100%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`

// Grid of 4
export const SPAN_1_OF_4 = styled(Col)`
    width: 23.8%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`
export const SPAN_2_OF_4 = styled(Col)`
    width: 49.2%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`
export const SPAN_3_OF_4 = styled(Col)`
    width: 74.6%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`
export const SPAN_4_OF_4 = styled(Col)`
    width: 100%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`