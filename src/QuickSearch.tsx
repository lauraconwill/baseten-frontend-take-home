import React, { FunctionComponent } from "react";
import SelectedResult from "./SelectedResult";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

const QuickSearch: FunctionComponent = () => {
  // TODO: implement setting selected result
  // const [selected, setSelected] = useState("");
  return (
    <>
      <SelectedResult />
      <SearchInput />
      <SearchResults />
    </>
  );
};

export default QuickSearch;
