import { useState } from "react"
import { Link } from 'react-router-dom';

function Signup(){
    const [uname,setUname] = useState('');
    const [pwd,setPwd] = useState('');

    const register = () => {
        alert(uname + ' ' + pwd);
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