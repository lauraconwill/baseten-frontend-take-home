import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Placeholder } from "./Placeholder";
import { Trigger } from "./Trigger";
import { SelectedOutput } from "./SelectedOutput";

function App() {
  const [selected, setSelected] = useState("");

  function handleTrigger() {
    setSelected("No implementation; unhandled trigger");
  }

  return (
    <div className="Wrapper">
      <Header />
      <div className="SearchWrapper">
        <Trigger onTrigger={handleTrigger} />
        <SelectedOutput selected={selected} />
        {/* Replace the Placeholder component below with your implementation */}
        <Placeholder />
      </div>
    </div>
  );
}

export default App;
