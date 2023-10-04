import React, { FunctionComponent, memo } from "react";
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
        searchResults.map((searchResult) => (
          <div key={searchResult.item.id}>{searchResult.item.id}</div>
        ))
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default memo(SearchResults);
