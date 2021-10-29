import Task from './Task'


const CompletedTasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            <h3>Completed Tasks</h3>
            {tasks.map((task) => task.completed &&
            (<Task key={task.id}
                 task={task}
                 onDelete={() => onDelete(task.id)} 
                 onToggle={onToggle}/>
         ))}  
        </>
    )
}

export default CompletedTasks
