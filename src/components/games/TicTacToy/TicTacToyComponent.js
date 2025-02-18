import { useState, useRef, useEffect } from "react";
import Cell from "./Cell.js";

import "./TicTacToyComponent.css";

import cross from "../../../assets/img/games/tic-tac-toe/cross.png";
import circle from "../../../assets/img/games/tic-tac-toe/circle.png";

export default function TicTacToyComponent() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const subtitleRef = useRef(null);

  const handleWinner = (winner) => {
    if (winner === "cross") {
      subtitleRef.current.innerHTML = `<img src="${cross}" alt="cross">&nbsp;Wins`;
    } else {
      subtitleRef.current.innerHTML = `<img src="${circle}" alt="circle">&nbsp;Wins`;
    }
    setLock(true);
  };

  const handleWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      handleWinner(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      handleWinner(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      handleWinner(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      handleWinner(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      handleWinner(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      handleWinner(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      handleWinner(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      handleWinner(data[6]);
    }
  };

  useEffect(() => {
    if (!lock) {
      handleWin();
    }
  }, [data, lock]);

  const handleMove = (id) => {
    if (lock) {
      return 0;
    }

    const nextData = data.map((item, i) => {
      if (id !== i) {
        return item;
      } else {
        if (item !== "circle" && item !== "cross") {
          if (count % 2 === 0) {
            setCount(count => count + 1);
            return "circle";
          } else {
            setCount(count => count + 1);
            return "cross";
          }
        } else {
          return item;
        }
      }
    });

    setData(nextData);
  };

  const handleReset = () => {
    subtitleRef.current.innerHTML = "";
    setData(["", "", "", "", "", "", "", "", ""]);
    setLock(false);
    setCount(0);
  };

  return (
    <main className="main">
      <div className="game">
        <h2 className="title">
          It's now&nbsp;<img src={(count % 2 === 0) ? circle : cross} alt={(count % 2 === 0) ? "circle" : "cross"} />'s go
        </h2>
        <div className="board">
          {data.map((item, i) =>
            <Cell
              handleMove={handleMove}
              id={i}
              key={i}
              data={item}
            />
          )}
        </div>
        <h2 className="subtitle" ref={subtitleRef}></h2>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </main>
  );
}
