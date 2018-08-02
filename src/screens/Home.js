import React from 'react'

import NewTask from '../components/NewTask'
import Header from '../components/Header'
import Panel from '../components/Panel'

const Home = () =>
    <div className="container">
        <Header />
        <div className="content">
            <NewTask />
            <Panel />
        </div>
    </div>

export default Home