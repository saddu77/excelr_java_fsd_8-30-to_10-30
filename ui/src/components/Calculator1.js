import React from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celsuis >= 100){
        return <p>The water would boil</p>
    }
    return <p> The water would not boil </p>
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round( output * 1000 ) / 1000;
    return rounded.toString();
}
function toCelsuis(fahrenheit){
    return (fahrenheit - 32 ) * 5 / 9;
}

function toFahrenheit(celsius){
    return (celsius * 9 / 5 ) + 32;
}

class Calculator1 extends React.Component{
    constructor(props){
        super(props);
        this.state = { temperature: '', scale:'c'};
        this.handleCelsuisChange = this.handleCelsuisChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsuisChange(temperature){
        this.setState({scale:'c', temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale:'f', temperature})
    }

    render(){

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsuis):temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit): temperature;
        return(
            <>
            <div>
                <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange = {this.handleCelsuisChange} />

                <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange = {this.handleFahrenheitChange} />

                <BoilingVerdict
                 celsuis={parseFloat(celsius)}
                />


            </div>
            </>
        )
    }
}

export default Calculator1;