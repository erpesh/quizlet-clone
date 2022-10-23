import React from 'react'
import { simpleTest } from '../../interfaces'
import {
    InactiveAnswerBox,
    ActiveAnswerBox,
    ActiveAnswerBoxWithMessage,
    ActiveBoxMessage,
    TextContainer,
    TextFormater,
    TextWrap,
    DefaultAnswerBox,
    RemoveIconContainer,
    AnsweredBoxContent
} from './definitions-item.styles'
import {IoCloseOutline} from "react-icons/io5";

interface Props {
    testItem: simpleTest
}

const DefinitionsItem: React.FC<Props> = ({ testItem }) => {
    return (
        <>
            <TextContainer>
                <TextWrap>
                    <TextFormater>
                        {testItem.definition}
                    </TextFormater>
                </TextWrap>
            </TextContainer>

            <InactiveAnswerBox tabIndex={-1}/>

            <ActiveAnswerBoxWithMessage tabIndex={-1}>
                <ActiveBoxMessage>Select from the list below</ActiveBoxMessage>
            </ActiveAnswerBoxWithMessage>

            <ActiveAnswerBox tabIndex={-1}/>

            <DefaultAnswerBox tabIndex={-1}>
                <div style={{cursor: "pointer"}}>
                    <AnsweredBoxContent>
                        <TextFormater>
                            {/* chosen asnwer */}
                        </TextFormater>
                    </AnsweredBoxContent>
                </div>
                <RemoveIconContainer tabIndex={0}>
                    <IoCloseOutline/>
                </RemoveIconContainer>
            </DefaultAnswerBox>
        </>
    )
}

export default DefinitionsItem