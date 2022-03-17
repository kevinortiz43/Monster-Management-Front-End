import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { FcEmptyTrash } from "react-icons/fc";
function CrudButtons(props) {
  return (
    <div className="categoryButtons">
      <button
        className="crudButtons"
        onClick={() => {
          props.setUpdating(!props.updating);
          props.onSave();
        }}
      >
        <GrDocumentUpdate />
      </button>

      <button
        className="crudButtons"
        onClick={() => props.deleteMonster(props.monster.id)}
      >
        <FcEmptyTrash />{" "}
      </button>
    </div>
  );
}

export default CrudButtons;
