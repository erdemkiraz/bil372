import React from 'react';
import './App.css';
import axios from "axios";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {BASE_URL} from "./base_service";


class ListCourses extends React.Component {

    constructor() {
        super();

        this.state = {
            takes_courses: []
        };
    }

    componentDidMount() {
        this.getData().then(data => this.setState({takes_courses: data}))
    }

    async getData() {
        let data = await axios.get(BASE_URL+'taken_courses')

        return data.data
    }

    render() {

        var takes_courses_Count = this.state.takes_courses ? this.state.takes_courses.length : 0;
        var header = <div className="p-clearfix" style={{'lineHeight': '1.87em'}}>List of Taken Courses <Button
            icon="pi pi-refresh" style={{'float': 'right'}}/></div>;
        var footer = "There are " + takes_courses_Count + ' courses taken';
        const paginatorLeft = <Button icon="pi pi-refresh"/>;

        return (
            <div>
                <DataTable value={this.state.takes_courses} header={header} footer={footer} paginator={true} paginatorLeft={paginatorLeft}

                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} courses" rows={10} rowsPerPageOptions={[5,10,20]} >

                    <Column field="fname" header="Student Name" filter={true} filterMatchMode={"contains"}/>
                    <Column field="lname" header="Student Surname" filter={true} filterMatchMode={"contains"}/>
                    <Column field="student_id" header="Student ID" filter={true} filterMatchMode={"contains"}/>
                    <Column field="course_id" header="Course ID" filter={true} filterMatchMode={"contains"}/>
                    <Column field="cname" header="Course Name" filter={true} filterMatchMode={"contains"}/>
                    <Column field="midterm_score" header="Midterm Score" style={{textAlign: 'center'}} filter={true} filterMatchMode={"contains"}/>
                    <Column field="final_score" header="Final Score" style={{textAlign: 'center'}} filter={true} filterMatchMode={"contains"}/>
                    <Column field="grade" header="Grade" filter={true} filterMatchMode={"contains"}/>
                    {/*<Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>*/}
                </DataTable></div>
        );
    }
}

export default ListCourses;
