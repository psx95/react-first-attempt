import React, { Component } from 'react' // destructuring so that we no longer need to write React.Component
import ReactDOM from 'react-dom'

// This is an ES6 class
// All the names of the components must be started with an upper case letter
class Message extends Component {
    render() {
        console.log(this.props)    
        return (
            <div>                
                <h1 style={{ color: this.props.color }}>
                    {this.props.msg} and has Time to live (TTL) of {this.props.ttl - 6}
                </h1> 
            </div>
        )
    }
}

let gymData = {
    days: 10,
    target: 30,
    durationInMin: 60,
    caloriesBurnt: 300
}

// using custom methods inside the React Component
class GymDaysCounter extends React.Component {
    getPercentage = decimal => {
        return decimal * 100 + "%"
    }

    calculateGoalProgress = (completed, total) => {
        return this.getPercentage(completed/total)
    }
    render() {
        console.log(gymData)
        const { days, target, duration, caloriesBurnt } = this.props // imported all here, so we no longer need to use this.props.<porperty_name>       
        return (
            <section>
                Gym Counter
                <div>
                    <p>Total Days so far : {days}</p>
                </div>
                <div>
                    <p>Target : {target}</p>
                </div>
                <div>
                    <p>Total workout duration : {duration}</p>
                </div>
                <div>
                    <p>Total Calories burnt per session : {caloriesBurnt}</p>
                </div>
                <div>
                    <p>Goal Progress : {this.calculateGoalProgress(days, target)}</p>
                </div>
            </section>
        )
    }
}

// Another way to create React Components ->  using ES6 functions instead of classes 

let skiData = {
    totalDays: 50,
    backcountryDays: 10,
    powderDays: 20,
    goal: 100
}

const getPercentage = decimal => {
    return decimal * 100 + "%"
}

const calculateGoalProgress = (completed, total) => {
    return getPercentage(completed/total) // no need for using this, since its not inside a React Component
}

const SkiDayCounter = (props) => {
    return (
        <section>
            Ski Counter
            <div>
                <p>
                    Total Days: {props.totalDays}
                </p>
            </div>
            <div>
                <p>
                    Backcountry Days: {props.backcountryDays}
                </p>
            </div>
            <div>
                <p>
                    Powder Days: {props.powderDays}
                </p>
            </div>
            <div>
                <p>
                    Goal Progress: {calculateGoalProgress(props.totalDays, props.goal)}
                </p>
            </div>
        </section>
    )
}

// to render multiple components together, wrap them up in a single component using some HTML tag like div
ReactDOM.render(
    <div>
        <Message ttl="50" msg="This message is dynamic" color="blue" />
        <br></br>
        <SkiDayCounter
            totalDays={skiData.totalDays}
            backcountryDays={skiData.backcountryDays}
            powderDays={skiData.powderDays}
            goal={skiData.goal} />
        <br></br>
        <GymDaysCounter
            days={gymData.days}
            target={gymData.target}
            duration={gymData.durationInMin}
            caloriesBurnt={gymData.caloriesBurnt}/>
    </div>,    
    document.getElementById("root"))