import React from 'react';
import './App.css';
import { SERVICE_BASE, BASE_URL } from "./base_service";
import { DataTable } from 'primereact/datatable';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';


class ListStudents extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            students: []
        };
    }


    actionTemplate(rowData, column) {
        return <div>
            {/*<Button type="button" icon="pi pi-search" className="p-button-success">Button</Button>*/}
            {/*<Button type="button" icon="pi pi-pencil" className="p-button-warning">Button</Button>*/}
        </div>;
    }

    componentDidMount() {

        this.getData().then(data => this.setState({ students: data }))
    }


    async getData() {
        // let data = await axios.get('http://localhost:5000/api/courses_list')
        let data = await axios.get(BASE_URL + "list_students")
        console.log(BASE_URL + "list_students")
        console.log("students:")
        console.log(data.data)
        return data.data
    }


    async handleClick() {
        // let data = await this.getData();
        console.log('Click happened');
        // console.log(this.state.students.json);
    }

    render() {
        var studentCount = this.state.students ? this.state.students.length : 0;
        var header = <div className="p-clearfix" style={{ 'lineHeight': '1.87em' }}>List of Students <Button
            icon="pi pi-refresh" style={{ 'float': 'right' }} /></div>;
        var footer = "There are " + studentCount + ' students';
        const paginatorLeft = <Button icon="pi pi-refresh"/>;

        return (
            <div>
                {/*<button onClick={this.handleClick}>Click Me</button>*/}

                <DataTable value={this.state.students} header={header} footer={footer} paginator={true} paginatorLeft={paginatorLeft}

                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} students" rows={10} rowsPerPageOptions={[5,10,20]} >
                    <Column field="student_id" header="Student ID" filter={true} filterPlaceholder={"1611.."} filterMatchMode={"contains"} sortable={true} />
                    <Column field="fname" header="First Name" filter={true} filterMatchMode={"contains"} sortable={true} />
                    <Column field="email" header="E mail" style={{ textAlign: 'center' }} filter={true}
                        filterMatchMode={"contains"}  sortable={true}/>
                    {/*<Column body={this.actionTemplate} style={{ textAlign: 'center', width: '6em' }} sortable={true} />*/}
                </DataTable>
            </div>
        );
    }
}

export default ListStudents;
