
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
export default function App() {
  const [todos,setTodos] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play rocket league',key:'3'}
  ]);

  //Delete functionality

  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key != key);
    });
  }

  const submitHandler = (text) =>{
    setTodos((prevTodos)=>{
      return [
        {text:text,key:Math.random().toString},
        ...prevTodos
      ]
    })
  }


  return (
    <View style={styles.container}>
     {/**Header */}
     <Header/>
     <View style = {styles.content}>
      {/**todo form */}
      <AddTodo submitHandler = {submitHandler}  />
      <View style = {styles.list}>
      <FlatList
      renderItem = {({item})=>(
        <TodoItem pressHandler = {pressHandler} item = {item}/>
      )}
      data = {todos}
      
      
      />
      </View>
     </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  }
});
