function Filter(props) {
  function handleFilter(e) {
    props.setFilterTerm(e.target.value);
  }
  return (
    <div className="search-bar">
      <input onChange={handleFilter} type="text" placeholder="search" />
    </div>
  );
}

export default Filter;
