import React, { useRef } from "react";

const FileInput = () => {
  // creating ref for input file
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is ", fileObj);
  };

  // reset the file input

  const handleFileInput = (e) => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} type="file" onChange={handleFileChange} />
      <button onClick={handleFileInput}>Reset file Input</button>
      <hr />
    </div>
  );
};

export default FileInput;
