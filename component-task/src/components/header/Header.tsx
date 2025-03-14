import Searchbar from "./Searchbar";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="relative h-60px bg-white flex flex-row items-center">
      <img src={logo} alt="logo-picture" className="absolute left-40px" />
      <Searchbar />
    </div>
  );
};

export default Header;
