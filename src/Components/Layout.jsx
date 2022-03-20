import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddMonster from "./AddMonster";
import UpdateMonster from "./UpdateMonster";
import DeleteMonster from "./DeleteMonster";
import ViewMonster from "./ViewMonster";
import NavigateButtons from "./NavigateButtons";
import TableMonsters from "./TableMonsters";
import Nav from "./Nav";
import Error from "./Error";

export default function Layout() {
  return (
    <Router>
      <Nav />
      <NavigateButtons />
      <div className="App">
        <Routes>
          <Route path="/" element={<ViewMonster />} />
          <Route path="*" element={<ViewMonster/>} />
          <Route path="/error" element={<Error />} />
          <Route path="/add-monster" element={<AddMonster />} />
          <Route path="/update-monster/:id" element={<UpdateMonster />} />
          <Route path="/delete-monster/:id" element={<DeleteMonster />} />
          <Route path="/view-monster/:id" element={<TableMonsters />} />
        </Routes>
      </div>
    </Router>
  );
}
