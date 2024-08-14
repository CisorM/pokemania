import { WINNER_COMBOS } from "../helpers/boardConfig"
import { CheckEndGame, CheckWinner } from "../interfaces/Board"

export const checkWinnerFrom: CheckWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame: CheckEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}