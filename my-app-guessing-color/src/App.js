import React, { useState } from "react";

import "../src/";

const theHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

export default function App() {
  const [next, setNext] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [color, setColor] = useState("#" + theHex(6));
  const [array, setArray] = useState(
    shuffle(["#" + theHex(6), "#" + theHex(6), color])
  );

  const shuffleArray = () => {
    let newColor = "#" + theHex(6);
    setColor(newColor);
    setArray(shuffle(["#" + theHex(6), "#" + theHex(6), newColor]));
  };
  
  const checkAnswer = (e) => {
    if (e === color) {
      setScore(score + 1);
      setMessage("You are Correct");
    } else {
      setMessage("You are Wrong...");
    }

    setNext(true);
  };
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        background:"#f6f8fa",
        gap: "1em"
      }}
    >
      <h2>Complete until you have a score of 10</h2>
      <h4>Practice Makes Perfect</h4>
      <div>Score: {score}</div>
      <div
        style={{ width: "350px", height: "350px", border:"3px solid black", borderRadius:"20px", backgroundColor: color }}
      ></div>
      <div style={{ display: "flex", gap: "2em" }}>
        {array.map((item, i) => (
          <button
            onClick={() => checkAnswer(item)}
            key={i}
            style={next ? { background: item } : { background: "white",border:"3px solid black", borderRadius:"10px" }}
          >
            <p>{item}</p>
          </button>
        ))}
      </div>
      {next && (
        <button
          onClick={() => {
            shuffleArray();
            setMessage("");
            setNext(false);
          }}
        >
          Next
        </button>
      )}
      <div>{message}</div>
      <h3>Created by Oscar Ivan Lopez Mateos</h3>
      <a href="https://github.com/Oscar-Lopez-Projects"> Click on my Github</a>
    </div>
    
  );
}
