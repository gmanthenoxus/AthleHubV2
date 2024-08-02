

export const getTableTennisMatchTypes = () => [
  'Singles', 
  'Doubles', 
  'Mixed Doubles'
];
export const getTableTennisSettings = () => ({
  numberOfSets: [1, 3, 5],
  pointsPerSet: [ 7, 11, 15, 21],
  courtType: ['outdoor'] ,
});

export const getTableTennisStats = () => [
  'PTS', 
  'ACE', 
];

export const getTableTennisStatsValue = () => ({
  PTS: 1, 
  ACE: 1
});

