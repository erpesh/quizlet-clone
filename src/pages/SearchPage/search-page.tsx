import React, {useEffect, useState} from 'react';
import {
  PageContainer,
  PageMainSection,
  SearchContainer,
  SearchForm,
  SearchIconContainer,
  SearchInput,
  Button,
  ResultCardsContainer,
  MainContainer,
  ResultListContainer,
} from "./search-page.styles";
import colors from "../../assets/colors";
import {ReactComponent as SearchIcon} from "../../assets/images/search-icon.svg";
import {FiX} from "react-icons/fi";
import H3 from '../../layouts/headers.styles';
import useGetStudySets from "../../hooks/useGetStudySets";
import ResultItem from "./ResultItem/result-item";
import setDataInterface from "../../types/set-data.types";
import Preview from "./Preview/preview";

const SearchPage = () => {

  const [studySets, setStudySets] = useGetStudySets(true);
  const [activeSet, setActiveSet] = useState<setDataInterface | null>(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (studySets) setActiveSet(studySets[0]);
  }, [studySets])

  return (
      <PageContainer>
        {studySets && activeSet && <div style={{width: "100%"}}>
            <section style={{backgroundColor: colors.whiteColor}}>
                <SearchContainer>
                    <SearchForm>
                        <SearchIconContainer>
                            <SearchIcon/>
                        </SearchIconContainer>
                        <SearchInput
                            type={"text"}
                            placeholder={"Search study sets"}
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                      {searchInput &&
                          <Button
                              radius={"50%"}
                              padding={"0.375rem"}
                              onClick={() => setSearchInput("")}
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
                          {studySets.map((item: setDataInterface) =>
                              <ResultItem
                                  key={item.id}
                                  studySet={item}
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