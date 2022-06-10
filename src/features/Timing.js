import React from 'react'
import { View, StyleSheet } from 'react-native'
import RoundedButton from '../components/RoundedButton'

export default function Timing ({ onChangeTime }) {

  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title=".1" onPress={() => onChangeTime(.1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="5" onPress={() => onChangeTime(5)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={70} title="15" onPress={() => onChangeTime(15)} />
      </View>
    </>
  )
}


const styles = StyleSheet.create(
  {
    timingButton: {
      flex: 1,
      flexDirection: 'row',
    }
  }
);