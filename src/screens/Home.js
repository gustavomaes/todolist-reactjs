import React from 'react'
import { Header } from '../components/Header';
import NewTask from '../components/NewTask';
import Table from '../components/Table';

import { connect } from 'react-redux'
import { editTaskRequest } from '../redux/actions'
const Home = ({ tasks, editTask }) =>
    <div className="container">
        <Header />
        <NewTask />
        <Table />
        <button className="btn-2" onClick={() => {
            tasks.map((task, index) => {
                !task.done ? editTask({
                    id: task.id,
                    index: index,
                    data: {
                        description: task.description,
                        done: !task.done
                    }
                }) : null
            })
        }}>Marcar tudo como feito</button>
    </div>


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTask: (task) => dispatch(editTaskRequest(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

/*

*/