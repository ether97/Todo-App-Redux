import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, decremented } from "./features/counter/taskSlice";
import { useState } from "react";

function App() {
  const count = useAppSelector((state) => state.task.value);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");

  const handleClick = (action: string) => {
    switch (action) {
      case "ADD_TASK":
        dispatch(incremented(input.toUpperCase()));
        setInput("");
        break;
      case "REMOVE_TASK":
        dispatch(decremented(input.toUpperCase()));
        setInput("");
        break;
      case "REMOVE_PREVIOUS_TASK":
        dispatch(decremented(input.toUpperCase()));
        setInput("");
        break;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "500px",
        fontFamily: "'Zen Dots', cursive",
      }}
      className="App"
    >
      <h1>TASK APP</h1>
      {count.map((item) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{item}</h3>
          <button
            style={{
              height: "50px",
              backgroundColor: "maroon",
              color: "black",
              fontWeight: "bolder",
              fontSize: "1rem",
            }}
            onClick={() => dispatch(decremented(item))}
          >
            &#10005;
          </button>
        </div>
      ))}
      <input
        style={{ fontSize: "2rem", textAlign: "center" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          style={{ backgroundColor: "#023020" }}
          onClick={() => handleClick("ADD_TASK")}
        >
          ADD TASK
        </button>

        <button
          style={{ backgroundColor: "maroon" }}
          onClick={() => handleClick("REMOVE_TASK")}
        >
          REMOVE TASK
        </button>
      </div>
    </div>
  );
}

export default App;
