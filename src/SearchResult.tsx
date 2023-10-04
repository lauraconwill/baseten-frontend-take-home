import React, { FunctionComponent } from "react";
import { DateTime } from "luxon";
import { Model } from "./types";

interface SearchResultProps {
  key: string;
  searchResultItem: Model;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({
  searchResultItem,
}) => {
  const { id, modified, type, author } = searchResultItem;

  const formattedDate = DateTime.fromMillis(modified).toFormat("L/d/yy t");

  return (
    <tr className="SearchResult">
      <td title={id}>{id}</td>
      <td>{formattedDate} </td>
      <td>{type}</td>
      <td>{author ?? "---"}</td>
    </tr>
  );
};

export default SearchResult;
