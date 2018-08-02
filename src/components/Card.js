import React, { Component } from 'react'

import { connect } from 'react-redux'

import { editTaskRequest, reset } from '../redux/actions'

import createNotification from './Notification'
import EditBox from './EditBox';
import IconBox from './IconBox';

class Card extends Component {
    state = {
        edit: false,
        description: ''
    }

    componentDidMount() {
        this.setState({ description: this.props.task.description })
    }

    componentDidUpdate() {
        if (this.props.deleted) {
            this.setState({ description: this.props.task.description })
            this.props.reset()
        }
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

    edit = () => {
        this.setState({ edit: true })
    }

    cancel = () => {
        this.setState({ edit: false })
    }

    confirm = () => {
        this.editTask(this.props.task.done, this.state.description)
        this.setState({ edit: false })
    }

    reset() {
        createNotification('error', this.props.erroMessage, 'Erro')
        this.props.reset()
    }

    render() {
        let { index, task } = this.props
        let { description } = this.state

        return (

            <div className="card">
                <h2>Tarefa {index + 1}</h2>

                {this.props.error && this.reset()}
                {
                    !this.state.edit ?
                        <IconBox index={index} task={task} description={description} edit={this.edit} /> :
                        <EditBox task={task} description={description} cancel={this.cancel} confirm={this.confirm} handleChange={this.handleChange} />
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        error: state.error,
        erroMessage: state.erroMessage,
        deleted: state.deleted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (task) => dispatch(editTaskRequest(task)),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)