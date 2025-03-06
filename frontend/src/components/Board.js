import React from 'react';

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <button className="square" key={i} onClick={() => onClick(i)}>
          {square}
        </button>
      ))}
    </div>
  );
}

export default Board;