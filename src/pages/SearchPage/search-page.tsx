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
import ResultItem from "./ResultItem/result-item";
import Preview from "./Preview/preview";
import {IStudySet} from "../../types";
import useSearch from "../../hooks/useSearch";
import PreviewMobile from "./PreviewMobile/preview-mobile";
import {useState} from "react";

const SearchPage = () => {

  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const {
    searchedStudySets,
    activeSet,
    setActiveSet,
    searchInputValue,
    setSearchInputValue
  } = useSearch();

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
                    setIsMobilePreview={setIsMobilePreview}
                  />)}
              </ResultListContainer>
            </ResultCardsContainer>
            <Preview studySet={activeSet}/>
            {isMobilePreview && <PreviewMobile studySet={activeSet} setIsMobilePreview={setIsMobilePreview}/>}
          </MainContainer>
        </PageMainSection>
      </div>}
    </PageContainer>
  );
};

export default SearchPage;