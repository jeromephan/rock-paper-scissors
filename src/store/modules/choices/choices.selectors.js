export const getPlayerChoice = ({ choices: { player } }) => player;
export const getComputerChoice = ({ choices: { computer } }) => computer;

const selectors = {
  getPlayerChoice,
  getComputerChoice,
};

export default selectors;
