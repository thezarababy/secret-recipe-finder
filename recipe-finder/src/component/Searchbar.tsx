import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import type { SearchBarProps } from "../interface/Interface"; // optional: your interface file

const Searchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    // If parent passed an onSearch handler use it (gives parent control).
    // Otherwise, navigate to /search?query=... so SearchPage can read the URL.
    if (onSearch) {
      onSearch(q);
    } else {
      navigate(`/search?query=${encodeURIComponent(q)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="search"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" w-40 border-2 border-orange-500 md:w-80 px-4 py-2 rounded-lg focus:outline-none"
      />
      <button type="submit" className="text-gray-600 hover:text-black">
        <FcSearch size={28} />
      </button>
    </form>
  );
};

export default Searchbar;
