

export const getBasketballMatchTypes = () => [
  '5v5', 
  '3v3', 
  '2v2', 
  '1v1', 
  'King of the Court', 
  '21-Ball'
];

export const getBasketballSettings = () => ({
  gameDuration: [1, 2, 4, 7, 10, 12, 15],
  numberOfPeriods: [1, 2, 4],
  setPoint: [5, 7, 11, 15, 21, 50, 100],
  courtType: ['Indoor', 'Outdoor'],
  shotClock: [8, 12, 14, 24],
});

export const getBasketballStats = () => [
  "2PT",
  "3PT",
  "FT",
  "2PT miss",
  "3PT miss",
  "FT miss",
  "AST",
  "REB", 
  "STL", 
  "BLK", 
  "TO", 
  "FLS"
];

export const getBasketballStatsValue = () => ({
  '2PT': 2,
  "3PT": 3,
  "FT": 1,
  "2PT miss": 1,
  "3PT miss": 1,
  "FT miss": 1,
  "AST": 1,
  "REB": 1, 
  "STL": 1, 
  "BLK": 1, 
  "TO": 1, 
  "FLS": 1
});


