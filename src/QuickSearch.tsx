import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import Trigger from "./Trigger";
import SelectedResult from "./SelectedResult";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search } from "./API";
import { Model } from "./types";
import { SearchContext } from "./SearchProvider";

const QuickSearch: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const { setSelected } = useContext(SearchContext);

  const [searchResults, setSearchResults] = useState<Array<Model>>([]);

  const handleTrigger = () => {
    setShowSearch(!showSearch);
  };

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

  /**
   * Keyboard shortcuts for showing and hiding search
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey === true || event.metaKey === true) {
        if (event.key === "k") {
          setShowSearch(true);
        }
      }

      if (event.key === "Escape") {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="SearchWrapper">
      <Trigger onTrigger={handleTrigger} />
      {showSearch && (
        <div className="QuickSearch">
          <SearchInput
            searchTerm={searchTerm}
            onChange={handleOnChange}
            handleSearch={handleSearch}
          />
          <SelectedResult />
          <SearchResults searchResults={searchResults} />
        </div>
      )}
    </div>
  );
};

export default QuickSearch;
