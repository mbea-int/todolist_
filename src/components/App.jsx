import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const inputData = event.target.value;
    setInputItem(inputData);
  }

  function handleAdd() {
    setListItems((prevValue) => {
      return [...prevValue, inputItem];
    });
    setInputItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputItem} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem) => {
            return <li>{listItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
