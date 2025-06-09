import { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTrue, setIsXTrue] = useState(null);
  const checkWin = (squareArr) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (
        squareArr[a] &&
        squareArr[a] === squareArr[b] &&
        squareArr[b] === squareArr[c]
      ) {
        return squareArr[a];
      }
    }

    return null;
  };
  const winner = checkWin(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${isXTrue ? "O" : "X"}`;
  }
  function handleClick(i) {
    if (squares[i]) {
      return;
    }

    const newSquares = [...squares];
    if (!isXTrue) {
      newSquares[i] = "X";
      setSquares(newSquares);
      setIsXTrue(true);
    } else {
      newSquares[i] = "O";
      setSquares(newSquares);
      setIsXTrue(false);
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTrue(null);
  }
  return (
    <>
      <div className="text-6xl font-semibold">{status}</div>
      <div>
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button
        className="text-4xl font-bold px-7 py-5 rounded-3xl hover:bg-gray-800 bg-gray-600 text-white "
        onClick={resetGame}
      >
        Reset
      </button>
    </>
  );
}
