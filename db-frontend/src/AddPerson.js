import React from 'react';
import './App.css';
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact/button";
import { BASE_URL } from "./base_service";


class AddPerson extends React.Component {

    constructor() {
        super();

        this.state = {
                isPerson: "1",
                isStudent: "0",
                isProfessor: "0",
                isEmployee: "0",
                isCompany: "0",
                TCKN: "123",
                name: "ayberk",
                surname: "uslu",
                adress: "",
                gender: "",
                email: "",
                telno: "",
                student_id: "",
                entry_year: "",
                is_active: "",
                isUnderGraduate: "",
                scolarship: "",
                salary: "",
                tax_number: ""
        };
    }

    componentDidMount() {
        // this.getData().then(data => this.setState({ students: data }))
    }

    async getData() {
    }

    async sendData() {
        // await axios.post(BASE_URL+"insert_entity",this.state)
        console.log(BASE_URL + "insert_entity")
        // await axios.post(BASE_URL + "insert_entity", { "tckn": 12055200000, "fname": "ayberk" })
        await axios.post(BASE_URL + "insert_entity",this.state)
        // await axios.post(BASE_URL + "insert_entity", {
        //         "isPerson": this.state.isPerson,
        //         "isStudent": "0",
        //         "isProfessor": "0",
        //         "isEmployee": "0",
        //         "isCompany": "0",
        //         "TCKN": this.state.TCKN,
        //        })
        // await axios.get(BASE_URL+"insert_entity")
    }

    render() {

        return (
            <div>
                <TabView activeIndex={this.state.activeIndex}
                    onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Insert Person">
                        <div style={{ 'height': '300px' }}>
                            Content Person
                        </div>
                        <Button label="Insert Person" className="p-button-raised p-button-rounded" onClick={this.sendData} />
                    </TabPanel>
                    <TabPanel header="Insert Student">
                        <div style={{ 'height': '300px' }}>
                            Content Student
                        </div>
                        <Button label="Insert Student" className="p-button-raised p-button-rounded" />
                    </TabPanel>
                    <TabPanel header="Instert Employee">
                        <div style={{ 'height': '300px' }}>
                            Content Employee
                        </div>
                        <Button label="Insert Employee" className="p-button-raised p-button-rounded" />
                    </TabPanel>
                    <TabPanel header="Insert Professor">
                        <div style={{ 'height': '300px' }}>
                            Content Professor
                        </div>
                        <Button label="Insert Professor" className="p-button-raised p-button-rounded" />
                    </TabPanel>
                    <TabPanel header="Insert Company">
                        <div style={{ 'height': '300px' }}>
                            Content Company
                        </div>
                        <Button label="Insert Company" className="p-button-raised p-button-rounded" />
                    </TabPanel>
                </TabView>

            </div>
        );
    }
}

export default AddPerson;
