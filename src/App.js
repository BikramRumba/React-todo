import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
const [tasklist, setTasklist]= useState([]);
  const handleChange = (e) => {
      setTask(e.target.value);
  }
  const AddTask = () => {
   if(task !== "") {
     const taskDetails = {
       id:Math.floor( Math.random() *1000),
       value: task,
       isCompleted: false,
     }
     setTasklist([...tasklist, taskDetails]);
   }
  }
 
  const deletetask =(e, id) => {
    e.preventDefault();
    setTasklist(tasklist.filter((t) => t.id !== id ))
  }

  const taskCompleted = (e, id) => {
 e.preventDefault();
 //let's find index of element
 const element = tasklist.findIndex(ele => ele.id === id);
//  copy array into new variables
const newTasklist = [...tasklist];

// edit our element
newTasklist[element] = {
  ...newTasklist[element],
  isCompleted: true,
}
setTasklist(newTasklist);
 }
  return (
    <div className="TodoApp">
  <span className="title">ToDo List</span>
   <div className="todo">
        <input  
         type="text" placeholder="add task here -->"
         onChange={(e) => handleChange(e)}
         />
        <button className="add_btn" onClick={AddTask}>ADD
        </button>
        </div>
    <br/>
    {tasklist !== [] ?   
    <ul>
      {tasklist.map((t) => (
      <li className={t.isCompleted ? "crossText": "listitem"}>
      {t.value}
     
      <button className="complete-btn" 
      onClick={(e) =>taskCompleted(e, t.id)}
      >Completed</button>
     
      <button className='delete-btn' 
      onClick={(e) =>deletetask(e, t.id)}>Delete</button>
      </li>
      ))}
    </ul>
    : null}
     
    </div>
    
  );
}

export default App;
