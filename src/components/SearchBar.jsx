import { MapPin, Search, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { searchCities } from "../../Services/WeatherApi";

function SearchBar({
  onSearch,
  onLocationSearch,
  loading,
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] =
    useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const searchRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length > 2) {
        setSearchLoading(true);
        try {
          const result = await searchCities(query);
          setSuggestions(result);
          setShowSuggestions(true);
        } catch (error) {
          console.error("Error searching cities:", error);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);
    return () => clearTimeout(searchTimeout);
  }, [query]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
      setShowSuggestions(false);
    }
    console.log("Searching for:", query);
  };
  const clearSearch = () => {
    setQuery("");
    setShowSuggestions(false);
    setSuggestions([]);
  };
  const handleSuggestionClick = (city) => {
    const cityName = city.state
      ? `${city.name},${city.state}`
      : city.name;
    onSearch(cityName);
    setQuery("");
    setShowSuggestions(false);
  };
  return (
    <div className="relative w-full mx-w-2xl">
      <form className="relative" onSubmit={handleSubmit}>
        <div className="realtive group">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2
            text-gray/68 w-5 h-5 group-focus:focus-within:text-white 
            transition-all"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any city worldwide..."
            className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white  placeholder-white/50  focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
            disabled={loading}
          />
          {/*   conditional rendering*/}
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-14 top-1/2 transform -translate-y-1/2
       text-white/50 hover:text-white transition-all p-1 rounded-full
        hover:bg-white/10 "
            >
              <X className="w-4 h-4 " />
            </button>
          )}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2
       text-white/50 hover:text-white transition-all p-1 rounded-full
        hover:bg-white/10 "
            onClick={onLocationSearch}
            disabled={loading}
          >
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/*conditional rendering */}
    {showSuggestions && (
      
  <div
    className="absolute top-full left-0 right-0 mt-3 bg-white/10 backdrop-blur-xl
      border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50"
  >
    {searchLoading ? (
      <div className="p-6 text-center text-white/70">
        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white mx-auto"></div>
        <p className="mt-2">Searching cities...</p>
      </div>
    ) : suggestions.length === 0 ? (
      <div className="p-6 text-center text-white/70">
        <p>No cities found</p>
      </div>
    ) : (
      suggestions.map((city, index) => (
        <button
          onClick={() => handleSuggestionClick(city)}
          key={`${city.name}-${city.country}-${index}`}
          className="w-full px-6 py-4 text-left hover:bg-white/10 transition-all
            duration-200 flex items-center justify-between group border-b border-white/10 last:border-b-0"
        >
    
<div>
      
          <div className="font-medium text-white group-hover:text-white/90">
            {city.name}
            {city.state && `, ${city.state}`}
          </div>
           
          <div className="text-sm text-white/60">{city.country}</div>
          </div>
          <Search className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all" />
        </button>
      ))
    )}
  </div>

)}

    </div>
  );
}

export default SearchBar;
