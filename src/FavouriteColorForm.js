import React, { Component } from 'react'

class FavouriteColorForm extends Component {
    state = { value: '#ffffff' } // to store the color
    
    newColor = (event) => {// the event type here is a color picking event
        console.log(`State changed to ${event.target.value}`)
        this.setState({value: event.target.value})
    }

    submit = (event) => { // the event here is a click event on the form submit button
        console.log(`New Color: ${this.state.value}`)
        event.preventDefault() // prevents the default redirect behaviour of on submit click
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Favourite Color: 
                    <input type="color" onChange={this.newColor} value={this.state.value}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default FavouriteColorForm