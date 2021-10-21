import React from 'react'

const CompletedTasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => task.reminder && <div>{task.text}</div>) }
        </>
    )
}

export default CompletedTasks
