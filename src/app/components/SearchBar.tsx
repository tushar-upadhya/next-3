import { ChangeEvent, FormEvent, useState } from "react";

interface ISearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: ISearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl"
    >
      <input
        type="text"
        className="border border-gray-400 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-50 "
        value={query}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-red-500 text-white py-2 rounded-r hover:bg-blue-200 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
