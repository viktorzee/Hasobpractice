import React from 'react'

const AddProgramModal = () => {
  return (
      <div>
          {/*
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
          */}
    </div>
  )
}

export default AddProgramModal