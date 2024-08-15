import { ReactNode } from "react";

interface Combination {
  type: string; 
  region: string;
}

export interface SquareProps {
  children: ReactNode;
  isSelected?: boolean;
  updateBoard?: (index: number) => void;
  index?: number;
  combination?: Combination; 
  turn?: string;
	setTurn?: React.Dispatch<React.SetStateAction<string>>;
}

export interface WinnerModalProps {
  winner: boolean | null | string;
  resetGame: () => void;
  isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StorageFunctions {
  saveGameToStorage: (gameState: { board: (null | string)[]; turn: string }) => void;
  resetGameStorage: () => void;
}

export interface CheckEndGame {
  (newBoard: (null | string)[]): boolean;
}

export interface CheckWinner {
 (board: (null | string)[]): null | string;
}
