import React, {useState} from 'react';
import {ReactComponent as SearchIcon} from "../../assets/images/search-icon.svg";
import {SearchContainer, LogoContainer, SearchInput} from "./search.styles";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

const Search = () => {

  const [searchValue, setSearchValue] = useState("");
  const studySetsCollectionRef = collection(db, "studySets");

  const searchSubmit = (e: any) => {
    e.preventDefault();
    const getStudySets = async () => {
      const data = await getDocs(studySetsCollectionRef);
      console.log(data.docs.map(doc => doc.data()))
    }
    getStudySets()
  }

  return (
      <SearchContainer onSubmit={searchSubmit}>
        <LogoContainer>
          <SearchIcon/>
        </LogoContainer>
        <SearchInput
            placeholder="Search study sets"
            onChange={e => setSearchValue(e.target.value)}
        />
      </SearchContainer>
  );
};

export default Search;