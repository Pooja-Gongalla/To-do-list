import React from 'react'
import { useState } from 'react'
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newtask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
          if(newtask.trim()!='')
            {
               setTasks(t=>[...t,newtask]); 
               setNewTask("");
            }

        //previous state of task represented as t
    }
    function deleteTask(index) {
     const updatedTasks=tasks.filter((_,i)=>i!==index);
      setTasks(updatedTasks);
    //using i to differentaiate b/w the index and i. If the parameter can be ignore we can also use parameter _ instead of element
    }
    function moveTaskUp(index) {
        if(index>0)
            {
                const updatedTasks=[...tasks];
                [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];   //this code for swap two elements within array
                 setTasks(updatedTasks);
            }
    }
    function moveTaskDown(index) {
        if(index<tasks.length-1)
            {
                const updatedTasks=[...tasks];
                [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];   //this code for swap two elements within array
                 setTasks(updatedTasks);
            }
    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type='text' className='input-type' placeholder='Enter a Task...' value={newtask}
                    onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((id, index) =>
                    <li key={index}>
                        <span className='text'>{id}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete
                            {/* //onClick={deleteTask(index)}>  this will call function right away that's why above used arrow function*/}
                        </button>
                        <button className='move-button-up' onClick={() => moveTaskUp(index)}>👆</button>
                        <button className='move-button-buttom' onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList




/*
Using key instead of id:

javascript
Copy code
<li key={index}>
The key attribute should be used to give each element in the list a unique identifier for React's reconciliation process. This helps React efficiently update and manage the DOM.
Avoid using id for keys:

The id attribute is typically used to assign a unique identifier to an HTML element, which can be used for CSS styling or JavaScript access. However, in the context of React lists, key is the attribute that provides the necessary unique identifier for efficient DOM updates.
*/

/*
Mapping Over Tasks:

javascript
Copy code
{tasks.map((id, index) =>
The tasks array is being iterated over using the .map() method.
For each element in the tasks array, the id (the current task) and index (the current index) are provided as arguments to the callback function.
Rendering List Items:

javascript
Copy code
<li key={index}>
For each task, an <li> (list item) element is created.
The key attribute is set to index.
Use of the key Attribute
Purpose:
The key attribute is a special attribute in React. It helps React identify which items in a list have changed, been added, or removed. Keys should be unique among siblings. They allow React to efficiently update the user interface by reusing or reordering elements instead of re-rendering them entirely.

Why index as the Key:
In this example, the index of the array is used as the key. This works fine as long as the order of items does not change. If the order of items can change or items can be removed, it is generally better to use a unique identifier (like an id) from the data itself rather than the index.

Elements Inside the List Item
Task Text:

javascript
Copy code
<span className='text'>{id}</span>
Displays the text of the current task.
Delete Button:

javascript
Copy code
<button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
A button to delete the task.
The onClick handler is set to call deleteTask with the index of the current task.
The comment explains that using onClick={deleteTask(index)} directly would call the function immediately, hence an arrow function onClick={() => deleteTask(index)} is used to call it only when the button is clicked.
*/




