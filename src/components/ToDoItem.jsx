import React from 'react';

function TodoItem({ task, onToggleComplete, onRemove }) {

  const liClassName = `flex items-center justify-between p-3 rounded-lg border border-gray-200 transition-shadow duration-200 hover:shadow-sm ${
    task.completed ? 'bg-green-50' : 'bg-gray-50'
  }`;

  const spanClassName = `text-sm sm:text-base text-gray-700 flex-grow cursor-pointer ${
    task.completed ? 'completed' : ''
  }`;

  return (
    <li className={liClassName}>
      <span 
        className={spanClassName} 
        onClick={() => onToggleComplete(task.id)} 
      >
        {task.text}
      </span>
      
      <div className="flex space-x-2 ml-4 flex-shrink-0">
        <button 
          onClick={() => onToggleComplete(task.id)}
          className="text-xs sm:text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
        >
          {task.completed ? 'Unmark' : 'Done'}
        </button>
        
        <button 
          onClick={() => onRemove(task.id)} 
          className="text-xs sm:text-sm font-semibold text-red-600 hover:text-red-500 transition-colors"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoItem;