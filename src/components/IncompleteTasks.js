import Task from './Task'
const IncompleteTasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            <h3>Incomplete Tasks</h3>
            {tasks.map((task) => !task.completed &&
                (<Task key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)} 
                    onToggle={onToggle}/>
            ))}  
        </>
    )
}

export default IncompleteTasks
