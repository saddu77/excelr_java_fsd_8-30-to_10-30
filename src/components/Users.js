import React, { useEffect , useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';



function Users() {
    const [users,setUsers] = useState([]);
    const [id,setId ] = useState('');
    const [updatedEMail,setUpdatedEmail ] = useState('');
    const [updatedPwd,setUpdatedPwd] = useState('');
  

    useEffect(()=>{
        axios.get("http://localhost:8080/api/users").then(
            res => {
                console.log(res.data)
                setUsers(res.data)
            }
        )
    },[])

    const updateRecord = (id) => {
        alert('Update button clicked')
        alert(id + ' ' + updatedEMail + ' ' + updatedPwd);
        // call PUT API
    }

    const deleteRecord = (id) => {
        alert("Delete button clicked with id: " + id);
        //display confirmation dialogue
        //if user confirms in adialogue: then call delete API
    }

    return(
        <>
        <h2> Users List: </h2>
        <li> <Link id="link" to="/home">Home</Link> </li>     

        <table id="users">
       
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Password</th>
                <th>UPDATE</th>
                <th>Delete</th>
            </tr>
            {users.map(user => (
                <tr>
                    <td>{user.id}</td>    
                    {/* <td><input type="text" name="id" defaultValue={user.id} value={e => setId(e.target.value)} readOnly/></td>                     */}
                    <td><input type="text" name="email" onChange={e => {setUpdatedEmail(e.target.value)}} defaultValue={user.email}/></td>
                    <td><input type="text" name="password"   onChange={e => {setUpdatedPwd(e.target.value)}} defaultValue={user.password}/></td>
                    <td><input type="submit" value="UPDATE" onClick={ e => updateRecord(user.id)} /></td>
                    <td><input type="submit" value="DELETE" onClick={e => deleteRecord(user.id)}/></td>
                    
                </tr>
            ))}
        </table>

        </>
    )

}

export default Users;