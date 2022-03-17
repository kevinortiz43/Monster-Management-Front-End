import React from "react";

export default function SearchMonster(props) {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        placeholder="Search by name"
        onChange={(event1) => {
          props.setSearchByName(event1.target.value);
        }}
      />
    </div>
  );
}
