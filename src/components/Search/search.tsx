import React, {useState} from 'react';
import {ReactComponent as SearchIcon} from "../../assets/images/search-icon.svg";
import {LogoContainer, SearchContainer, SearchInput} from "./search.styles";
import {useNavigate} from "react-router-dom";

const Search = () => {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const searchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`/search/search?value=${searchValue}`)
  }

  return (
    <SearchContainer onSubmit={searchSubmit}>
      <LogoContainer onClick={searchSubmit}>
        <SearchIcon/>
      </LogoContainer>
      <SearchInput
        placeholder="Search study sets"
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </SearchContainer>
  );
};

export default Search;