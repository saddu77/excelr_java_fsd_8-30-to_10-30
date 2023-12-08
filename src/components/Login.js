import { useState } from "react"
import { Link ,useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [uname,setUname] = useState('');
    const [pwd,setPwd] = useState('');

    const login = () => {
        // alert(uname + ' ' + pwd);
        // we have hardcoded vales for username and password
        // In Real time web app, authenticate : calling API - Restful Webservice [POST,GET,PUT,DELETE]
        if( uname == 'admin' && pwd == 'admin123'){                
            navigate('/home');
        } else{
            alert("Please verify credentials");
        }
    }
    return(
        <>
         <div id="login-div">
            <h2> Login </h2>
            Username: <input type="text" value={uname}
                                 onChange={(event) => setUname(event.target.value)} /> <br /> <br />
            Password: <input type="password"  value={pwd} 
                                onChange={(event) => setPwd(event.target.value)} /> <br /> <br />
            <input type="submit" onClick={login} value="LOGIN" /> <br /> <br />
            <Link  id="link"  to="/signup">Not yet Registered?? Sign Up</Link>
         </div>
        </>
    )
}

export default Login