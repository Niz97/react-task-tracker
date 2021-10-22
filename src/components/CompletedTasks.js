import Task from './Task'


const CompletedTasks = ({ tasks }) => {
    return (
        <>
            <h3>Completed Tasks</h3>
            {tasks.map((task) => task.reminder && (<Task task={task}/>)) }
        </>
    )
}

export default CompletedTasks
