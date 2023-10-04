import React, { FunctionComponent } from "react";
import { Model } from "./types";

interface SearchResultProps {
  key: string;
  searchResultItem: Model;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({
  searchResultItem,
}) => {
  const { id, modified, type, author } = searchResultItem;
  return (
    <tr>
      <td>{id}</td>
      <td>{modified} </td>
      <td>{type}</td>
      <td>{author ?? "!!! no author !!!"}</td>
    </tr>
  );
};

export default SearchResult;
