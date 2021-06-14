function TableSearch(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={props.value}
        onChange={props.handleInput}
      />
      <span className="input-group-text" id="basic-addon2">
       Поиск
      </span>
    </div>
  );
}

export default TableSearch;