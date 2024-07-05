
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// now in this turns array of objects that contains one object ie. square and other player property to store symbol
export default function GameBoard({ onSelectSquare, turns}) {
  // deriving the information from the props turns which is computed by the state
  let gameBoard = initialGameBoard;

  for(const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(intialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // always male copy of any JS array or object to make changes in that
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

    // onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
