import { createContext, useState } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // const handleChangeSearch = (e) => {
  //   // debounce((e) => {
  //   //   setSearch(e.target.value);
  //   // }, 500);
  //   setSearch(e.target.value);
  // };

  const handleSubmitSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    // navigate("/products");
  };

  const value = {
    search,
    handleSubmitSearch,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export { SearchContext, SearchProvider };
