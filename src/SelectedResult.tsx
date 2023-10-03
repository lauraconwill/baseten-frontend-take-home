import React, { FunctionComponent } from "react";

type SelectedResultProps = {
  selected?: string;
};

export const SelectedResult: FunctionComponent<SelectedResultProps> = ({
  selected = "Nothing selected",
}) => {
  // TODO: Figure out how we want to handle when nothing is selected
  const selectedString = selected.toString();
  return (
    <div className="SelectedResult" data-cy="selected-output">
      <p>Selected Result:</p>
      <p>{selectedString}</p>
    </div>
  );
};
