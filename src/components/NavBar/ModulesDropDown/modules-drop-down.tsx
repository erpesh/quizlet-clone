import React, {useRef} from 'react';
import {Container, DownContainer, Item, LinkStyled} from './modules-drop-down.styles';
import useOutsideClickAndScroll from "../../../hooks/useOutsideClickAndScroll";

interface Props {
  activePage: string,
  id: string,
  toggleModulesDropDown: () => void,
  buttonRef: React.RefObject<HTMLButtonElement>
}

const ModulesDropDown: React.FC<Props> = ({activePage, id, toggleModulesDropDown, buttonRef}) => {

  const links = [
    {name: "Flashcards", link: `/set/${id}/flashcards`},
    {name: "Learn", link: `/set/${id}/learn`},
    {name: "Test", link: `/set/${id}/test`},
    {name: "Match", link: `/set/${id}/match`}
  ].filter(item => item.name.toLowerCase() !== activePage);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClickAndScroll(ref, buttonRef, toggleModulesDropDown);

  return (
    <Container ref={ref}>
      <DownContainer>
        <div tabIndex={-1} style={{
          position: "relative",
          zIndex: 301,
          minWidth: "16.25rem"
        }}>
          <Item>
            {links.map(item => <LinkStyled
              key={item.name}
              to={item.link}
              onClick={toggleModulesDropDown}
            >{item.name}</LinkStyled>)}
          </Item>
          <Item>
            <LinkStyled onClick={toggleModulesDropDown} to={"/"}>Home</LinkStyled>
            <LinkStyled onClick={toggleModulesDropDown} to={`/set/${id}`}>Set page</LinkStyled>
          </Item>
        </div>
      </DownContainer>
    </Container>
  );
};

export default ModulesDropDown;