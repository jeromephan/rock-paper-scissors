import { getWinner } from './getWinner';
import choices from '../../../macros/choices';
import { draw, win, lose } from '../../../macros/result';

const { paper, rock, scissors } = choices.type;

describe('Rock-paper-scissors logic', () => {
  test('should return a win if the player has selected scissors and the cpu selected paper', () => {
    const result = getWinner(scissors, paper);

    expect(result).toBe(win);
  });
  test('should return a win if the player has selected rock and the cpu selected scissors', () => {
    const result = getWinner(rock, scissors);

    expect(result).toBe(win);
  });
  test('should return a win if he has selected paper and the cpu selected rock', () => {
    const result = getWinner(paper, rock);

    expect(result).toBe(win);
  });
  test('should return a draw if the player and the cpu has selected scissors', () => {
    const result = getWinner(scissors, scissors);

    expect(result).toBe(draw);
  });
  test('should return a draw if the player and the cpu has selected rock', () => {
    const result = getWinner(rock, rock);

    expect(result).toBe(draw);
  });
  test('should return a draw if the player and the cpu has selected paper', () => {
    const result = getWinner(paper, paper);

    expect(result).toBe(draw);
  });
  test('should return a lose if the player has selected paper and the cpu selected scissors', () => {
    const result = getWinner(paper, scissors);

    expect(result).toBe(lose);
  });
  test('should return a lose if the player has selected scissors and the cpu selected rock', () => {
    const result = getWinner(scissors, rock);

    expect(result).toBe(lose);
  });
  test('should return a lose if he has selected rock and the cpu selected paper', () => {
    const result = getWinner(rock, paper);

    expect(result).toBe(lose);
  });
});
