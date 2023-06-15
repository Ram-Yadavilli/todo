import { useState, useEffect } from "react";

import { v4 } from "uuid";

import Result from "./Result";

import "./App1.css";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const SubmitData = (event) => {
    event.preventDefault();
    const newL = {
      id: v4(),
      name,
      isChecked: false,
    };

    setData((i) => [...i, newL]);
    setName("");
  };

  const del = (id) => {
    const r = data.filter((i) => i.id !== id);
    setData(r);
  };

  const btn = () => {
    localStorage.setItem("a", JSON.stringify(data));
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("a")) !== null) {
      let y = JSON.parse(localStorage.getItem("a"));
      setData(y);
    }
  }, []);

  const che = (id) => {
    const r = data.map((i) => {
      if (i.id === id) {
        return { ...i, isChecked: !i.isChecked };
      }
      return i;
    });
    setData(r);
  };

  return (
    <div className="bg">
      <h1>TODO APPLICATION</h1>
      <form onSubmit={SubmitData}>
        <input
          type="text"
          onChange={nameChange}
          value={name}
          placeholder="Add TodoList....."
        />
        <br />
        <br />
        <button type="submit" className="b">
          ADD
        </button>

        <button type="button" className="b1" onClick={btn}>
          SAVE
        </button>
      </form>

      <div className="bo">
        <h2 className="na">TODO LIST</h2>
        <ul>
          {data.map((i) => (
            <Result detail={i} key={i.id} delBtn={del} cheBtn={che} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
