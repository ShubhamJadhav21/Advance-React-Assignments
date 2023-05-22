import React, { useState, useEffect } from "react";
import Input from "../../Atoms/Input/Input";
import style from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [states, setStatesData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  function searchState(e) {
    const inputState = e.target.value;
    setSearch(inputState);
  }

  useEffect(() => {
    setLoading(true);

    fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
      .then((data) => {
        setStatesData(data.states);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredStates = states.filter((state) =>
    state.state_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={style.searchBar}>
      <Input
        placeholderValue="Search States ..."
        icon={<SearchIcon />}
        className={style.inputState}
        onChange={searchState}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={style.stateData}>
          {filteredStates.map((state) => (
            <li key={state.state_id}>{state.state_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
