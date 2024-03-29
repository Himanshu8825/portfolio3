import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactEditor = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <div>{value}</div>
    </div>
  );
};

export default ReactEditor;
