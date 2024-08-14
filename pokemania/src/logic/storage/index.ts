import { StorageFunctions } from "../../interfaces/Board";

export const saveGameToStorage: StorageFunctions["saveGameToStorage"] = ({ board, turn }) => {
  window.localStorage.setItem('board', JSON.stringify(board));
  window.localStorage.setItem('turn', turn);
};

export const resetGameStorage: StorageFunctions["resetGameStorage"] = () => {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
};