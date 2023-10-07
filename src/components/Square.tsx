import { useState } from "react";
import { useGameplay } from "../context/GameplayContext";

const Square = ({ num, disabled }: { num: number; disabled: boolean }) => {
  const [fill, setFill] = useState("");
  const {
    turn,
    setTurn,
    filled,
    setFilled,
    winConditions,
    setWinner,
    setWinPosition,
  } = useGameplay();

  const winnerChecker = (filledValues: string[]) => {
    return winConditions.find((condition) => {
      return (
        filledValues[condition[0]] === turn &&
        filledValues[condition[1]] === turn &&
        filledValues[condition[2]] === turn
      );
    });
  };

  const clickHandler = () => {
    const newFill = turn === "X" ? "X" : "O";
    const newFilled = [...filled];
    newFilled[num] = newFill;
    setFilled(newFilled);
    setFill(newFill);

    setTurn(turn === "X" ? "O" : "X");

    const winner = winnerChecker(newFilled);
    if (winner) {
      setWinPosition(`${winner[0]}${winner[1]}${winner[2]}`);
      setWinner(turn);
    } else if (newFilled.every((value) => value !== "")) {
      setWinner("Draw");
    }
  };
  return (
    <div
      onClick={!disabled ? clickHandler : () => {}}
      className="relative flex justify-center items-center rounded-xl border-[5px] border-yellow-600 w-full h-full text-white font-extrabold text-7xl ease-in-out duration-300 active:scale-75  cursor-pointer"
    >
      <span className="absolute">{fill}</span>
    </div>
  );
};

export default Square;
