import React, {useState} from "react";

function Search({formInput}) {
  const [form, setForm] = useState('')

  const handleChange = e => setForm(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    formInput(form)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
