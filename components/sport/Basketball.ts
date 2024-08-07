
interface StatCategories {
  [key: string]: string[];
}

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


// src/assets/basketballStats.ts

export const competitiveStats: StatCategories = {
  "5v5": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "OREB", "DREB", "STL", "BLK", "TOV", "FLS", "TECH", "FLAG"],
  "3v3": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "OREB", "DREB", "STL", "BLK", "TOV", "FLS", "TECH", "FLAG"],
  "1v1": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "OREB", "DREB", "STL", "BLK", "TOV", "FLS", "TECH", "FLAG"],
};

export const casualStats: StatCategories = {
  "5v5": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "REB", "STL", "BLK", "FLS", "TOV"],
  "3v3": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "REB", "STL", "BLK", "FLS", "TOV"],
  "1v1": ["PTS", "FGM", "FGA", "3PM", "3PA", "AST", "FT", "FTA", "REB", "STL", "BLK", "FLS", "TOV"],
};




