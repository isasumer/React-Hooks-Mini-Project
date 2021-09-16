import React, {memo} from "react";
import cw from "../assets/cw.png";

const Header = ({img}) => {
  console.log("Rendering:Header Comp!");

  return (
    <div>
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);