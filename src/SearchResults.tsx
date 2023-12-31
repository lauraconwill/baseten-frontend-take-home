import React, {
  FunctionComponent,
  memo,
  KeyboardEvent,
  useRef,
  useContext,
  useCallback,
} from "react";
import SearchResult from "./SearchResult";
import { SearchContext } from "./SearchProvider";

import { Model } from "./types";

interface SearchResultsProps {
  searchResults: Array<Model>;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchResults,
}) => {
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const { setSelected } = useContext(SearchContext);

  /**
   * Allowing navigation in table by up and down arrows,
   * and selection by enter key
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTableRowElement>, id: string) => {
      const currentRow = tbodyRef.current?.children.namedItem(id);
      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          (currentRow?.previousElementSibling as HTMLElement)?.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          (currentRow?.nextElementSibling as HTMLElement)?.focus();
          break;
        case "Enter":
          setSelected(id);
          break;
        default:
          break;
      }
    },
    [setSelected]
  );

  return (
    <div className="SearchResults">
      {searchResults.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Last Modified</th>
              <th>Type</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef}>
            {searchResults.map((searchResult) => {
              return (
                <SearchResult
                  key={searchResult?.id}
                  searchResultItem={searchResult}
                  handleKeyDown={handleKeyDown}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="NoResults">No results</div>
      )}
    </div>
  );
};

export default memo(SearchResults);
