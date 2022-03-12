import { Button, Table } from "reactstrap"
import LeftSideBar from "../NavBar/LeftSideBar"
import RightSideBar from "../NavBar/RightSideBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewProgram.css'





const ViewProgram = () => {
    const handleFullTimeClick = ():void => {

    }
    const handlePartTimeClick = ():void => {

    }
    
    return(
        <div className = 'view-program-container'>
           <div className="left-sidebar">
                    <LeftSideBar />
            </div>
            <div className="center-view">
                <div className ="nav-section">
                    <div>Semester</div>
                    <div>
                        <div >
                            <Button className="add-sort-btn">Add</Button>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div>
                        <p><span>Program:</span> Electrical Engineering</p>
                        <p><span>Type:</span> Undergraduate</p>
                        <p><span>Degree:</span> Bachelor (BSc)</p>
                        <p><span>Option:</span></p> <button onClick={handleFullTimeClick}>Full Time</button> <button onClick = {handlePartTimeClick}>Part-Time</button>
                    </div>
                    <div className="semester-list">
                    <Table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Courses</th>
                                <th>Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EE101- Introduction to Eletrical Engineering</td>
                                <td>Introduction to Physics</td>
                                <td>CSC101-Introduction to Computer Programming</td>
                                <td>CSC101-Introduction to Computer Programming</td>
                                <td>MATH101-Engineering Mathematics</td>
                                <td>Engine Drawing</td>
                                <td>Workshop Practice</td>
                            </tr>
                            <tr>
                                <th>Total Credit: <span>23</span>  </th> <th>Add</th> <th>delete</th> <th>Add+</th>
                            </tr>
                        </tbody>
                        </Table>
                    </div>
                            
            </div>
            <div className="right-sidebar">
               <div className="right-sidenav">
                    <RightSideBar />
                </div> 
            </div>
        </div>
        </div>
    )
}

export default ViewProgram;