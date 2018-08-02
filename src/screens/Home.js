import React from 'react'

import NewTask from '../components/NewTask';
import Header from '../components/Header';
import Table from '../components/Table';

const Home = () =>
    <div className="container">
        <Header />
        <div className="content">
            <NewTask />
            <Table />
        </div>
    </div>

export default Home