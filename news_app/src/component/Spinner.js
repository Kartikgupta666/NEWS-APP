import React, { Component } from 'react'
import spinner from "./spinner.css"
export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="boox " style={spinner}> </div>
            </div>
        )
    }
}

export default Spinner

