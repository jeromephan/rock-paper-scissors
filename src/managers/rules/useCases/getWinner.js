import choices from '../../../macros/choices';
import { draw } from '../../../macros/result';

const { type: { paper, scissors, rock } } = choices;

const winningMap = {
  paper: rock,
  scissors: paper,
  rock: scissors,
};

export const getWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return draw;
  }

  return computerChoice === winningMap[playerChoice] ? computerChoice : playerChoice;
};

export default {
    getWinner,
}