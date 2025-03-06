import Searchbar from "./Searchbar";

const Header = () => {
    return (
        <div className="relative h-14 bg-purple-400 flex flex-row items-center">
            <p className="absolute left-1/12 hover:underline cursor-pointer text-amber-400 text-3xl font-serif font-bold underline-offset-8 italic">NoteIt 📒</p>
            <Searchbar />
        </div>
    )
}

export default Header;