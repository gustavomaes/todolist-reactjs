import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadTasksRequest, editTaskRequest } from '../redux/actions'

import Card from './Card'

import createNotification from './Notification'

class Panel extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    checkAll() {
        this.props.tasks.map((task, index) => {
            return (
                !task.done ? 
                this.props.editTask({
                    id: task.id,
                    index: index,
                    data: {
                        description: task.description,
                        done: !task.done
                    }
                }) : null)
        })
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={() => {
                    this.checkAll()
                    createNotification('success', 'Todas as tarefas foram realizadas', 'Marcar todas')
                }}>Marcar todas</button>

                <div className="grid">
                    {
                        this.props.tasks.map((data, index) => {
                            return <Card key={index} index={index} task={data} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        isLoading: state.isLoading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadTasksRequest()),
        editTask: (task) => dispatch(editTaskRequest(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel)