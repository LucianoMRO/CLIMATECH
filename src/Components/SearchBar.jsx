function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Digite o nome de uma cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Buscando..." : "Pesquisar"}
      </button>
    </form>
  );
}

export default SearchBar;