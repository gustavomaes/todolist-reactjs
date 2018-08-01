import React from 'react'
import { connect } from 'react-redux'

import { deleteTaskRequest, editTaskRequest } from '../redux/actions'

const TableContent = ({ index, task, deleteTask, editTask }) =>
    <tr>
        <td >Task {index}</td>
        <td>{task.description}</td>
        <td>
            <input type="checkbox" className="check" defaultChecked={task.done} onClick={ () => {
                editTask({
                    id: task.id,
                    index: index,
                    data: {
                        description: task.description,
                        done: !task.done
                    }
                })
            }}/>
            <button onClick={() => {
                deleteTask({id: task.id, index: index})
            }}>Excluir</button>
        </td>
    </tr>

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTaskRequest(id)),
        editTask: (task) => dispatch(editTaskRequest(task))
    }
}


export default connect(null, mapDispatchToProps)(TableContent)