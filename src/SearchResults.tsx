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

import { SearchResultEntity } from "./types";

interface SearchResultsProps {
  searchResults: Array<SearchResultEntity>;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchResults,
}) => {
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const { setSelected } = useContext(SearchContext);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTableRowElement>, id: string) => {
      event.stopPropagation();

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
              const { item: searchResultItem } = searchResult;
              return (
                <SearchResult
                  key={searchResultItem?.id}
                  searchResultItem={searchResultItem}
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
