import React from 'react'

const TodoItem = ({item, changeStatus, deleteTask}) => {
  return (
    <div style={{display: "flex", margin:"20px auto", padding: "10px", width: "500px", justifyContent: "flex-start", border: "1px solid black"}}>
      <div style={
          item.status ? { fontSize: "20px", textAlign: "left", flexGrow: "1", textDecoration: "line-through", display: "inline-block"} : { fontSize: "20px", textAlign: "left", flexGrow: "1", textDecoration: "none", display: "inline-block"}
      } >{item.task}</div>
      <button onClick={() => changeStatus(item.id)}>Change Status</button>
      <button onClick={() => deleteTask(item.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
