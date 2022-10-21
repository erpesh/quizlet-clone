import React, {useState} from 'react';
import { AssemblyInput } from '../../../components/AssemblyInput/assembly-input';
import { BlueButton } from '../../../components/BlueButton/blue-button.styles';
import { testType } from '../interfaces';
import { 
  NumberContainer, 
  NumberContent, 
  TopPart,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap, 
  Word,
  WordContainer,
  WordHandler
} from '../test-page.styles';
import { 
  BottomPart, 
  WrittenContainer, 
  AnswerTitle,
  AnswerTitleSection,
  AnswerForm,
  ButtonContainer,
  InputContainer
} from './written.styles';

interface Props {
  orderNumber: number,
  totalNumber: number,
  index: number,
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const Written: React.FC<Props> = ({ orderNumber, totalNumber, index, testSet, setTestSet }) => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    let writtenItems = [...testSet.written];
    let writtenItem = {...testSet.written[index]};
    writtenItem.isCorrect = event.target.value === writtenItem.term;
    writtenItems[index] = writtenItem;
    console.log({...testSet, written: writtenItems})
    setTestSet({...testSet, written: writtenItems});
  }

  return (
    <WrittenContainer tabIndex={-1}>
      <div>
        <TopPart>
          <WordTitleWrap>
            <WordTitleContainer>
              <TitleWrap>
                <WordTitle>Definition</WordTitle>
              </TitleWrap>
              <TitleCenter />
              <TitleEnd />
            </WordTitleContainer>
          </WordTitleWrap>
          <WordContainer>
            <WordHandler>
              <Word>
                <div>{testSet.written[index].definition}</div>
              </Word>
            </WordHandler>
          </WordContainer>
        </TopPart>
      </div>
      <BottomPart>
        <AnswerTitle>
          <AnswerTitleSection>Your answer</AnswerTitleSection>
        </AnswerTitle>
        <AnswerForm>
          <div>
            <InputContainer>
              <AssemblyInput
                placeholder="Type the answer"
                value={inputValue}
                onChange={handleChange}
              />
            </InputContainer>
          </div>
          <ButtonContainer>
            <BlueButton
              padding={"0.625rem 1rem"}
              radius={".5rem"}
              fontSize={".875rem"}
            >
              Next
            </BlueButton>
          </ButtonContainer>
        </AnswerForm>
      </BottomPart>
      <NumberContainer>
        <NumberContent>{orderNumber + " of " + totalNumber}</NumberContent>
      </NumberContainer>
    </WrittenContainer>
  );
};

export default Written;