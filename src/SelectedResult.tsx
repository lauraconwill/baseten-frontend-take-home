import React, { FunctionComponent, memo, useContext } from "react";
import { SearchContext } from "./SearchProvider";

const SelectedResult: FunctionComponent = () => {
  const { selected } = useContext(SearchContext);

  return (
    <div className="SelectedResult" data-cy="selected-output">
      {!!selected && (
        <>
          <p>Selected Result:</p>
          <p>{selected}</p>
        </>
      )}
    </div>
  );
};

export default memo(SelectedResult);
