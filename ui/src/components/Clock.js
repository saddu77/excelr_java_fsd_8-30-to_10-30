import React from "react"

// Class Component
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date : new Date() }
    }
    // Life cycle method
    componentDidMount(){
       const interValID =  setInterval( () => {
            this.mytick()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.interValID);
    }

    mytick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
            <>
                <h2> Day is : {this.props.day}</h2>
                <h2> Now the time is { this.state.date.toLocaleTimeString() } </h2>
            </>
        )
    }
}

export default Clock