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
  InputLabelText
} from "./create-card.styles";
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
      <CardContainer>
        <TopPart>

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
  );
};

export default CreateCard;