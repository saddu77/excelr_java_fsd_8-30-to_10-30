function UserGreeting(props){
    return <h2> Welcome User!!!</h2>
}

function GuestGreeting(props){
    return <h2> Welcome Guest !!! please Sign Up </h2>
}

// Conditional Rendering
function Greetings(props){
    const isLoggedIn = props.isLoggedIn;  
        if(isLoggedIn){
            return <UserGreeting />;
        }else {
            return <GuestGreeting />;
        }  
}
export default Greetings