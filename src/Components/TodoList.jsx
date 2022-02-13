import React from 'react'
import TodoItem from './TodoItem'
import { v4 as uuid } from 'uuid'


export const TodoList = ({list, changeStatus, deleteTask}) => {
  return (
    <div>
        {
            list.map((item) => <TodoItem key={uuid()} item={item} changeStatus={changeStatus} deleteTask={deleteTask}/> )
        }
    </div>
  )
}
