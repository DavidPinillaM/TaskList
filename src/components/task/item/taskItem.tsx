import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const TaskItem = ({item, onHandlerModal}) => {
  const [showImage, setShowImage] = useState(false);


  const toggleImage = () => {
    setShowImage(!showImage);
  };


  return (
    <View style={styles.containerGeneral}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onHandlerModal(item)}>
        <Text style={styles.itemList}>{item.value}</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <TouchableOpacity onPress={toggleImage}>
          <Image
            style={styles.imgChulito}
            source={
              showImage
                ? require('../../../assets/icons/chulito.png')
                : require('../../../assets/icons/borrar.png')
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeneral: {
    flexDirection: 'row'
  },
  itemContainer: {
    width: '74%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //establece tanto paddingTop como paddingBottom
    paddingVertical: 20,
    paddingHorizontal: 10,
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: 31,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  itemList: {
    fontSize: 19,
    color: '#FBBD58',
    fontWeight: 'bold',
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 15,
    marginBottom: 5,
  },
  imgChulito: {
    width: 50,
    height: 50
  }
});

