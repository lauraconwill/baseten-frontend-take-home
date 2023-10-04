import React, { FunctionComponent, memo } from "react";
import SearchResult from "./SearchResult";
import { SearchResultEntity } from "./types";

interface SearchResultsProps {
  searchResults: Array<SearchResultEntity>;
}

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchResults,
}) => {
  return (
    <div className="SearchResults">
      {searchResults.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Modified</th>
              <th>Type</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((searchResult) => {
              const { item: searchResultItem } = searchResult;
              return (
                <SearchResult
                  key={searchResultItem?.id}
                  searchResultItem={searchResultItem}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default memo(SearchResults);
