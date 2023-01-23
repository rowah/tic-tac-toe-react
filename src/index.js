import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//class component example; The Square component that renders a single <button>
class Square extends React.Component {
  constructor(props) {
    super(props);
    //givers the Square component a state (private to this state) and sets its value to null
    //for the square to remember that it got clicked and fill with an "X" mark, we use state which components use to remember things
    //current state value set to null
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button
        className="square"
        //we’re passing a function as the onClick prop
        //state value changes when the button is clicked
        onClick={() => this.setState({ value: "X" })}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
