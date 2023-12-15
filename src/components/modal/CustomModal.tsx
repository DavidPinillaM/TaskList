import React, { useState } from 'react';
import { Modal, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from '../../constants/theme/color';


export const CustomModal = ({onHandleCancel, onHandleDelete, isModalVisible, selectedTask}) => {

  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainerGeneral}>
        <View style={styles.textModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Detail</Text>
            <View style={styles.modalDetailContainer}>
              <View style={styles.containerTextTask}>
                <Text style={styles.modalDetailMessage}>
                  Are you sure to delete this task?
                </Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
              </View>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                onPress={onHandleCancel}
                style={styles.containerButtonCancel}>
                <Text style={styles.textCancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onHandleDelete}
                style={styles.containerButtonDelete}>
                <Text style={styles.textDelete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainerGeneral: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //borderWidth: 1,
    //borderColor: 'red',
  },
  textModal: {
    width: '90%',
    height:
      Platform.OS === 'android' ? '65%' : Platform.OS === 'ios' ? '50%' : 0,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: colors.backgroundColorModal,
    borderRadius: 20,
  },
  modalContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
    //borderWidth: 2,
    //borderColor: 'blue',
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FBBD58',
  },
  modalDetailContainer: {
    paddingVertical: 20,
    marginBottom:
      Platform.OS === 'android' ? 60 : Platform.OS === 'ios' ? 0 : 0,
  },
  modalDetailMessage: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  containerTextTask: {
    width: Platform.OS === 'android' ? 330 : Platform.OS === 'ios' ? 320 : 0,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    //backgroundColor: 'blue',
  },
  selectedTask: {
    width:
      Platform.OS === 'android' ? '82%' : Platform.OS === 'ios' ? '83%' : 0,
    fontSize: 19,
    color: '#212121',
    textAlign: 'center',
    marginTop: 30,
    marginBottom:
      Platform.OS === 'android' ? 0 : Platform.OS === 'ios' ? 50 : 0,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  modalButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  containerButtonCancel: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FBBD58',
  },
  textCancel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  containerButtonDelete: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#D21313',
    marginLeft: 60,
  },
  textDelete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

