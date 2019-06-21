import React, {Component} from 'react'
import Form from './Form'
import CourseList from './CourseList'
import Results from './Results'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6 l4">
                        <Form /> 
                    </div>
                    <div className="col s12 m6 l4">
                        <CourseList />
                    </div>
                    <div className="col s12 m12 l4">
                        <Results />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard