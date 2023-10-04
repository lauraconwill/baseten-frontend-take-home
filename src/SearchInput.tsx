import React, {
  FunctionComponent,
  ChangeEventHandler,
  FormEventHandler,
} from "react";

interface SearchInputProps {
  searchTerm?: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  handleSearch: FormEventHandler<HTMLFormElement>;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  searchTerm = "",
  onChange,
  handleSearch,
}) => {
  return (
    <form className="SearchInput" onSubmit={handleSearch}>
      <input
        id="search-term-field"
        value={searchTerm}
        onChange={onChange}
      ></input>
      <button>Search</button>
    </form>
  );
};

export default SearchInput;
