import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  let changeSearch;

  const handleChangeSearch = (e) => {
    changeSearch = e.target.value;
  };

  const handleSearch = (e) => {
    navigate("/products");
    setSearch(changeSearch);
  };

  const value = {
    search,
    handleChangeSearch,
    handleSearch,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
