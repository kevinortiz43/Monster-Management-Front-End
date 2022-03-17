import React, { useState, useEffect } from "react";
import MonsterService from "../services/MonsterService";
import SearchMonster from "./SearchMonster";

import CategoriesViewMonster from "./CategoriesViewMonster";
import ToAddMonster from "./ToAddMonster";

export default function ListMonsters(props) {
  const [searchByName, setSearchByName] = useState("");
  const [monster, setMonster] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await MonsterService.getMonsters();
        setMonster(res.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <SearchMonster setSearchByName={setSearchByName} />
      <ToAddMonster />
      <div className="cards-Container">
        {!loading &&
          monster
            .filter((value) => {
              if (searchByName === "") {
                return true;
              } else if (
                value.creature
                  .toLowerCase()
                  .includes(searchByName.toLowerCase())
              )
                return true;
              else {
                return false;
              }
            })
            .map((monster) => (
              <CategoriesViewMonster monster={monster} key={monster.id} />
            ))}
      </div>
    </div>
  );
}
