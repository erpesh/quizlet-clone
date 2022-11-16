import React from 'react';
import {
  PageBackgroundColor,
  Wrapper,
  MarginRight,
  DetailsSection,
  DetailsContainer,
  DetailsHeaderWrap,
  DetailsHeaderContainer,
  DetailsHeaderWrapper,
  DisplayInlineBlock,
  UILink,
  AssemblyAvatar,
  CreatedBy,
  DisplayFlex,
  AssemblyButton,
} from "./set-details.styles";
import {IStudySet} from "../../../types";
import {AiFillEdit} from "react-icons/ai";
import {auth} from "../../../firebase-config";
import {useNavigate} from "react-router-dom";

interface Props {
  studySet: IStudySet
}

const SetDetails: React.FC<Props> = ({studySet}) => {

  const navigate = useNavigate();

  const onEditClick = () => {
    navigate(`/${studySet.id}/edit`);
  }

  return (
    <PageBackgroundColor>
      {studySet && <Wrapper>
        <MarginRight>
          <DetailsSection>
            <DetailsContainer>
              <DetailsHeaderWrap>
                <DetailsHeaderContainer>
                  <DetailsHeaderWrapper>
                    <DisplayInlineBlock>
                      <div style={{display: "flex"}}>
                        <div style={{verticalAlign: "middle"}}>
                          <UILink>
                            <AssemblyAvatar
                              src={studySet.author.photoURL ? studySet.author.photoURL : ""}
                              url={studySet.author.photoURL ? studySet.author.photoURL : ""}
                            />
                          </UILink>
                        </div>
                        <div style={{verticalAlign: "initial", paddingLeft: ".5rem"}}>
                          <CreatedBy>Created by</CreatedBy>
                          <UILink style={{pointerEvents: "none", cursor: "default"}}>{studySet.author.name}</UILink>
                        </div>
                      </div>
                    </DisplayInlineBlock>
                  </DetailsHeaderWrapper>
                </DetailsHeaderContainer>
              </DetailsHeaderWrap>
              {auth.currentUser?.uid === studySet.author.id && <div style={{display: "inline-block"}}>
                <DisplayFlex>
                  <AssemblyButton onClick={onEditClick}>
                    <AiFillEdit/>
                  </AssemblyButton>
                </DisplayFlex>
              </div>}
            </DetailsContainer>
          </DetailsSection>
        </MarginRight>
      </Wrapper>}
    </PageBackgroundColor>
  );
};

export default SetDetails;