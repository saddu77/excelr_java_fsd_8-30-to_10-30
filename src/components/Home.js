import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
        <ul>
            <li> <Link id="link" to="/home">Home</Link> </li>     
            <li> <Link id="link" to="/users">Users</Link> </li>            
            <li> Products </li>
            <li> Orders </li>
            <li> About US </li>
            <li> Contact US</li>
            <li> <Link id="link" to="/">Logout</Link> </li>
            
        </ul>
        
        {/* <h2>Home Component </h2> */}
        </>
    )
}

export default Home