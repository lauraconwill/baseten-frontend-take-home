import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import SelectedResult from "./SelectedResult";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search } from "./API";
import { SearchResultEntity } from "./types";

const QuickSearch: FunctionComponent = () => {
  /*
   * TODO: implement setting selected result
   * const [selected, setSelected] = useState("");
   */
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState<Array<SearchResultEntity>>(
    []
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawResults = search(searchTerm);
    setSearchResults(rawResults);
  };

  return (
    <>
      <SelectedResult />
      <SearchInput
        searchTerm={searchTerm}
        onChange={handleOnChange}
        handleSearch={handleSearch}
      />
      <SearchResults searchResults={searchResults} />
    </>
  );
};

export default QuickSearch;
