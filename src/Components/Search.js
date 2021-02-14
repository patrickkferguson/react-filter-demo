function Search(props) {
  return (
    <div>
      <input type="text" placeholder="Search for..." onChange={props.onChange}/>
    </div>
  );
}

export default Search;