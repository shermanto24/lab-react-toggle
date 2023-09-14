import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  const [currentBoard, setCurrentBoard] = useState(0);

  const toggleBoardSwitch = (event) => {
    setCurrentBoard(currentBoard + 1); // can move the % here
  }

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === currentBoard % props.numBoards;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={toggleBoardSwitch}>Toggle</button>
    </div>
  );
}

export default BoardSwitcher;
