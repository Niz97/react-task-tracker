import React from 'react'

const CompletedTasks = ({ tasks }) => {
    return (
        <>
            {
                tasks.map((task) => 
                <div>{task.text}</div>
            )}
        </>
    )
}

export default CompletedTasks
