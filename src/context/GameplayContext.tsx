/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

type GameplayContextType = {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  filled: string[];
  setFilled: React.Dispatch<React.SetStateAction<string[]>>;
  winConditions: number[][];
  winner: string;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
  winPosition: string;
  setWinPosition: React.Dispatch<React.SetStateAction<string>>;
};

const GameplayContext = React.createContext<GameplayContextType>({
  turn: "",
  setTurn: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  filled: [],
  setFilled: function (value: React.SetStateAction<string[]>): void {
    throw new Error("Function not implemented.");
  },
  winConditions: [],
  winner: "",
  setWinner: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
  winPosition: "",
  setWinPosition: function (value: React.SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
});

export const useGameplay = () => {
  return React.useContext(GameplayContext);
};

const GameplayProvider = ({ children }: { children: React.ReactNode }) => {
  const [turn, setTurn] = useState("");
  const [filled, setFilled] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");
  const [winPosition, setWinPosition] = useState("");
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const value: {
    turn: string;
    setTurn: React.Dispatch<React.SetStateAction<string>>;
    filled: string[];
    setFilled: React.Dispatch<React.SetStateAction<string[]>>;
    winConditions: number[][];
    winner: string;
    setWinner: React.Dispatch<React.SetStateAction<string>>;
    winPosition: string;
    setWinPosition: React.Dispatch<React.SetStateAction<string>>;
  } = {
    turn,
    setTurn,
    filled,
    setFilled,
    winConditions,
    winner,
    setWinner,
    winPosition,
    setWinPosition,
  };
  return (
    <GameplayContext.Provider value={value}>
      {children}
    </GameplayContext.Provider>
  );
};

export default GameplayProvider;
