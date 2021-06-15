const Search = () => {
  return (
    <div>
      <h2>Search</h2>
      <div>
        <form>
          <div>
            <input
              placeholder='Vehicle No./RF_TAG/RC No.'
              type='text'
              id='vehicle no'
              required
            />
          </div>
          <div>
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
