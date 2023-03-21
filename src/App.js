import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  // sets the first move to be X by default
  const [xIsNext, setXIsNext] = useState(true);
  // squares variable is initialized with an array of 9 null values using the Array() constructor and the fill() method
  // The useState hook returns an array with two elements: the current state value and a function to update that value
  // squares is the current state value of an array with 9 null elements, and setSquares is a function that can be used to update the state value of squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  //prevents changing of a square's state when clicked for the second time
  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    //creates a copy of the squares array instead of modifying the existing array (brings about immutability)
    const nextSquares = squares.slice();
    // checks if the previous move is X and sets next to O
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    // updates the state value of each square when clicked
    setSquares(nextSquares);
    //updates the player move to not X
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
