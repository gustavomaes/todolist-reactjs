import React, { Component } from 'react'

import { connect } from 'react-redux'

import { deleteTaskRequest, editTaskRequest, reset } from '../redux/actions'

import createNotification from './Notification'

class Card extends Component {
    state = {
        edit: false,
        description: ''
    }

    componentDidMount() {
        this.setState({ description: this.props.task.description })
    }

    handleChange = event => {
        this.setState({ description: event.target.value })
    }

    editTask(done, description) {
        this.props.editTask({
            id: this.props.task.id,
            index: this.props.index,
            data: {
                done: done,
                description: description
            }
        })
    }

    renderIcon() {
        let { index, task, deleteTask } = this.props

        return (
            <div className="card">
                <h2>Tarefa {this.props.index + 1}</h2>

                <p>{this.state.description}</p>
                <div className="card__icon-box">
                    <i className={task.done ? "fas fa-check card__checked" : "fas fa-check card__unchecked"} onClick={() => this.editTask(!task.done, this.state.description)} />

                    <i className="fas fa-pencil-alt card__pencil" onClick={() => {
                        this.setState({ edit: true })
                    }} />

                    <i className="far fa-trash-alt card__trash" onClick={() => {
                        deleteTask({ id: task.id, index: index })
                    }} />
                </div>
            </div>
        )
    }

    renderEdit() {
        let { index, task } = this.props

        return (
            <div className="card">
                <h2>Tarefa {index + 1}</h2>
            
                <textarea value={this.state.description} onChange={this.handleChange} />
                <div className="card__box-button">
                    <button className="card__cancel" onClick={() => this.setState({ edit: false })}>Cancelar</button>

                    <button className="card__confirm" onClick={() => {
                        this.editTask(task.done, this.state.description)
                        this.setState({ edit: false })
                    }} >Confirmar</button>
                </div>
            </div>
        )
    }

    reset() {
        createNotification('error', this.props.erroMessage, 'Erro')
        this.props.reset()
    }

    render() {
        return (
            <div>
                { this.props.error && this.reset() }
                { !this.state.edit ? this.renderIcon() : this.renderEdit() }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        error: state.error,
        erroMessage: state.erroMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTaskRequest(id)),
        editTask: (task) => dispatch(editTaskRequest(task)),
        reset: () => dispatch(reset())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)