const Finder = ({ inputHandler, inputValue, show }) => {
  if (show === null) return null;
  return (
    <div className="finder-card">
      <label htmlFor="countriesInp">Find Countries</label>
      <input id="countriesInp" value={inputValue} onChange={inputHandler} />
    </div>
  );
};

export default Finder;
