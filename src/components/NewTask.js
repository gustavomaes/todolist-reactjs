import React from 'react'
import { connect } from 'react-redux'

import { createTaskRequest } from '../redux/actions'

const NewTask = ({ addTask }) => 
    <div className="content">
        <input className="input" placeholder="Criar novo item" />
        <button className="btn" onClick={ () => {
            const task = {
                data: {
                    description: 'Teste',
                    done: false
                }
            }
            
            addTask(task)
        }}>Salvar</button>
    </div>

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(createTaskRequest(task))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewTask)