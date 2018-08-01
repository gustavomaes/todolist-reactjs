import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadTasksRequest } from '../redux/actions'

import TableContent from './TableContent';

class Table extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        return (
            <div className="content">
                { this.props.isLoading &&
                    <p className="text-primary">Carregando</p>
                }
                { !this.props.isLoading &&
                    <table className="table">
                        <thead>
                            <tr className="table__header">
                                <th>#</th>
                                <th>Tarefas</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.tasks.map((data, index) => {
                                return <TableContent key={index} index={index} task={data} />
                            })}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadTasksRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)