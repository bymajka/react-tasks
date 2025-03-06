import searchIcon from "../../assets/icons/search_icon.svg";

const Searchbar = () => {
    return (
        <div className="absolute right-1/12">
            <input type="text" className=" border-2 rounded-md w-2xs bg-amber-200 border-amber-50 text-purple-700 pl-2 outline-amber-800 pr-8 py-1" />
            <img src={searchIcon} alt="It's zoom icon" className="absolute top-1.5 right-2 invert" />
        </div>
    )
}

export default Searchbar;