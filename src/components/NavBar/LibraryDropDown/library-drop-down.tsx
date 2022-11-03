import React, {useRef} from 'react';
import {
  Container,
  DownContainer,
  ScrollContainer,
  ScrollContentContainer,
  Item,
  ItemContainer,
  ItemTitle,
  ItemAuthorName
} from "./library-drop-down.styles";
import useGetStudySets from "../../../hooks/useGetStudySets";
import setDataInterface from "../../../types/set-data.types";
import {auth} from "../../../firebase-config";
import useOutsideClickAndScroll from "../../../hooks/useOutsideClickAndScroll";

interface Props {
  toggleLibrary: () => void,
  buttonRef: React.Ref<HTMLDivElement>
}

const LibraryDropDown: React.FC<Props> = ({toggleLibrary, buttonRef}) => {

  const [studySets, setStudySets] = useGetStudySets(true);
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
                      {studySets.map((studySet: setDataInterface) =>(
                          <React.Fragment key={studySet.id}>
                            {(!studySet.isPrivate || studySet.author.id === auth.currentUser?.uid) &&
                                <Item href={`/${studySet.id}`}>
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