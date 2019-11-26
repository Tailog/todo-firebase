import {db} from './../../config/firebase';

/**
 * Selectionnes toutes les infos de la collection "todos"
 */
export const getTodos = () => {
  return db.collection('todos').get()
}

