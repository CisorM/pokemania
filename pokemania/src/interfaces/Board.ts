import { ReactNode } from "react";

export interface SquareProps {
  children: ReactNode;
  isSelected?: boolean;
  updateBoard?: (index: number) => void;
  index?: number;
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
