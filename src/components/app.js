import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min';
import React, {Component} from 'react';
import '../assets/css/app.scss';
import StudentTable from './students_table';
import AddStudent from "./add_student";
import axios from 'axios';



class App extends Component {
    state = {
        students: [],
        error: ''
    };
    deleteStudent = async id =>{
        await axios.delete(`/api/grades/${id}`);
        this.getStudentData()

        /*const studentsCopy = this.state.students.slice();

        const index = studentsCopy.findIndex((student)=>{
            return student.id === id;
        });
        if(index >= 0){
            studentsCopy.splice(index, 1);
            this.setState({
                students: [...studentsCopy]
            });
        }*/
    };
    addStudent = async student =>{
        await axios.post('/api/grades', student);
        this.getStudentData();
    };
    componentDidMount() {
        this.getStudentData();
    };
    async getStudentData(){
        try{
            const response = await axios.get('/api/grades');
            this.setState({
                students: response.data.data
            });
        }catch(err){
            this.setState({
                error: 'Error retrieving student data'
            });
        }
        /*const resp = axios.get('http://localhost:3001/api/grades').then((resp)=>{
            console.log('server response:', resp);
            this.setState({
                students: resp.data.data
            })
        }).catch(err=>{
            console.log('error getting student data:', err.message);
            this.setState({
                error: 'Error retrieving student data'
            })
        });*/
    };
    render(){
        return (
            <div>
                <h1 className="center">SGT:React</h1>
                <h5 className='red-text text-darken-2'>{this.state.error}</h5>
                <div className="row">
                    <StudentTable delete={this.deleteStudent} size="s12 m8" list={this.state.students}/>
                    <AddStudent size="s12 m4" add={this.addStudent}/>
                </div>
            </div>
        );
    };
}

export default App;
