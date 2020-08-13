import React from 'react';
import './App.css';
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact/button";
import { BASE_URL } from "./base_service";
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';

import { Messages } from 'primereact/messages';

class Remove extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            response: 0,
            entityType: "",
            TCKN: "",
            name: "",
            student_id: "",
            companyID: "",
            prerequisiteID: "",
            courseID: "",
        };
        this.sendData = this.sendData.bind(this)
        this.deletePerson = this.deletePerson.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.deleteProfessor = this.deleteProfessor.bind(this)
        this.deleteCompany = this.deleteCompany.bind(this)
        this.deleteCourse = this.deleteCourse.bind(this)
        this.deleteTakesCourse = this.deleteTakesCourse.bind(this)
        this.deletePrerequisite = this.deletePrerequisite.bind(this)
        this.deleteMajor = this.deleteMajor.bind(this)
    }

    componentDidMount() {
        // this.getData().then(data => this.setState({ students: data }))
    }

    reset_state() {
        this.setState({
            entityType: "",
            TCKN: "",
            name: "",
            student_id: "",
            companyID: "",
            prerequisiteID: "",
            courseID: "",
        })
    }

    async getData() {
    }

    async deletePerson(e) {
        await this.setState({ entityType: "person" })
        await this.sendData(e)
    }

    async deleteStudent(e) {
        await this.setState({ entityType: "student" })
        await this.sendData(e)
    }

    async deleteEmployee(e) {
        await this.setState({ entityType: "employee" })
        await this.sendData(e)
    }

    async deleteProfessor(e) {
        await this.setState({ entityType: "professor" })
        await this.sendData(e)
    }

    async deleteCompany(e) {
        await this.setState({ entityType: "company" })
        await this.sendData(e)
    }

    async deleteCourse(e) {
        await this.setState({ entityType: "course" })
        await this.sendData(e)
    }


    async deleteTakesCourse(e) {
        await this.setState({ entityType: "takes_course" })
        await this.sendData(e)
    }

    async deletePrerequisite(e) {
        await this.setState({ entityType: "prerequisite" })
        await this.sendData(e)
    }

    async deleteMajor(e) {
        await this.setState({ entityType: "major" })
        await this.sendData(e)
    }

    async sendData(e) {
        this.setState({ response: 0 })
        let data = await axios.post(BASE_URL + "remove_entity", { "data": this.state })
        if (data.data.status !== 200) {
            this.messages.show({ severity: 'error', summary: 'ERROR', detail: 'NOT REMOVED' });
        } else {
            this.messages.show({ severity: 'success', summary: 'Success', detail: 'Remove submitted' });
        }
        console.log(data.data.status)
        this.reset_state()
        this.setState({ response: data.status })
    }

    render() {

        return (
            <div>
                <Messages ref={(el) => this.messages = el}> </Messages>

                <TabView activeIndex={this.state.activeIndex}
                    onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Remove Person">
                        <div style={{ 'height': '300px', 'margin': '10px' }}>

                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} /></div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Remove Person" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deletePerson(e)} />
                    </TabPanel>
                    <TabPanel header="Remove Student">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} /></div>
                                    </div>

                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>
                            </div>
                        </div>
                        <Button label="Remove Student" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteStudent(e)} />
                    </TabPanel>
                    <TabPanel header="Remove Employee">
                        <div style={{ 'height': '300px' }}>

                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>
                            </div>
                        </div>
                        <Button label="Remove Employee" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteEmployee(e)} />
                    </TabPanel>
                    <TabPanel header="Remove Professor">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} /></div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>
                            </div>
                        </div>
                        <Button label="Remove Professor" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteProfessor(e)} />
                    </TabPanel>
                    <TabPanel header="Remove Company">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Company ID</label>
                                        <div className="p-col">
                                            <InputText
                                                value={this.state.companyID}
                                                onChange={(e) => this.setState({ companyID: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Remove Company" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteCompany(e)} />
                    </TabPanel>

                    <TabPanel header="Remove Course">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Course ID</label>
                                        <div className="p-col">
                                            <InputText
                                                value={this.state.courseID}
                                                onChange={(e) => this.setState({ courseID: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Remove Course" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteCourse(e)} />
                    </TabPanel>

                    <TabPanel header="Remove TakesCourse">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} /></div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Course ID</label>
                                        <div className="p-col">
                                            <InputText
                                                value={this.state.courseID}
                                                onChange={(e) => this.setState({ courseID: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Remove TakesCourse" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteTakesCourse(e)} />
                    </TabPanel>

                    <TabPanel header="Remove Prerequisite">
                        <div style={{ 'height': '300px' }}>
                            <div className="p-grid p-fluid">
                                <div className="p-col-12 p-md-4">

                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Course ID</label>
                                        <div className="p-col">
                                            <InputText
                                                value={this.state.courseID}
                                                onChange={(e) => this.setState({ courseID: e.target.value })} />
                                        </div>
                                    </div>


                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Prerequisite Course ID</label>
                                        <div className="p-col">
                                            <InputText
                                                value={this.state.prerequisiteID}
                                                onChange={(e) => this.setState({ prerequisiteID: e.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div className="p-col-12 p-md-4"></div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Remove Prerequisite" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deletePrerequisite(e)} />
                    </TabPanel>
                    <TabPanel header="Remove Major">
                        <div style={{ 'height': '300px' }}>

                            <div className="p-grid p-fluid">

                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Student TCKN</label>
                                        <div className="p-col">
                                            <InputMask mask="99999999999" required={true} autoClear={false}
                                                value={this.state.TCKN}
                                                onChange={(e) => this.setState({ TCKN: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Major Name</label>
                                        <div className="p-col">

                                            <InputText value={this.state.salary}
                                                onChange={(e) => this.setState({ name: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                </div>
                                <div className="p-col-12 p-md-4">
                                </div>

                            </div>
                        </div>
                        <Button label="Remove Employee" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.deleteMajor(e)} />
                    </TabPanel>


                </TabView>

            </div>
        );
    }
}

export default Remove;
