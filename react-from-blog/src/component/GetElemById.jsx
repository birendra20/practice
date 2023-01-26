import React, { useEffect, useRef } from "react";

const GetElemById = () => {
  const ref = useRef(null);

  useEffect(() => {
    // use document.getElementById()
    const el = document.getElementById("my-element").innerText;
    console.log("1", el);

    // (better) use ref

    const el2 = ref.current.innerText;

    console.log("1ref", el2);
  }, []);

  return (
    <div>
      <h2 ref={ref} id="my-element">
        Some content here
      </h2>
    </div>
  );
};

export default GetElemById;
