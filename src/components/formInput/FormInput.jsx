import React from 'react';
import {addTodo} from '../../store/todos/todosUtil'

class FormInput extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const {name} = this.state;
    // Utilisation de la méthode de création de Todo
    addTodo({name})
    .then(()=>{
      // Remise à zéro de l'input, après l'ajout
      this.setState(()=>{
        return {
          name : ''
        }
      })
    })
    .then(()=>{
      // Refresh de la page automatique après avoir mis à jour le state
      window.location.reload(false);
    })
    .catch((error)=>{
      console.log("Todo Couldn't be added : ", error);
    })
  };
  handleChange = e => {
    const {name,value} = e.target
    this.setState(()=>{
      return {
        [name]: value
      }
    })
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default FormInput;