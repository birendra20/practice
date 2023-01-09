import React, { useState } from "react";
import "../App.css";
const ConditionalClass = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOut = () => setIsHovering(false);
  const handleMouseOver = () => setIsHovering(true);

  return (
    <div>
      <div
        className={isHovering ? "bg-salmon" : ""}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Hover ME
      </div>
      <hr />
    </div>
  );
};

export default ConditionalClass;
