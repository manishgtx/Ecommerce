import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="h-5/6 flex flex-col justify-center items-center">
      <div className="flex items-center py-2 px-4 gap-x-4 border border-zinc-300 rounded-lg w-1/3  mb-10">
        <FaSearch />
        <input
          type="search"
          placeholder="Search the metaverse..."
          className="outline-0 grow"
        />
      </div>
      <a href="www.google.com" className="text-lg underline underline-offset-4">or explore</a>
    </div>
  );
};

export default Search;
