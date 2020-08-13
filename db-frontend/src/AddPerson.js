import React from 'react';
import './App.css';
import axios from "axios";
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from "primereact/button";
import { BASE_URL } from "./base_service";
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from "primereact/inputnumber";

import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';

class AddPerson extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            response: 0,
            entityType: "",
            isUpdate: false,
            TCKN: "",
            name: "",
            surname: "",
            adress: "",
            gender: "",
            email: "",
            telno: "",
            student_id: "",
            entry_year: "2020",
            is_active: true,
            isUnderGraduate: true,
            scolarship: "",
            salary: "",
            tax_number: "",
            title: "",
            department: "",
            companyID: "",
            hasBus: true,
            courseID: "",
            credit: "",
            midTerm: "",
            final: "",
            grade: "",
            prerequisiteID: "",
            major_type: " "

        };
        this.sendData = this.sendData.bind(this)
        this.reset_state = this.reset_state.bind(this)
        this.insertPerson = this.insertPerson.bind(this)
        this.insertEmployee = this.insertEmployee.bind(this)
        this.insertProfessor = this.insertProfessor.bind(this)
        this.insertCompany = this.insertCompany.bind(this)
        this.insertCourse = this.insertCourse.bind(this)
        this.insertTakesCourse = this.insertTakesCourse.bind(this)
        this.insertPrerequisite = this.insertPrerequisite.bind(this)
        this.insertMajor = this.insertMajor.bind(this)
    }

    componentDidMount() {
        // this.getData().then(data => this.setState({ students: data }))
    }

    reset_state() {
        this.setState({
            entityType: "",
            isUpdate: false,
            TCKN: "",
            name: "",
            surname: "",
            adress: "",
            gender: "",
            email: "",
            telno: "",
            student_id: "",
            entry_year: "2020",
            is_active: true,
            isUnderGraduate: true,
            scolarship: "",
            salary: "",
            tax_number: "",
            title: "",
            department: "",
            companyID: "",
            hasBus: true

        })
    }

    async getData() {
    }

    async insertPerson(e) {
        await this.setState({ entityType: "person" })
        await this.sendData(e)

    }

    async insertStudent(e) {
        await this.setState({ entityType: "student" })
        await this.sendData(e)

    }

    async insertEmployee(e) {
        await this.setState({ entityType: "employee" })
        await this.sendData(e)
    }

    async insertProfessor(e) {
        await this.setState({ entityType: "professor" })
        await this.sendData(e)
    }

    async insertCompany(e) {
        await this.setState({ entityType: "company" })
        await this.sendData(e)
    }

    async insertCourse(e) {
        await this.setState({ entityType: "course" })
        await this.sendData(e)
    }


    async insertTakesCourse(e) {
        await this.setState({ entityType: "takes_course" })
        await this.sendData(e)
    }

    async insertPrerequisite(e) {
        await this.setState({ entityType: "prerequisite" })
        await this.sendData(e)
    }
    async insertMajor(e) {
        await this.setState({ entityType: "major" })
        await this.sendData(e)
    }

    async sendData(e) {
        this.setState({ response: 0 })
        let data = await axios.post(BASE_URL + "insert_entity", { "data": this.state })
        if (data.status !== 200) {
            this.messages.show({ severity: 'error', summary: 'ERROR', detail: 'NOT ADDED' });
        }
        else {
            this.messages.show({ severity: 'success', summary: 'Success', detail: 'Insert submitted' });
        }
        console.log(data.data.status)
        this.reset_state()
        this.setState({ response: data.status })
    }

    render() {
        const scolarship_options = [
            { label: '0% Scholarship', value: '0' },
            { label: '25% Scholarship', value: '25' },
            { label: '50% Scholarship', value: '50' },
            { label: '75% Scholarship', value: '75' },
            { label: '100% Scholarship', value: '100' }
        ];

        const major_options = [
            { label: 'Major', value: 'Anadal' },
            { label: 'Minor ', value: 'Yandal' }
        ];
        return (
            <div>


                <Messages ref={(el) => this.messages = el}> </Messages>
                {/*<Messages ref={(el) => this.messages = el}> </Messages>*/}

                <TabView activeIndex={this.state.activeIndex}
                    onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Insert Person">
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
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Name</label>
                                        <div className="p-col">
                                            <InputText value={this.state.name}
                                                onChange={(e) => this.setState({ name: e.target.value })} /></div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Surname</label>
                                        <div className="p-col">
                                            <InputText value={this.state.surname}
                                                onChange={(e) => this.setState({ surname: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Adress</label>
                                        <div className="p-col">
                                            <InputText value={this.state.adress}
                                                onChange={(e) => this.setState({ adress: e.target.value })} /></div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Gender</label>
                                        <div className="p-col">
                                            <InputMask mask="a" value={this.state.gender}
                                                onChange={(e) => this.setState({ gender: e.target.value })} /></div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Email</label>
                                        <div className="p-col">
                                            <InputText value={this.state.email}
                                                onChange={(e) => this.setState({ email: e.target.value })} /></div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Tel. Number</label>
                                        <div className="p-col">
                                            <InputText value={this.state.telno}
                                                onChange={(e) => this.setState({ telno: e.target.value })} /></div>
                                    </div>





                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">


                                </div>

                            </div>
                        </div>
                        <Button label="Insert Person" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertPerson(e)} />
                    </TabPanel>
                    <TabPanel header="Insert Student">
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
                                            style={{ width: '100px' }}>Student ID</label>
                                        <div className="p-col">
                                            <InputText value={this.state.student_id}
                                                onChange={(e) => this.setState({ student_id: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Entry Year</label>
                                        <div className="p-col">
                                            <InputMask mask="9999" value={this.state.entry_year}
                                                onChange={(e) => this.setState({ entry_year: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Active?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.is_active}
                                                onChange={(e) => this.setState({ is_active: e.value })} />
                                        </div>

                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Under Graduate?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUnderGraduate}
                                                onChange={(e) => this.setState({ isUnderGraduate: e.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Scolarship</label>
                                        <div className="p-col">
                                            <Dropdown value={this.state.scolarship} options={scolarship_options}
                                                onChange={(e) => {
                                                    this.setState({ scolarship: e.value })
                                                }} placeholder="Select a scolarship" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                </div>

                            </div>
                        </div>
                        <Button label="Insert Student" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertStudent(e)} />
                    </TabPanel>
                    <TabPanel header="Instert Employee">
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
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Salary</label>
                                        <div className="p-col">

                                            <InputText value={this.state.salary}
                                                onChange={(e) => this.setState({ salary: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Tax Number</label>
                                        <div className="p-col">
                                            <InputText value={this.state.surname}
                                                onChange={(e) => this.setState({ surname: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                </div>

                            </div>
                        </div>
                        <Button label="Insert Employee" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertEmployee(e)} />
                    </TabPanel>
                    <TabPanel header="Insert Professor">
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
                                            style={{ width: '100px' }}>Title</label>
                                        <div className="p-col">

                                            <InputText value={this.state.title}
                                                onChange={(e) => this.setState({ title: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Department</label>
                                        <div className="p-col">
                                            <InputText value={this.state.department}
                                                onChange={(e) => this.setState({ department: e.target.value })} />
                                        </div>
                                    </div>


                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">


                                </div>

                            </div>
                        </div>
                        <Button label="Insert Professor" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertProfessor(e)} />
                    </TabPanel>
                    <TabPanel header="Insert Company">
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
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Company Name</label>
                                        <div className="p-col">

                                            <InputText value={this.state.name}
                                                onChange={(e) => this.setState({ name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Company Adress</label>
                                        <div className="p-col">
                                            <InputText value={this.state.adress}
                                                onChange={(e) => this.setState({ adress: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Tel. Number</label>
                                        <div className="p-col">
                                            <InputText value={this.state.telno}
                                                onChange={(e) => this.setState({ telno: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Has Bus?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.hasBus}
                                                onChange={(e) => this.setState({ hasBus: e.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Insert Company" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertCompany(e)} />
                    </TabPanel>

                    <TabPanel header="Insert Course">
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
                                            style={{ width: '100px' }}>Department</label>
                                        <div className="p-col">

                                            <InputText value={this.state.department}
                                                onChange={(e) => this.setState({ department: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Course Name</label>
                                        <div className="p-col">
                                            <InputText value={this.state.name}
                                                onChange={(e) => this.setState({ name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Credit</label>
                                        <div className="p-col">
                                            <InputText value={this.state.credit}
                                                onChange={(e) => this.setState({ credit: e.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Insert Course" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertCourse(e)} />
                    </TabPanel>

                    <TabPanel header="Insert TakesCourse">
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

                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Midterm</label>
                                        <div className="p-col">
                                            <InputText value={this.state.midterm}
                                                onChange={(e) => this.setState({ midterm: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Final</label>
                                        <div className="p-col">
                                            <InputText value={this.state.final}
                                                onChange={(e) => this.setState({ final: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Grade</label>
                                        <div className="p-col">
                                            <InputText value={this.state.grade}
                                                onChange={(e) => this.setState({ grade: e.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Insert TakesCourse" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertTakesCourse(e)} />
                    </TabPanel>

                    <TabPanel header="Insert Prerequisite">
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
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Insert Prerequisite" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertPrerequisite(e)} />
                    </TabPanel>
                    <TabPanel header="Instert Major">
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

                                            <InputText value={this.state.name}
                                                onChange={(e) => this.setState({ name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Major Type</label>
                                        <div className="p-col">
                                            <Dropdown value={this.state.major_type} options={major_options}
                                                onChange={(e) => {
                                                    this.setState({ major_type: e.value })
                                                }} placeholder="Select a scolarship" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <div className="p-field p-grid">
                                        <label className="p-col-fixed"
                                            style={{ width: '100px' }}>Update?</label>
                                        <div className="p-col">
                                            <InputSwitch checked={this.state.isUpdate} onChange={(e) => this.setState({ isUpdate: e.value })} />

                                        </div>
                                    </div>
                                </div>
                                <div className="p-col-12 p-md-4"></div>

                            </div>
                        </div>
                        <Button label="Insert Employee" className="p-button-raised p-button-rounded"
                            onClick={(e) => this.insertMajor(e)} />
                    </TabPanel>



                </TabView>

            </div>
        );
    }
}

export default AddPerson;
