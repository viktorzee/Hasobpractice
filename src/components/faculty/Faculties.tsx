import { useState } from "react";
import LeftSideBar from "../NavBar/LeftSideBar";
import data from '../../assets/Facultylist.json'
import dataOne from '../../assets/programData.json'
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import RightSideBar from "../NavBar/RightSideBar";
import './faculties.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Faculties = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, seteditModal] = useState(false);
    const [faculties, setFaculties] = useState(data);
    const toggle:any = () => setAddModal(!addModal);
    const toggleEdit:any =()=> seteditModal(!editModal)
    
    return(
        <div className="program-container">
            <div className="left-sidebar">
                <LeftSideBar />
            </div>
            <div className="center-view">
            <div className ="nav-section">
                    <div>Faculties</div>
                    <div className="add-filter-container">
                        <div style={{marginRight:"20px"}}>
                            <Button onClick={toggle}>Add +</Button>
                        </div>
                        <div>
                        <Input 
                                    type="select"
                                    name="select"
                                    id= "filter"
                                    className = "filterItems"
                            >
                                <option  >Filter</option>
                                <option value="byCreated">By Created</option>
                                <option value="byUpdated">By updated</option>
                                <option value="alphabetical">Alphabetical</option>
                            </Input>
                        </div>                            
                    </div>
                    </div>            
                <Container>
                    <Row xs={2} noGutters>
                    {faculties.map((faculty, index) => {
                        return(
                            <Col className="bg-light-border col-class">
                                <div><img src={Logo} alt="logo" /></div>
                                <div key= {index}>
                                    <h3>{faculty.faculty}</h3>
                                   <p>{faculty.location}</p>
                                   <p>{faculty.phoneNumber}</p>
                                   <p>{faculty.email}</p>
                                   <span><Link to = "" onClick={toggleEdit}>Edit</Link></span>
                                   <span><Link to='../programs/ViewProgram'>Delete</Link></span>
                               </div>
                           </Col>
                       )
                   })}
                   </Row>
                </Container>
            </div>

            
            
            
            {/*Add new faculty modal */}
            {/* {showModal === true && (
                <div className = "new-facultyModal-container">
                    <div className = "new-facultyModal">
                        <NewFacultyModal />
                    </div>
                </div>
            )} */}
            {/*edit faculty modal */}
            {/* {showModal === true && (
                <div className = "edit-facultyModal-container">
                    <div className = "edit-facultyModal">
                        <EditFacultyModal />
                    </div>
                </div>
            )} */}
            {/*New Modal */}
            <div className= "add new">
                <Modal
                    isOpen={addModal}
                    toggle={toggle}
                >
                    <ModalHeader>New Faculty</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input 
                                type="text" 
                                name="name" 
                                id="name-field" 
                                placeholder="Input name of department" 
                            />   
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6} >
                                <FormGroup>
                                    <Label>ID</Label>
                                    <Input 
                                        type="number" 
                                        name="id" 
                                        id="faculty-id" 
                                        placeholder="Input Faculty Id" 
                                        
                                    /> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label className="input">Phone #</Label>
                                    <Input 
                                        type="number" 
                                        name="phone" 
                                        id="contact" 
                                        placeholder="Input Phone Nunmber" 
                                        className="input"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        
                        <Row form className="code">
                            <Col md = {6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Input Email Address" 
                                        /> 
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="input">Web Page</Label>
                                        <Input 
                                            type="text" 
                                            name="webpage" 
                                            id="webpage" 
                                            placeholder="Input Faculty web link" 
                                            className="input"
                                        />
                                </FormGroup>
                            </Col>
                        </Row>    
                        <FormGroup>
                            <Label>Address</Label>
                            <Input 
                                type="text" 
                                name="address" 
                                id="address" 
                                placeholder="Input Physical address of department" 
                                className="input"
                            />
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Head of Faculty</Label>
                                    <Input type="select" name="facultyHead" id="faculty-head">
                                        <option value="">Prof AA</option>
                                        <option value="">Prof AB</option>
                                        <option value="">Prof ME</option>
                                        <option value="">Prof CE</option>
                                        <option value="">Prof OS</option>
                                        <option value="">Prof ID</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md ={6}>
                                <Input type="file" name="file" id="logo-upload" className="input file-upload"/>
                            </Col>
                        </Row>
                    <Button className='cancel-btn'>Cancel</Button>
                    <Button className='save-btn'>Save</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
            {/*New Modal */}
            <div className= "add new">
                <Modal
                    isOpen={addModal}
                    toggle={toggle}
                >
                    <ModalHeader>New Faculty</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input 
                                type="text" 
                                name="name" 
                                id="name-field" 
                                placeholder="Input name of department" 
                            />   
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6} >
                                <FormGroup>
                                    <Label>ID</Label>
                                    <Input 
                                        type="number" 
                                        name="id" 
                                        id="faculty-id" 
                                        placeholder="Input Faculty Id" 
                                        
                                    /> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label className="input">Phone #</Label>
                                    <Input 
                                        type="number" 
                                        name="phone" 
                                        id="contact" 
                                        placeholder="Input Phone Nunmber" 
                                        className="input"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        
                        <Row form className="code">
                            <Col md = {6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Input Email Address" 
                                        /> 
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="input">Web Page</Label>
                                        <Input 
                                            type="text" 
                                            name="webpage" 
                                            id="webpage" 
                                            placeholder="Input Faculty web link" 
                                            className="input"
                                        />
                                </FormGroup>
                            </Col>
                        </Row>    
                        <FormGroup>
                            <Label>Address</Label>
                            <Input 
                                type="text" 
                                name="address" 
                                id="address" 
                                placeholder="Input Physical address of department" 
                                className="input"
                            />
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Head of Faculty</Label>
                                    <Input type="select" name="facultyHead" id="faculty-head">
                                        <option value="">Prof AA</option>
                                        <option value="">Prof AB</option>
                                        <option value="">Prof ME</option>
                                        <option value="">Prof CE</option>
                                        <option value="">Prof OS</option>
                                        <option value="">Prof ID</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md ={6}>
                                <Input type="file" name="file" id="logo-upload" className="input file-upload"/>
                            </Col>
                        </Row>
                    <Button className='cancel-btn'>Cancel</Button>
                    <Button className='save-btn'>Save</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
            {/*Edit Modal */}
            <div className= "add new">
                <Modal
                    isOpen={editModal}
                    toggle={toggleEdit}
                >
                    <ModalHeader>Edit Faculty</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Name:</Label>
                            <Input 
                                type="text" 
                                name="name" 
                                id="name-field" 
                                placeholder="Input name of department" 
                            />   
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6} >
                                <FormGroup>
                                    <Label>ID</Label>
                                    <Input 
                                        type="number" 
                                        name="id" 
                                        id="faculty-id" 
                                        placeholder="Input Faculty Id" 
                                        
                                    /> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <Label className="input">Phone #</Label>
                                    <Input 
                                        type="number" 
                                        name="phone" 
                                        id="contact" 
                                        placeholder="Input Phone Nunmber" 
                                        className="input"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        
                        <Row form className="code">
                            <Col md = {6}>
                                <FormGroup>
                                    <Label>Email</Label>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Input Email Address" 
                                        /> 
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="input">Web Page</Label>
                                        <Input 
                                            type="text" 
                                            name="webpage" 
                                            id="webpage" 
                                            placeholder="Input Faculty web link" 
                                            className="input"
                                        />
                                </FormGroup>
                            </Col>
                        </Row>    
                        <FormGroup>
                            <Label>Address</Label>
                            <Input 
                                type="text" 
                                name="address" 
                                id="address" 
                                placeholder="Input Physical address of department" 
                                className="input"
                            />
                        </FormGroup>
                        <Row form className="code">
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Head of Faculty</Label>
                                    <Input type="select" name="facultyHead" id="faculty-head">
                                        <option value="">Prof AA</option>
                                        <option value="">Prof AB</option>
                                        <option value="">Prof ME</option>
                                        <option value="">Prof CE</option>
                                        <option value="">Prof OS</option>
                                        <option value="">Prof ID</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md ={6}>
                                <Input type="file" name="file" id="logo-upload" className="input file-upload"/>
                            </Col>
                        </Row>
                    <Button className='cancel-btn'>Cancel</Button>
                    <Button className='save-btn'>Update</Button>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>

            
            {/* For right sidebar */}
            <div className="right-sidebar">
               <div className="right-sidenav">
                    <RightSideBar />
                </div> 
            </div>
        </div>
    )
}

export default Faculties;