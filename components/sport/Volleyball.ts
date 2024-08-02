import React from 'react';

export const getVolleyballMatchTypes = () => [
  '6v6', 
  '4v4', 
  '2v2'
];
export const getVolleyballSettings = () => ({
  numberOfSets: [1, 2],
  pointsPerSet: [ 11, 15, 21, 25, 'nill'],
  courtType: ['Beach', 'outdoor', 'indoor' ],
});

export const getVolleyballStats = () => [
  'PTS', 
  'ACE', 
];

export const getVolleyballStatsValue = () => ({
  PTS: 1, 
  ACE: 1
});