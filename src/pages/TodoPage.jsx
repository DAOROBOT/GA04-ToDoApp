import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from '../components/ToDoItem.jsx'; 

const getInitialTasks = () => {
  const tasksJSON = localStorage.getItem('todos');
  if (tasksJSON === null) return [];
  
 
  const parsedTasks = JSON.parse(tasksJSON);
  return parsedTasks.map((task, index) => ({
    id: task.id || Date.now() + index, 
    text: task.text,
    completed: task.completed,
  }));
};

function TodoPage() {
  const [tasks, setTasks] = useState(getInitialTasks);
  
  const [inputText, setInputText] = useState('');


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]); 


  
  // 1. Add Task
  const handleAddTask = (e) => {
    e.preventDefault(); 
    const taskText = inputText.trim();

    if (taskText === "") return; 

    const newTask = {
      id: Date.now(), 
      text: taskText,
      completed: false
    };

    // Cập nhật state 
    setTasks(prevTasks => [newTask, ...prevTasks]); 
    setInputText(''); 
  };

  // 2. Remove Task
  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  // 3. Mark/Unmark Task
  const handleToggleComplete = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };
  

  return (
    <body className="bg-gray-100 font-sans antialiased min-h-screen">
      <Link to="/" className="inline-block mt-6 ml-6 text-blue-500 hover:underline">
        ← Back to Home
      </Link>

      <div className="container mx-auto max-w-lg mt-8 sm:mt-16 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My To-Do List</h1>
        
        {/* Form Add Task */}
        <form id="task-form" className="flex mb-4" onSubmit={handleAddTask}>
          <input 
            type="text" 
            id="task-input" 
            className="flex-grow border border-gray-300 rounded-l-lg py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Add New Task"
            autoComplete="off"
            value={inputText} 
            onChange={(e) => setInputText(e.target.value)} 
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-r-lg text-xl transition-colors duration-200"
          >
            +
          </button>
        </form>
        
        {/* Task List */}
        <ul id="task-list" className="space-y-3">
          {}
          {tasks.map(task => (
            <TodoItem 
              key={task.id} 
              task={task}
              onRemove={handleRemoveTask}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      </div>
    </body>
  );
}

export default TodoPage;