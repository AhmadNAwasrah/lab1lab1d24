import React, { Component } from 'react'

 class HornedBeast extends Component {
    render() { 
        console.log(this.props)
        return (
            <div>
                <h1>Hello </h1>
                <img  height='300px' height='300px'  src={this.props.image_url} / >
                <p></p>
            </div>
        )
    }
}

export default HornedBeast
