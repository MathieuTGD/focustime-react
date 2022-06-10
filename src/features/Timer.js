import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import Countdown from '../components/Countdown';
import { colors } from '../utils/colors';
import RoundedButton from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/sizes';
import { ProgressBar } from 'react-native-paper';
import Timing from './Timing'
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  0.1 * ONE_SECOND_IN_MS,
  0.1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

export default function Timer({ focusSubject, clearSubject, onTimerEnd }) {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);


  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <ProgressBar
          color={colors.white}
          style={styles.bar}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        )}
        
      </View>
      <View style={styles.cancelWrapper}>
        <RoundedButton title="x" size={50} onPress={clearSubject} />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.20,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
  },
  cancelWrapper: {
    flex: 0.10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
  },
  wrapper: {
    paddingTop: spacing.md,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
    textAlign: 'center',
  },
  task: {
    color: colors.lightblue,
    fontSize: fontSizes.lg,
    textAlign: 'center',
  },
  bar: {
    height: spacing.sm,
  },
});
