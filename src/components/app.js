import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import StudentTable from './students_table';
import AddStudent from "./add_student";
import studentData from '../dummy_data/student_list';

let id = 100;

class App extends Component {
    state = {
        students: [],
    };
    deleteStudent = id =>{
        const studentsCopy = this.state.students.slice();

        const index = studentsCopy.findIndex((student)=>{
            return student.id === id;
        });

        if(index >= 0){
            studentsCopy.splice(index, 1);
            this.setState({
                students: [...studentsCopy]
            });
        }

    };
    addStudent = student=>{
        student.id = id++;
        this.setState({
            students: [...this.state.students, student]
        });
    };
    componentDidMount() {
        this.getStudentData();
    }
    getStudentData(){
        // call server here
        // update component state with student list
        this.setState({
            students: studentData
        })
    }
    render() {
        return (
            <div>
                <h1 className="center">SGT in Schmreact</h1>
                <div className="row">
                    <StudentTable delete={this.deleteStudent} size="s12 m8" list={this.state.students}/>
                    <AddStudent size="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    }
}

export default App;
