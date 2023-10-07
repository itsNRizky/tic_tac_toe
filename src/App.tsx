import Line from "./components/Line";
import Square from "./components/Square";
import { useGameplay } from "./context/GameplayContext";
import { useEffect, useState } from "react";

function App() {
  const { turn, setTurn, winner, winPosition } = useGameplay();
  const [disabled, setDisabled] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  useEffect(() => {
    setTurn("X");
  }, []);

  useEffect(() => {
    if (winner === "Draw") {
      setIsDraw(true);
      setDisabled(true);
    } else if (winner) {
      setIsDraw(false);
      setDisabled(true);
    }
  }, [winner]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <h1 className="mb-5 font-bold text-5xl text-yellow-500">Tic Tac Toe</h1>
      <h2 className="mb-5 text-2xl text-white">{turn} Turn</h2>
      {winner && (
        <div className="my-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-5 text-white">
            {isDraw ? "Whoops, it's draw!" : `Winner is ${winner}!!`}
          </h2>
          <button
            onClick={() => (window.location.href = "")}
            className="bg-yellow-500 py-2 px-4 rounded-md active:bg-yellow-600"
          >
            Play again!
          </button>
        </div>
      )}
      <div className="relative min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] grid grid-cols-3 gap-2">
        <Square disabled={disabled} num={0} />
        <Square disabled={disabled} num={1} />
        <Square disabled={disabled} num={2} />
        <Square disabled={disabled} num={3} />
        <Square disabled={disabled} num={4} />
        <Square disabled={disabled} num={5} />
        <Square disabled={disabled} num={6} />
        <Square disabled={disabled} num={7} />
        <Square disabled={disabled} num={8} />
        <Line position={winPosition} />
      </div>
    </div>
  );
}

export default App;
