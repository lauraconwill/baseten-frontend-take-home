import React, { FunctionComponent } from "react";

interface TriggerProps {
  onTrigger: () => void;
}

const Trigger: FunctionComponent<TriggerProps> = ({ onTrigger }) => {
  return (
    <div className="Trigger">
      <button
        type="button"
        onClick={() => onTrigger()}
        data-cy="trigger-implmentation"
      >
        Trigger
      </button>
    </div>
  );
};

export default Trigger;
