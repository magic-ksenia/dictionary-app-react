import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    return;
  }

  // API documentation https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();
    if (keyword) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      alert(`Enter any word to submit the search.`);
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //  https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>
  return (
    <div className="Dictionary">
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter a word..."
          autoFocus="on"
          onChange={handleKeywordChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
