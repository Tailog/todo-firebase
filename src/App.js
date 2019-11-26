import React from 'react';
import {db} from './config/firebase';
import {getTodos} from './store/todos/todosUtil';

import FormInput from './components/formInput/FormInput';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      todos : [],
      pending : true
    }
  }
  /**
   * Lorsque L le composant est monté nous allons cherdher les info dans la db
   */
  componentWillMount(){
    getTodos()
    .then((querySnapshot)=>{
      querySnapshot.forEach((todo) => {
        this.setState((prevState) =>{
          return {
            todos : [{name:todo.data().name, id:todo.id},...prevState.todos]
          }
        })
      })
    })
    .then(()=>{
      this.setState(prevState => {
        return {
          pending: !prevState.pending
        };
      });
    })
    .catch((error)=>{
      console.log("Error retrieving todos: ",error);
    })
  }
  render(){
    console.log(db);
    return (
      <div>
        <h1>Hello World</h1>
        <FormInput/>
        {
          !this.state.pending ? 
          (
            <div>
              <h2> Voici une liste que je suis aller chercher sur mon Firestore</h2>
              <ul>
                {
                  this.state.todos.map((todo)=>{
                    return <li key={todo.id}>{todo.name}</li>
                  })
                }
              </ul>
            </div>
          )
          :
          <h2>Loading</h2>
        }
      </div>
    );
  }
}

export default App;
