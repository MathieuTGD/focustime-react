import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import RoundedButton from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export default function Focus({ addSubject }) {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={setSubject} 
          label="What would you like to focus on?"
          style={styles.textInput} />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.md,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  }
})