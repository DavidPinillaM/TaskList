import React from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/theme/color';


export const AddItem = ({placeholder, task, onHandlerChange, buttonText, onHandlerSubmit, isButtonDisabled, style}) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholderTextColor}
        value={task}
        //(onChangeText) ---> me permite acceder al valor del texto directamente
        //onChangeText={text => setTask(text)}
        onChangeText={onHandlerChange}
      />
      {/*(disabled) cuando el usuario no ingrese nada en el campo del texto el boton se mantendra desabilitado*/}
      <TouchableOpacity onPress={onHandlerSubmit} disabled={isButtonDisabled} style={[styles.button, style]}>
        <Text style={styles.textButton}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: Platform.OS === 'android' ? 30 : Platform.OS === 'ios' ? 60 : 0,
    //Es una propiedad abreviada para establecer simultáneamente las propiedades marginLeft y marginRight.
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '75%',
    borderBottomColor: colors.borderBottomColor,
    borderBottomWidth: 1,
    height: 40,
    color: colors.colorInput,
  },
  button: {
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  textButton: {
    fontSize: 16,
    color: 'white'
  }
});

