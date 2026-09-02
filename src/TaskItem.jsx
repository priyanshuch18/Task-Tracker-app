function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            <span onClick={() => onToggle(task.id)}>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;