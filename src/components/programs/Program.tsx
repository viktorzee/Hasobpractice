import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSideBar from '../NavBar/LeftSideBar';
import RightSideBar from '../NavBar/RightSideBar';
import data from '../../assets/programData.json'
import './program.css'
import {v4 as uuidv4} from 'uuid'


const Programs = () => {
    const [showModal, toggle] = useState(false)
    const [showEditModal, toggleEdit] = useState(false)
    const [programs, setPrograms] = useState(data)
    // const [modal, toogleModal] = useState(false);
    const [addFormData, setAddFormData] = useState({
        
        code: "",
        name: "",
        department_id: "",
        degree: ""
    })

    const toggleModal = ():void => toggle(!showModal)
    const toggleEditModal = ():void => toggleEdit(!showEditModal)

    const navigate = useNavigate()

    const handleAddProgramOnChange = (e:any) =>{
        e.prevemtDefault();

        const fieldName:any = e.target.getAttribute("name");
        const fieldValue = e.target.value.value;

        const newFormData:any = {...addFormData};
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData);
    }

    // const handleAddProgramSubmit = (e: any): void => {
    //     e.preventDefault();

    //     const newProgram = {
    //         id: uuidv4(),
    //         code: addFormData.code,
    //         name: addFormData.name,
    //         department_id: addFormData.department_id,
    //         degree: addFormData.degree
    //     }

    //     const newPrograms = [...programs, newProgram]
    //     setPrograms(newPrograms)
    // }

    const handleViewButton = (id?: string):void => {
        navigate('EditProgram/:id')
    }
    return(
        <div className="program-container">
            <div className="left-sidebar">
                <LeftSideBar />
            </div>
            <div className="center-view">
                <div className="nav-section">
                    <div><p>Semester</p></div>
                    <div className="add-filter-container">
                        <div style={{ marginRight: "20px" }}>
                            <Button onClick={toggleModal}>Add +</Button>
                        </div>
                        <div>
                            <Input
                                type="select"
                                name="select"
                                id="filter"
                                className="filterItems"
                            >
                                <option>Filter</option>
                                <option value="byCreated">By Created</option>
                                <option value="byUpdated">By updated</option>
                                <option value="alphabetical">Alphabetical</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <div className="program-table">
                        <Table>
                            <thead style={{ backgroundColor: "black", color: 'white' }}>
                                <tr>
                                    <th>S/N</th>
                                    <th>Program Code</th>
                                    <th>Program Name</th>
                                    <th>Department</th>
                                    <th>Degree Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program: any, index: any) => {
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{program.code}</td>
                                            <td>{program.name}</td>
                                            <td>{program.department_id}</td>
                                            <td>{program.degree}</td>
                                            <td >
                                                <tr>
                                                    <td className="view-link"><Link to="" style={{color: "blue", textDecoration: "none"}}>View</Link></td>
                                                    <td className="edit-link" onClick={toggleEditModal}><Link to="" style={{color: "blue", textDecoration: "none"}}>Edit</Link></td>
                                                </tr>                           
                                            </td>  
                                        </tr>
                                    )
                                   
                                })}
                            </tbody>
                                
                    </Table>
                <div>
                <Pagination className="page-numbers">
                    <PaginationItem disabled>
                        <PaginationLink
                            href="#"
                            previous />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            ...
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            9
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            10
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            next />
                    </PaginationItem>
                </Pagination>
            </div>
            </div>

            
        </div>
        <Modal 
            isOpen={showModal}
            toggle={toggleModal}
        >
             <ModalHeader closeButton>
                 <p style={{color: "blue", textAlign:"center"}}>Add Program</p>
             </ModalHeader>
             <ModalBody>
                 <Form>
              <FormGroup>
                  <Label>Name</Label>
                  <Input 
                     type="text" 
                     name="name" 
                     id="name-field" 
                     value= "name"
                     placeholder="Input Program Name--"
                     onChange= {handleAddProgramOnChange} 
                 /> 
             </FormGroup>
                <Row className="code">
                    <Col md={6}>
                        <FormGroup>
                            <Label>Code</Label>
                            <Input 
                                type="number" 
                                name="code" 
                                id="program-code" 
                                value= "code"
                                placeholder="Input Program Code--" 
                                onChange={handleAddProgramOnChange}
                            />  
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Type</Label>
                            <Input type="select" name="facultyHead" className="input" value= "type" onChange={handleAddProgramOnChange}>
                                <option value="" disabled>--Choose Program Type</option>
                                <option value="">Full TIme</option>
                                <option value="">Part time</option>
                                <option value="">Weekend</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="code">
                    <Col>
                        <FormGroup>
                            <Label>Department</Label>
                            <Input type="select" name="facultyHead" id="faculty-head" value= "department" onChange={handleAddProgramOnChange}>
                                <option value="" disabled>--Choose Department--</option>
                                <option value="">Mechnical Engineering</option>
                                <option value="">Chemical Engineering</option>
                                <option value="">Pertroleum Engineering</option>
                                <option value="">Food Science and Technology</option>
                                <option value="">Metergulry</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                    <FormGroup>
                        <Label>Degree</Label>
                        <Input type="select" name="facultyHead" id="faculty-head"  value= "degree" onChange={handleAddProgramOnChange}>
                            <option value="" disabled>--Choose Degree--</option>
                            <option value="">B.Eng</option>
                            <option value="">B.Sc</option>
                            <option value="">B.A</option>
                            <option value="">B.Edu</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            
             <p> Requirements</p>
            <Row className="code">
                <Col md={6}>
                    <FormGroup>
                        <Label>Mandatory credit Load</Label>
                        <Input 
                            type="number" 
                            name="creditLoad" 
                            id="credit-load" 
                            disabled
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Minimum Credit Load</Label>
                        <Input 
                            type="number" 
                            name="maxCreditLoad" 
                            id="credit-load" 
                            disabled
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="code">
                <Col md={6}>
                    <FormGroup>
                        <Label>Minimum Credit Load</Label>
                        <Input 
                        type="number" 
                        name="minCreditLoad" 
                        id="credit-load" 
                        disabled
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Program Logo</Label>
                        <Input type="file" name="file" id="logo-upload" />
                    </FormGroup>
                </Col>
            </Row>
            <Button className='cancel-btn'>Cancel</Button>
            <Button className='save-btn'>Save</Button>
         </Form> 
            </ModalBody>
        </Modal>
        <Modal 
            isOpen={showEditModal}
            toggle={toggleEditModal}
        >
             <ModalHeader closeButton>
                 <p style={{color: "blue", textAlign:"center"}}>Edit Program</p>
             </ModalHeader>
             <ModalBody>
                 <Form>
              <FormGroup>
                  <Label>Name</Label>
                  <Input 
                     type="text" 
                     name="name" 
                     id="name-field" 
                     value= "name"
                     placeholder="Input Program Name--"
                     onChange= {handleAddProgramOnChange} 
                 /> 
             </FormGroup>
                <Row className="code">
                    <Col md={6}>
                        <FormGroup>
                            <Label>Code</Label>
                            <Input 
                                type="number" 
                                name="code" 
                                id="program-code" 
                                value= "code"
                                placeholder="Input Program Code--" 
                                onChange={handleAddProgramOnChange}
                            />  
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Type</Label>
                            <Input type="select" name="facultyHead" className="input" value= "type" onChange={handleAddProgramOnChange}>
                                <option value="" disabled>--Choose Program Type</option>
                                <option value="">Full TIme</option>
                                <option value="">Part time</option>
                                <option value="">Weekend</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="code">
                    <Col>
                        <FormGroup>
                            <Label>Department</Label>
                            <Input type="select" name="facultyHead" id="faculty-head" value= "department" onChange={handleAddProgramOnChange}>
                                <option value="" disabled>--Choose Department--</option>
                                <option value="">Mechnical Engineering</option>
                                <option value="">Chemical Engineering</option>
                                <option value="">Pertroleum Engineering</option>
                                <option value="">Food Science and Technology</option>
                                <option value="">Metergulry</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                    <FormGroup>
                        <Label>Degree</Label>
                        <Input type="select" name="facultyHead" id="faculty-head"  value= "degree" onChange={handleAddProgramOnChange}>
                            <option value="" disabled>--Choose Degree--</option>
                            <option value="">B.Eng</option>
                            <option value="">B.Sc</option>
                            <option value="">B.A</option>
                            <option value="">B.Edu</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            
             <p> Requirements</p>
            <Row className="code">
                <Col md={6}>
                    <FormGroup>
                        <Label>Mandatory credit Load</Label>
                        <Input 
                            type="number" 
                            name="creditLoad" 
                            id="credit-load" 
                            disabled
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Minimum Credit Load</Label>
                        <Input 
                            type="number" 
                            name="maxCreditLoad" 
                            id="credit-load" 
                            disabled
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="code">
                <Col md={6}>
                    <FormGroup>
                        <Label>Minimum Credit Load</Label>
                        <Input 
                        type="number" 
                        name="minCreditLoad" 
                        id="credit-load" 
                        disabled
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label>Program Logo</Label>
                        <Input type="file" name="file" id="logo-upload" />
                    </FormGroup>
                </Col>
            </Row>
            <Button className='cancel-btn'>Cancel</Button>
            <Button className='save-btn'>Save</Button>
         </Form> 
            </ModalBody>
        </Modal>
        <div className="right-sidebar">
                <div className="right-sidenav">
                    <RightSideBar />
                </div>
        </div>
        </div>
    )
}

export default Programs;


//               
//                     