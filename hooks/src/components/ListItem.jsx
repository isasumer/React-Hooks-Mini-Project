import React from "react";

const ListItem = ({student, add}) => {
  console.log("Rendering:List Components");

  return (
    <div className="listItem" onClick={() => add(student)}>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
        alt="photo"
      />
      {student?.name}
    </div>
  );
};

export default ListItem;