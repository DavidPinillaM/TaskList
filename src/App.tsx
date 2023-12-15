import React, { useState } from 'react'
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { AddItem } from './components/add-item/addItem';
import { colors } from './constants/theme/color';
import { TaskItem } from './components/task/item/taskItem';
import { TaskList } from './components/task/flatList';
import { CustomModal } from './components/modal/CustomModal';


type TaskItem = {
  id: string;
  value: string;
};



 export const App = () => {
   //Este hook almacena el texto ingresado por el usuario
   const [task, setTask] = useState('');
   //console.log("task:", task);
   //Este hook va a almacenar las tareas ingresadas por el usuario
   const [tasks, setTasks] = useState<TaskItem[]>([]);
   //console.log("tasks:", tasks)
   //Este hook permite hacer visible o no el Modal
   const [isModalVisible, setIsModalVisible] = useState(false);
   //este hook me va a permitir manejar la seleccion de la tarea, que por defecto va a ser null osea no va a estar seleccionada la tarea
   const [selectedTask, setSelectedTask] = useState(null);
   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   //Esta funcion recibe el parametro text que contiene el nuevo valor del texto que el usuario ha ingresado en el TextInput
   const onHandlerChange = text => {
     setTask(text);
     setIsButtonDisabled(!text.trim());
   };

   const onHandlerSubmit = () => {
     //Mediante el Spread Operator (...) se hace una copia de las tareas anteriores por que podria estar llena o tener mas de un elemento
     setTasks([
       ...tasks,
       //Se crea un objeto para las tareas ingresadas por el usuario, por que en este caso quiero que las tareas sean un objeto
       {
         //Se genera un ID único para la tarea usando Math.random().toString()
         id: Math.random().toString(),
         //El valor de la tarea es el texto ingresado por el usuario
         value: task,
       },
     ]);
     //Se reinicia el estado de la tarea a una cadena vacía después de agregarla a la lista de tareas para crear una nueva tarea
     setTask('');
     //Después de agregar una tarea, se deshabilita el botón de nuevo ingreso
     setIsButtonDisabled(true);
   };

   //esta funcion se encarga de alternar la visibilidad del Modal y de actualizar el estado selectedTask con la información de la tarea cuando un usuario selecciona un elemento en la lista.
   const onHandlerModal = item => {
     setIsModalVisible(!isModalVisible);
     //item representa una tarea seleccionada por el usuario
     setSelectedTask(item);
   };

   const onHandleCancel = () => {
     setIsModalVisible(!isModalVisible);
     setSelectedTask(null);
   };

   //esta funcion elimina la tarea seleccionada de la lista de tareas y luego oculta el Modal. La eliminación se realiza mediante la función filter, que crea un nuevo array excluyendo la tarea con el id de la tarea seleccionada.
   const onHandleDelete = () => {
     //verificamos si hay una tarea seleccionada, con esto se asegura de que selectedTask no sea null ni undefined
     if (selectedTask) {
       //Aquí se utiliza la función setTasks para actualizar el estado de las tareas. Se utiliza una función de flecha que toma el estado anterior (prevTaskList) y devuelve un nuevo array filtrado.
       setTasks(prevTaskList =>
         // Filtramos las tareas y conservamos solo las que no tienen el id de la tarea seleccionada.
         //esta función filtra todas las tareas que no tienen el mismo ID que la tarea seleccionada.
         prevTaskList.filter(task => task.id !== selectedTask.id),
       );
       setIsModalVisible(!isModalVisible);
     }
   };

   return (
     <View style={styles.containerGeneral}>
       <ImageBackground
         source={require('../src/assets/wallpaper/fondoMadera.jpeg')}
         style={styles.wallpaper}>
         <View>
           <AddItem
             style={{
               backgroundColor: isButtonDisabled
                 ? null
                 : colors.disabledButtonColor,
             }}
             isButtonDisabled={isButtonDisabled}
             buttonText="Add Task"
             onHandlerChange={onHandlerChange}
             onHandlerSubmit={onHandlerSubmit}
             placeholder="Enter your task for the day"
             task={task}
           />
           <View style={styles.containerTitle}>
             <Text style={styles.textTitle}>Tareas Pendientes</Text>
           </View>
           <View style={styles.fffff}>
             <TaskList tasks={tasks} onHandlerModal={onHandlerModal} />
             <CustomModal
               onHandleCancel={onHandleCancel}
               onHandleDelete={onHandleDelete}
               isModalVisible={isModalVisible}
               selectedTask={selectedTask}
             />
           </View>
         </View>
       </ImageBackground>
     </View>
   );
 }
  
  const styles = StyleSheet.create({
    containerGeneral: {
      width: '100%',
      //Indicamos que ese componente debería ocupar todo el espacio disponible en el contenedor principal o en su contenedor padre.
      flex: 1,
      //backgroundColor: 'red',
    },
    wallpaper: {
      width: '100%',
      height: '100%',
    },
    containerTitle: {
      alignItems: 'center'
    },
    textTitle: {
      width: '80%',
      textAlign: 'center',
      fontSize: 27,
      marginTop: 30,
      color: 'white',
      backgroundColor: '#FBBD58',
      borderRadius: 15,
      paddingVertical: 10,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    fffff: {
      marginBottom: 200
    }
  });