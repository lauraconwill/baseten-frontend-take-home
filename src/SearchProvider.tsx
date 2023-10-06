import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface SearchContextValue {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

interface SearchProviderProps {
  children: ReactNode;
}

const defaultValue = {
  selected: "",
  setSelected: () => {},
};

export const SearchContext = createContext<SearchContextValue>(defaultValue);

const SearchProvider: FunctionComponent<SearchProviderProps> = ({
  children,
}) => {
  const [selected, setSelected] = useState("");

  return (
    <SearchContext.Provider value={{ selected, setSelected }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
