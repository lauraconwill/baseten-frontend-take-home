import React, {
  FunctionComponent,
  useState,
  useContext,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import SelectedResult from "./SelectedResult";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search } from "./API";
import { SearchResultEntity } from "./types";
import { SearchContext } from "./SearchProvider";

const QuickSearch: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelected } = useContext(SearchContext);

  const [searchResults, setSearchResults] = useState<Array<SearchResultEntity>>(
    []
  );

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSelected("");

      const rawResults = search(searchTerm);
      setSearchResults(rawResults);
    },
    [searchTerm, setSelected]
  );

  return (
    <div className="QuickSearch">
      <SearchInput
        searchTerm={searchTerm}
        onChange={handleOnChange}
        handleSearch={handleSearch}
      />
      <SelectedResult />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default QuickSearch;
