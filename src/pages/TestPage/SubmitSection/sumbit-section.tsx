import React, {useContext} from 'react'
import BlueButton from "../../../layouts/blue-button.styles";
import { BackgroundImage, Container } from './submit-section.styles'
import AuthContext from "../../../context/auth-context";
import H3 from '../../../layouts/headers.styles';

interface Props {
    setIsTestChecked: (isChecked: boolean) => void
}

const SubmitSection: React.FC<Props> = ({ setIsTestChecked }) => {

    const {setProgressBarWidth} = useContext(AuthContext);

    const handleSubmitClick = () => {
        setIsTestChecked(true);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setProgressBarWidth(100);
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