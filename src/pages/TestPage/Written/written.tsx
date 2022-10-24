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
  index: number,
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const Written: React.FC<Props> = ({ index, testSet, setTestSet }) => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    let writtenItems = [...testSet.written];
    let writtenItem = {...testSet.written[index]};
    writtenItem.isCorrect = event.target.value === writtenItem.term;
    writtenItem.answer = event.target.value;
    writtenItems[index] = writtenItem;
    setTestSet({...testSet, written: writtenItems});
  }

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
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
              onClick={onClickHandler}
              type={"submit"}
            >
              Next
            </BlueButton>
          </ButtonContainer>
        </AnswerForm>
      </BottomPart>
      <NumberContainer>
        <NumberContent>{(testSet.totalLength - testSet.lengths[3] + index + 1) + " of " + testSet.totalLength}</NumberContent>
      </NumberContainer>
    </WrittenContainer>
  );
};

export default Written;