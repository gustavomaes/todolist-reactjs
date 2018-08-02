import React, { Component } from 'react'
import { connect } from 'react-redux'

import createNotification from './Notification'
import { createTaskRequest } from '../redux/actions'


class NewTask extends Component {

    state = {
        description: ""
    }

    handleChange = event => {
        this.setState({ description: event.target.value })
    }

    addTask() {
        if (this.state.description === '') {
            createNotification('error', 'Campo em branco', 'Erro ao cadastrar')
            return
        }

        this.props.addTask({
            description: this.state.description,
            done: false
        })

        this.setState({ description: "" })
        createNotification('success', 'Tarefa adicionada com sucesso', 'Nova tarefa')
    }

    render() {
        return (
            <div className="input-box">
                <input type="text" placeholder="Nova tarefa" value={this.state.description} onChange={this.handleChange} />
                <button onClick={() => this.addTask() }>+</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(createTaskRequest(task))
    }
}


export default connect(null, mapDispatchToProps)(NewTask)