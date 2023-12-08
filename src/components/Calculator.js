import React from "react"

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p> The water would boil. </p>
    }
    return <p> The water would not boil. </p>
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = { temperature: ''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState( { temperature: event.target.value });
    }
    render(){
        const temperature = this.state.temperature;
        return(
            <>
             <fieldset>
                <legend>Enter Temperature in Celsuis: </legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
             </fieldset>
            </>
        )
    }
}

export default Calculator