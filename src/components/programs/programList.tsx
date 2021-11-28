import { Link } from "react-router-dom";

const ProgramList =(program:any, index:any) => {
    return(
            <tr>
                <td>{index+1}</td>
                <td>{program.code}</td>
                <td>{program.name}</td>
                <td>{program.department_id}</td>
                <td>{program.degree}</td>
                <td >
                    <tr>
                        <td className="view-link"><Link to="" style={{color: "blue", textDecoration: "none"}}>View</Link></td>
                        <td className="edit-link"><Link to="" style={{color: "blue", textDecoration: "none"}}>Edit</Link></td>
                    </tr>                           
                </td> 
            </tr>
    )
}

export default ProgramList;