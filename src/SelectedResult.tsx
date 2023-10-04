import React, { FunctionComponent, memo } from "react";

interface SelectedResultProps {
  selected?: string;
}

const SelectedResult: FunctionComponent<SelectedResultProps> = ({
  selected = "Nothing selected",
}) => {
  /*
   * TODO: Decide on UI for when nothing is selected
   * If nothing is selected because search hasn't been run yet or there
   * are no results, should "Selected result:" still be shown?
   *
   * Also, make sure that `selected` is reset whenever a new search
   * occurs because the item that was previously selected may not
   * be in the new search results set
   */
  const selectedString = selected.toString();
  return (
    <div className="SelectedResult" data-cy="selected-output">
      <p>Selected Result:</p>
      <p>{selectedString}</p>
    </div>
  );
};

export default memo(SelectedResult);
