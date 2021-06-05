import React from 'react'
import styled from 'styled-components'
import { Row, SPAN_1_OF_3, SPAN_1_OF_2 } from '../styles'

const Staff = () => {
    return (
        <StyledStaffSection1>
            <Row>
                <h2>Staff of Parasite Eve I</h2>
            </Row>
            <Row>
                <SPAN_1_OF_3>
                    <h1>Director</h1>
                    <h3>Takashi Tokita</h3>
                </SPAN_1_OF_3>
                <SPAN_1_OF_3>
                    <h1>Producer</h1>
                    <h3>Hironbu Sakaguchi</h3>
                </SPAN_1_OF_3>
                <SPAN_1_OF_3>
                    <h1>Programmer</h1>
                    <h3>Hiroshi Kawai</h3>
                </SPAN_1_OF_3>
            </Row>
            <Row>
                <SPAN_1_OF_2>
                    <h1>Artist</h1>
                    <h3>Tetsuya Nomura</h3>
                </SPAN_1_OF_2>
                <SPAN_1_OF_2>
                    <h1>Composer</h1>
                    <h3>Yoko Shimomura</h3>
                </SPAN_1_OF_2>
            </Row>
        </StyledStaffSection1>
    )
}

const StyledStaffSection1 = styled.section`
    line-height: 1.8;
    h1 {
        text-align: center;
    }

`
export default Staff
