export interface Scores {
  best: number;
  last: number;
}

/**
 * Get the last score and best score from previous games. If no scores were
 * found, set their values to 0
 *
 * @returns the scores
 */
export function getScores(): Scores {
  const last = parseInt(localStorage.getItem('last')) || 0;
  const best = parseInt(localStorage.getItem('best')) || last;

  return { best, last };
}

/**
 * Save the score into the local storage
 *
 * @param score the score
 */
export function saveScore(score: number): void {
  const localBest = parseInt(localStorage.getItem('best')) || 0;
  const best = Math.max(score, localBest);

  localStorage.setItem('best', best.toString());
  localStorage.setItem('last', score.toString());
}
