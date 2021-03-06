import React from "react";
import ListItem from "./ListItem";

const List = React.memo(({ students, add }) => {
  console.log("Rendering:List Components");

  return (
    <div>
      <button onClick={() => add()}>ADD </button>
      <div className="list">
        {students?.map((student) => (
          <ListItem key={student.id} student={student} add={add} />
        ))}
      </div>
    </div>
  );
});

export default List;
