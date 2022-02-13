import React, {useState} from 'react'
import { TodoList } from './TodoList'
import { v4 as uuid } from 'uuid'

export const Todo = () => {

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  console.log( list );

  const addItem = () => {
      const data = {
          id: uuid(),
          task : item,
          status : false
      };
      setItem("");
      setList([...list, data]);
  };

  const deleteTask = (idToDelete) => {
      setList( list.filter( ({id}) => idToDelete !== id ));
  };

  const changeStatus = (id) => {
    setList( list.map((item) => id !== item.id ? item : {...item, status: !item.status}) );
  }

  return (
    <div>
        <input value={item} onChange={e => setItem(e.currentTarget.value)} type="text" placeholder='Add Something' />
        <button onClick={addItem}>+</button>
        <TodoList list={list} changeStatus={changeStatus} deleteTask={deleteTask} />
    </div>
  )
}
