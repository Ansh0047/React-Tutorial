import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>

        {/* GameBoard */}
      </div>
      Log
    </main>
  );
}

export default App;
