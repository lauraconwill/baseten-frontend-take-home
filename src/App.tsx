import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Trigger from "./Trigger";
import QuickSearch from "./QuickSearch";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  function handleTrigger() {
    setShowSearch(!showSearch);
  }

  return (
    <div className="Wrapper">
      <Header />
      <div className="SearchWrapper">
        <Trigger onTrigger={handleTrigger} />
        {showSearch && <QuickSearch />}
      </div>
    </div>
  );
}

export default App;
