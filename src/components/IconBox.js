import React from 'react'

import { connect } from 'react-redux'

import { deleteTaskRequest, editTaskRequest } from '../redux/actions'

const IconBox = ({ index, task, description, edit, deleteTask, editTask }) =>
    <div className="card-container">
        
        <p>{description}</p>
        <div className="card__icon-box">
            <i className={task.done ? "fas fa-check card__checked" : "fas fa-check card__unchecked"} onClick={() => editTask({
                id: task.id,
                index: index,
                data: {
                    done: !task.done,
                    description: description
                }
            })} />

            <i className="fas fa-pencil-alt card__pencil" onClick={edit} />

            <i className="far fa-trash-alt card__trash" onClick={() => {
                deleteTask({ id: task.id, index: index })}} />
        </div>
    </div>

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (task) => dispatch(deleteTaskRequest(task)),
        editTask: (task) => dispatch(editTaskRequest(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconBox)