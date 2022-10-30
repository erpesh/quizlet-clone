import React from 'react'
import BlueButton from "../../../layouts/blue-button.styles";
import { BackgroundImage, Container, H3 } from './submit-section.styles'

interface Props {
    setIsTestChecked: (isChecked: boolean) => void
}

const SubmitSection: React.FC<Props> = ({ setIsTestChecked }) => {

    const handleSubmitClick = () => {
        setIsTestChecked(true);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <Container>
            <BackgroundImage />
            <H3>All done! Ready to submit your test?</H3>
            <BlueButton
                padding={"1.25rem 2rem"}
                radius={".5rem"}
                fontSize={"1rem"}
                onClick={handleSubmitClick}
            >
                Submit test
            </BlueButton>
        </Container>
    )
}

export default SubmitSection