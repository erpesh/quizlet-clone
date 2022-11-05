import React, {useEffect, useState} from 'react';
import {
  Button,
  MainContainer,
  PageContainer,
  PageMainSection,
  ResultCardsContainer,
  ResultListContainer,
  SearchContainer,
  SearchForm,
  SearchIconContainer,
  SearchInput,
} from "./search-page.styles";
import colors from "../../assets/colors";
import {ReactComponent as SearchIcon} from "../../assets/images/search-icon.svg";
import {FiX} from "react-icons/fi";
import H3 from '../../layouts/headers.styles';
import useGetStudySets from "../../hooks/useGetStudySets";
import ResultItem from "./ResultItem/result-item";
import Preview from "./Preview/preview";
import {useSearchParams} from "react-router-dom";
import {IStudySet} from "../../types";

const SearchPage = () => {

  const [query, setQuery] = useSearchParams();
  const [studySets, setStudySets] = useGetStudySets(true);
  const [searchedStudySets, setSearchedStudySets] = useState<IStudySet[]>([]);
  const [activeSet, setActiveSet] = useState<IStudySet | null>(null);
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    if (studySets) {
      setActiveSet(studySets[0])
      setSearchedStudySets(studySets);
      const value = query.get('value');
      setSearchInputValue(value ? value : "");
    }
  }, [studySets])

  useEffect(() => {
    if (!studySets)
      return;
    let studySetsClone = [...studySets].filter(item => {
      return item.title.toLowerCase().includes(searchInputValue?.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInputValue?.toLowerCase());
    });
    setSearchedStudySets(studySetsClone);
    setQuery({value: searchInputValue});
  }, [searchInputValue, studySets])

  return (
    <PageContainer>
      {searchedStudySets && activeSet && <div style={{width: "100%"}}>
        <section style={{backgroundColor: colors.whiteColor, paddingBottom: "2rem"}}>
          <SearchContainer>
            <SearchForm>
              <SearchIconContainer>
                <SearchIcon/>
              </SearchIconContainer>
              <SearchInput
                type={"text"}
                placeholder={"Search study sets"}
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
              />
              {searchInputValue &&
                <Button
                  radius={"50%"}
                  padding={"0.375rem"}
                  onClick={() => setSearchInputValue("")}
                >
                  <FiX/>
                </Button>}
            </SearchForm>
          </SearchContainer>
        </section>
        <PageMainSection>
          <MainContainer>
            <ResultCardsContainer>
              <H3>Study sets</H3>
              <ResultListContainer>
                {searchedStudySets.map((item: IStudySet) =>
                  <ResultItem
                    key={item.id}
                    studySet={item}
                    activeSet={activeSet}
                    setActiveSet={setActiveSet}
                  />)}
              </ResultListContainer>
            </ResultCardsContainer>
            <Preview studySet={activeSet}/>
          </MainContainer>
        </PageMainSection>
      </div>}
    </PageContainer>
  );
};

export default SearchPage;