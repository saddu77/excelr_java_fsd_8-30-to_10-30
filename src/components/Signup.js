import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const [uname,setUname] = useState('');
    const [pwd,setPwd] = useState('');
    const navigate = useNavigate();
    const register = () => {
        // alert(uname + ' ' + pwd);
        // Calling  SIGN UP API
        const url = "http://localhost:8080/api/users";
        const body = {
            "email": uname,
            "password": pwd
        }
        axios.post(url,body)
        .then(res => {
            alert(JSON.stringify(res.data));
            navigate('/login');
        })
    }
    return(
        <>           
            <div id="signup-div">
                <h2> Sign Up </h2>
                Username: <input type="text" value={uname}
                                 onChange={(event) => setUname(event.target.value)}>                                
                          </input>                                 
                                  <br /> <br />
                Password: <input type="password" value={pwd} 
                                onChange={(event) => setPwd(event.target.value)}>
                          </input> 
                          <br /> <br />
                <input type="submit" value="SIGN UP" onClick={register}/>  <br /> <br />
                <Link id="link" to="/login">Already Registered?? Login</Link>
            </div>
        </>
    )
}

export default Signup