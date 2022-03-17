import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MonsterService from "../services/MonsterService";
import ToAddMonster from "./ToAddMonster";

const columns = [

  { field: "creature", headerName: "CREATURE", width: 170 },
  { field: "alignment", headerName: "ALIGNMENT", width: 170 },
  { field: "classification", headerName: "CLASSIFICATION", width: 170 },
  { field: "armor", headerName: "ARMOR", width: 170 },
  { field: "challenge", headerName: "CHALLENGE", width: 170 },
  { field: "health", headerName: "HEALTH", width: 170 },
  { field: "legendary", headerName: "LEGENDARY", width: 120 },
];
const TableMonsters = () => {
  const [loading, setLoading] = useState(true);
  const [monster, setMonster] = useState([]);

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
    <div style={{ height: 500, width: "100%" }}>
      <ToAddMonster />
      {!loading && (
        <DataGrid
          key={monster.id}
          rows={monster}
          columns={columns}
          options={{
            search: true,
            filtering: true,
            paging: true,
          }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      )}
    </div>
  );
};
export default TableMonsters;
