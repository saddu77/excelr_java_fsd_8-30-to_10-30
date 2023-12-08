import React from 'react';

// React Form - class component
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { name : ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            name : event.target.value            
        })
    }

    handleSubmit = (event) => {
        alert(this.state.name);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={ (event) => this.handleSubmit(event)}>
                <label>Name: </label>
                <input type='text' value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                <input type='submit' />
            </form>
        )
    }
}
export default NameForm