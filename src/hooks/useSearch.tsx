import {useSearchParams} from "react-router-dom";
import useGetStudySets from "./useGetStudySets";
import {useEffect, useState} from "react";
import {IStudySet} from "../types";

interface ISearchHook {
  searchedStudySets: IStudySet[],
  activeSet: IStudySet | null,
  setActiveSet: (value: IStudySet | null) => void,
  searchInputValue: string,
  setSearchInputValue: (value: string) => void
}

function useSearch() : ISearchHook{
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

  return {
    searchedStudySets: searchedStudySets,
    activeSet: activeSet,
    setActiveSet: setActiveSet,
    searchInputValue: searchInputValue,
    setSearchInputValue: setSearchInputValue
  }
}
export default useSearch;