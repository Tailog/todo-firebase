import {db} from './../../config/firebase';

/**
 * Selectionnes toutes les infos de la collection "todos"
 */
export const getTodos = () => {
  return db.collection('todos').get()
}

/**
 * Ajoute une todo dasn la collection "todos"
 */
export const addTodo = (todo) =>{
  // On va chercher la reférence de notre collection
  const todosRef = db.collection('todos');
  // Ajout de la todo dans firestore avec la méthode add, pour que Firestore génère un ID propre
  return todosRef.add(todo); // Renvoie d'une promise pour la manipuler correctement par la suite
}