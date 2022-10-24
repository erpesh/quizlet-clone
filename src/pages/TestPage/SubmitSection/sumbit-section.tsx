import React from 'react'
import { BlueButton } from '../../../components/BlueButton/blue-button.styles'
import { BackgroundImage, Container, H3 } from './submit-section.styles'

interface Props {

}

const SubmitSection: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <BackgroundImage />
            <H3>All done! Ready to submit your test?</H3>
            <BlueButton
                padding={"1.25rem 2rem"}
                radius={".5rem"}
                fontSize={"1rem"}
            >
                Submit test
            </BlueButton>
        </Container>
    )
}

export default SubmitSection