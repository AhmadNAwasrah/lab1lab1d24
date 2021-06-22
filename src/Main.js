
import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import DataB from './data.json'


class Main extends Component {
    render() {

        return (
            <div>  {DataB.map((best, index) => {
                return <HornedBeast clicks={0} clicks={this.incresClick} img={best.image_url} modal={this.props.selectedBeast} title={best.title} description={best.description}
                />
            })}


            </div>
        )

    }
}

export default Main;