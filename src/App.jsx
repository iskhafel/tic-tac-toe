import { useState } from "react";

function Square() {
  // variable
  const [value, setValue] = useState("");

  // event
  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="board">
      {/* component Square harus menerima props */}
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}
