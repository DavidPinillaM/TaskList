import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import { TaskItem } from './item/taskItem';


export const TaskList = ({tasks, onHandlerModal}) => {



  const renderItem = ({item}) => (
    <TaskItem onHandlerModal={onHandlerModal} item={item} />
  );



  //Función que toma un 'item' como argumento y devuelve  el valor del 'item.id osea la clave única para cada elemento de la lista
  const keyExytactor = item => item.id;

  return (
      <FlatList
        //los datos que yo quiero mostrar
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExytactor}
        style={styles.listContainer}
      />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
    marginTop: 50
  },
});

