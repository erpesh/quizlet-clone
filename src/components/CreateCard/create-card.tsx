import React, {FC, useRef} from "react";
import setDataInterface from "../../interfaces/set-data.interface";
import {
  CardContainer,
  TopPart,
  BottomPart,
  TermContentWrap,
  TermContentPart,
  ProseMirror,
  InputLabel,
  InputLabelText,
  IDSpan,
  DeleteButtonContainer,
  DeleteButton,
  DeleteButtonWrapper,
  TermRowSeparator,
  RowBetweenButton,
  SeparateAddButton,
  SeparateButtonWrap
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

  const defaultTermValue = useRef(data.terms[id].term);
  const defaultDefinitionValue = useRef(data.terms[id].definition);

  const removeCard = () => {
    let terms = data.terms;
    data.terms.splice(id, 1);
    setData({...data, terms})
  }

  const handleTermInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let items = data.terms;
    items[id].term = !!event.currentTarget.textContent ? event.currentTarget.textContent : "";
    setData({...data, terms: items})
  }
  const handleDefinitionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let items = data.terms;
    items[id].definition = !!event.currentTarget.textContent ? event.currentTarget.textContent : "";
    setData({...data, terms: items})
  }

  return (
      <>
        <CardContainer>
          <TopPart>
            <IDSpan>{id + 1}</IDSpan>
            <DeleteButtonContainer>
            <span style={{display: "inline-block", verticalAlign: "bottom"}}>
              <span style={{display: "inline-block"}}>
                <DeleteButton>
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
                        <ProseMirror
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onInput={handleTermInput}
                            placeholder={!data.terms[id].term ? "Enter the Term" : ""}
                            dangerouslySetInnerHTML={{__html: defaultTermValue.current}}
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
                        <ProseMirror
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onInput={handleDefinitionInput}
                            placeholder={!data.terms[id].definition ? "Enter the Definition" : ""}
                            dangerouslySetInnerHTML={{__html: defaultDefinitionValue.current}}
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
              <SeparateAddButton
                  tabIndex={-1}
                  type={"button"}
                  title={"+ Add card"}
              >
                <SeparateButtonWrap>
                  <PlusIcon/>
                </SeparateButtonWrap>
              </SeparateAddButton>
            </span>
          </RowBetweenButton>
        </TermRowSeparator>
      </>
  );
};

export default CreateCard;