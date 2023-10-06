import "./App.css";
import Header from "./Header";
import QuickSearch from "./QuickSearch";
import SearchProvider from "./SearchProvider";

const App = () => (
  <div className="Wrapper">
    <Header />
    <SearchProvider>
      <QuickSearch />
    </SearchProvider>
  </div>
);

export default App;
