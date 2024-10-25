import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, updateTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
