import React from "react";
import ListItem from "./ListItem";

const List = React.memo(({ students, add }) => {
  console.log("Rendering:List Components");

  return (
    <div className="list">
      <button onClick ={()=>add()}>ADD </button>
      {students?.map( 
        (student) => <ListItem key={student.id} student={student} add={add} /> 
        )
      }
    </div>
  );
});

export default List;
