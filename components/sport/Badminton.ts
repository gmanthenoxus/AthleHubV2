
export const getBadmintonMatchTypes = () => [
  'Singles', 
  'Doubles', 
  'Mixed Doubles',
];

export const getBadmintonSettings = () => ({
  numberOfSets: [1, 2],
  pointsPerSet: [ 11, 15, 21, 'nill'],
  courtType: ['outdoor', 'indoor' ],
});

export const getBadmintonStats = () => [
  'PTS', 
  'ACE', 
  'FLS',
];

export const getBadmintonStatsValue = () => ({
  PTS: 1, 
  ACE: 1, 
  FLS: 1,
});
