// src/features/liveGame/GameClock.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const GameClock = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <Text>Game Clock: {formatTime(time)}</Text>
      <Button onPress={handleStartStop} title={isRunning ? 'Stop' : 'Start'} />
      <Button onPress={handleReset} title="Reset" />
    </View>
  );
};

export default GameClock;
