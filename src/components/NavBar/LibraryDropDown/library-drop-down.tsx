import React, {useRef} from 'react';
import {
  Container,
  DownContainer,
  Item,
  ItemAuthorName,
  ItemContainer,
  ItemTitle,
  ScrollContainer,
  ScrollContentContainer
} from "./library-drop-down.styles";
import useGetStudySets from "../../../hooks/useGetStudySets";
import {IStudySet} from "../../../types";
import {auth} from "../../../firebase-config";
import useOutsideClickAndScroll from "../../../hooks/useOutsideClickAndScroll";
import {useLocation} from "react-router-dom";

interface Props {
  toggleLibrary: () => void,
  buttonRef: React.RefObject<HTMLDivElement>
}

const LibraryDropDown: React.FC<Props> = ({toggleLibrary, buttonRef}) => {

  const [studySets, setStudySets] = useGetStudySets(true, true);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClickAndScroll(ref, buttonRef, toggleLibrary);

  return (
    <Container ref={ref}>
      {studySets && <DownContainer>
        <div tabIndex={-1} style={{
          position: "relative",
          zIndex: 301,
          minWidth: "16.25rem"
        }}>
          <ScrollContainer>
            <ScrollContentContainer>
              {studySets.map((studySet: IStudySet) => (
                <React.Fragment key={studySet.id}>
                  {(!studySet.isPrivate || studySet.author.id === auth.currentUser?.uid) &&
                    <Item
                      to={`/set/${studySet.id}`}
                      onClick={toggleLibrary}
                    >
                      <ItemContainer>
                        <ItemTitle>{studySet.title}</ItemTitle>
                        <ItemAuthorName>{studySet.author.name}</ItemAuthorName>
                      </ItemContainer>
                    </Item>
                  }
                </React.Fragment>))}
            </ScrollContentContainer>
          </ScrollContainer>
        </div>
      </DownContainer>}
    </Container>
  );
};

export default LibraryDropDown;