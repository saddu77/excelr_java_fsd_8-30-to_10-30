import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Clock from './components/Clock';
import NameForm from './components/NameForm';
import Greetings from './components/Greetings';
import LoginControl from './components/LoginControl';
import NumberList from './components/NumberList';
import Calculator from './components/Calculator';

function formatName(user){
  return user.firstName + " " + user.lastName;
}

function App() {
  const name = "John";
  const age = 23;

  const username = {
    firstName:'John',
    lastName: 'Doe'
    }
  const numbers = [10,20,30,40,50]
  return (
    <>
     <h2> Welcome to React!!!</h2>
     <h2> My Name is {name} and age is {age} </h2>
     <h2> { formatName(username)}</h2>
     <Welcome name="Alex"/>
     <Clock day="Monday" />
     <NameForm />
     {/* <Greetings isLoggedIn={true} /> */}
     <LoginControl />
     <NumberList numbers = {numbers}/>
     <Calculator />
    </> 
  );
}

export default App;
