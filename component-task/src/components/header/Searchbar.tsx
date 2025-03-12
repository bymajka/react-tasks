import searchIcon from "../../assets/icons/search.svg";
import { SearchbarContext } from "../../App";
import { useContext } from "react";

const Searchbar = () => {
  const searchbarContext = useContext(SearchbarContext);
  return (
    <div className="absolute right-40px">
      <input
        value={searchbarContext.query}
        type="text"
        className=" border-1 rounded-xl w-3xs bg-white border-searchbar-border text-black-override py-2 px-10 outline-placeholder text-sm font-inter placeholder:text-placeholder"
        placeholder="Search"
        onChange={(e) => {
          searchbarContext.setQuery(e.target.value);
        }}
      />
      <img
        src={searchIcon}
        alt="It's zoom icon"
        className="absolute bottom-2.5 left-3"
      />
    </div>
  );
};

export default Searchbar;
