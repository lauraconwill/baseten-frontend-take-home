import React, {
  FunctionComponent,
  useContext,
  KeyboardEvent,
  MouseEvent,
} from "react";
import { SearchContext } from "./SearchProvider";

import { DateTime } from "luxon";
import { Model } from "./types";

interface SearchResultProps {
  key: string;
  searchResultItem: Model;
  handleKeyDown: (
    event: KeyboardEvent<HTMLTableRowElement>,
    id: string
  ) => void;
}

const SearchResult: FunctionComponent<SearchResultProps> = ({
  searchResultItem,
  handleKeyDown,
}) => {
  const { id, modified, type, author } = searchResultItem;
  const { setSelected } = useContext(SearchContext);

  const formattedDate = DateTime.fromMillis(modified).toFormat("L/d/yy t");

  const handleClickEvent = (event: MouseEvent<HTMLTableRowElement>) => {
    setSelected(id);
  };

  return (
    <tr
      className="SearchResult"
      id={id}
      tabIndex={0}
      onKeyDown={(event) => handleKeyDown(event, id)}
      onClick={handleClickEvent}
    >
      <td title={id}>{id}</td>
      <td>{formattedDate} </td>
      <td>{type}</td>
      <td>{author ?? "---"}</td>
    </tr>
  );
};

export default SearchResult;
