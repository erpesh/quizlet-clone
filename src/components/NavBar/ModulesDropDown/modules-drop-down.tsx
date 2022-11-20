import React, {useRef} from 'react';
import {Container, DownContainer, Item, Link} from './modules-drop-down.styles';
import useOutsideClickAndScroll from "../../../hooks/useOutsideClickAndScroll";

interface Props {
  activePage: string,
  id: string,
  toggleModulesDropDown: () => void,
  buttonRef: React.RefObject<HTMLButtonElement>
}

const ModulesDropDown: React.FC<Props> = ({activePage, id, toggleModulesDropDown, buttonRef}) => {

  const links = [
    {name: "Flashcards", link: `/${id}/flashcards`},
    {name: "Learn", link: `/${id}/learn`},
    {name: "Test", link: `/${id}/test`},
    {name: "Match", link: `/${id}/match`}
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
            {links.map(item => <Link key={item.name} href={item.link}>{item.name}</Link>)}
          </Item>
          <Item>
            <Link href={"/"}>Home</Link>
            <Link href={`/${id}`}>Set page</Link>
          </Item>
        </div>
      </DownContainer>
    </Container>
  );
};

export default ModulesDropDown;