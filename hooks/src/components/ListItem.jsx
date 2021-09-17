import React from "react";

const ListItem = ({student, add}) => {
  console.log("Rendering:List Item");

  return (
    <div className="listitem" >
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${student.id}.svg`}
        alt="photo"
      />
      {student?.name}
    </div>
  );
};

export default ListItem;