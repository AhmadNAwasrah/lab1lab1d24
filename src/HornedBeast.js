import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks:this.props.clicks,
        }
    }
    incresClick = () => {
        this.setState({ clicks:this.state.clicks+1 })

    }
    render() {

        return (
            <div>
                 <h2> {this.props.title}</h2>
                <img onClick={this.incresClick} height='300px' height='300px' src={this.props.image_url}  />
                <p>{this.props.description} </p>
                <span color='red' font='bold'>{this.state.clicks}</span>
            </div>
        )
    }
}

export default HornedBeast
