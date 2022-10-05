import React, {FC, useRef} from "react";
import setDataInterface from "../../interfaces/set-data.interface";
import {
  CardContainer,
  TopPart,
  BottomPart,
  TermContentWrap,
  TermContentPart,
  InputLabel,
  InputLabelText,
  IDSpan,
  DeleteButtonContainer,
  DeleteButton,
  DeleteButtonWrapper,
  TermRowSeparator,
  RowBetweenButton,
  SeparateAddButton,
  SeparateButtonWrap,
  ProseMirrorInput
} from "./create-card.styles";
import {ReactComponent as DeleteIcon} from "../../assets/images/delete-icon.svg";
import {ReactComponent as PlusIcon} from "../../assets/images/plus-icon.svg";
import "./styles.css"

interface Props {
  id: number,
  data: setDataInterface,
  setData: (data: setDataInterface) => void
}

const CreateCard: FC<Props> = ({id, data, setData}) => {

  const removeCard = () => {
    let terms = data.terms;
    terms.splice(id, 1);
    setData({...data, terms: terms})
  }
  const addCardBetween = () => {
    let items = data.terms;
    items.splice(id + 1, 0, {
      id: Math.random(),
      term: '',
      definition: ''
    })
    setData({...data, terms: items})
  }
  const handleTermInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let items = data.terms;
    items[id].term = event.target.value;
    setData({...data, terms: items});
  }
  const handleDefinitionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let items = data.terms;
    items[id].definition = event.target.value;
    setData({...data, terms: items});
  }

  return (
      <div className={"card-container"}>
        <CardContainer>
          <TopPart>
            <IDSpan>{id + 1}</IDSpan>
            <DeleteButtonContainer>
            <span style={{display: "inline-block", verticalAlign: "bottom"}}>
              <span style={{display: "inline-block"}}>
                <DeleteButton disabled={data.terms.length < 3} onClick={removeCard}>
                  <DeleteButtonWrapper>
                    <DeleteIcon width={"18px"} height={"18px"}/>
                  </DeleteButtonWrapper>
                </DeleteButton>
              </span>
            </span>
            </DeleteButtonContainer>
          </TopPart>
          <BottomPart>
            <div>
              <TermContentWrap>
                <TermContentPart>
                  <div style={{position: "relative"}}>
                    <div style={{paddingTop: "1rem"}}>
                      <div className="PMEditor">
                        <ProseMirrorInput
                            placeholder={!data.terms[id]?.term ? "Enter the Term" : ""}
                            onChange={handleTermInput}
                            value={data.terms[id]?.term}
                        />
                      </div>
                      <div className={"PMEditorBorder"}/>
                      <span/>
                      <InputLabel>
                        <InputLabelText>TERM</InputLabelText>
                      </InputLabel>
                    </div>
                  </div>
                </TermContentPart>
                <TermContentPart>
                  <div style={{position: "relative"}}>
                    <div style={{paddingTop: "1rem"}}>
                      <div className="PMEditor">
                        <ProseMirrorInput
                            placeholder={!data.terms[id]?.definition ? "Enter the Definition" : ""}
                            onChange={handleDefinitionInput}
                            value={data.terms[id]?.definition}
                        />
                      </div>
                      <div className={"PMEditorBorder"}/>
                      <span/>
                      <InputLabel>
                        <InputLabelText>DEFINITION</InputLabelText>
                      </InputLabel>
                    </div>
                  </div>
                </TermContentPart>
              </TermContentWrap>
            </div>
          </BottomPart>
        </CardContainer>
        <TermRowSeparator>
          <RowBetweenButton>
            <span style={{display: "inline-block"}}>
              {id < data.terms.length - 1 && <SeparateAddButton
                  tabIndex={-1}
                  type={"button"}
                  title={"+ Add card"}
                  onClick={addCardBetween}
              >
                <SeparateButtonWrap>
                  <PlusIcon/>
                </SeparateButtonWrap>
              </SeparateAddButton>}
            </span>
          </RowBetweenButton>
        </TermRowSeparator>
      </div>
  );
};

export default CreateCard;