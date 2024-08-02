

export const getFootballMatchTypes = () => [
  '5-a-side', 
  '7-a-side', 
  '11v11', 
  '1v1', 
  'Penalty Shootout'
];
export const getFootballSettings = () => ({
  gameDuration: [  5, 7, 10, 15, 30, 45],
  numberOfPeriods: [1, 2],
  pointsPerSet: [1, 2, 5],
  courtType: ['Grass', 'Coal Tar', 'Sand', 'Wood' ],
});

export const getFootballStats = () => [
  'GOAL',
  'AST',
  'FLS'
];


export const getFootballStatsValue = () => ({
  GOAL: 1,
  AST: 1,
  FLS: 1
});