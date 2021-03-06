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
            isLoaded: false,
            students: []
        };
    }

    componentDidMount() {
        this.getData().then(data => this.setState({students: data}))
    }

    async getData() {
        let data = await axios.get(BASE_URL+'list_courses')
        console.log("courses:")
        console.log(data.data)
        return data.data
    }

    render() {

        var studentCount = this.state.students ? this.state.students.length : 0;
        var header = <div className="p-clearfix" style={{'lineHeight': '1.87em'}}>List of Courses <Button
            icon="pi pi-refresh" style={{'float': 'right'}}/></div>;
        var footer = "There are " + studentCount + ' courses';
                const paginatorLeft = <Button icon="pi pi-refresh"/>;

        return (
            <div>
                <DataTable value={this.state.students} header={header} footer={footer} paginator={true} paginatorLeft={paginatorLeft}

                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={10} rowsPerPageOptions={[5,10,20]} >

                    <Column field="course_id" header="Course ID" filter={true} filterMatchMode={"contains"} sortable={true}/>
                    <Column field="cname" header="Course Name" filter={true} filterMatchMode={"contains"} sortable={true}/>
                    <Column field="department" header="Department" style={{textAlign: 'center'}} filter={true} filterMatchMode={"contains"} sortable={true}/>
                    <Column field="credit" header="Credit" filter={true} filterMatchMode={"contains"} sortable={true}/>
                    {/*<Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>*/}
                </DataTable></div>
        );
    }
}

export default ListCourses;
