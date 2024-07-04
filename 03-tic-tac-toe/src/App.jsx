import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>

        {/* GameBoard */}
        <GameBoard></GameBoard>
      </div>
      Log
    </main>
  );
}

export default App;
