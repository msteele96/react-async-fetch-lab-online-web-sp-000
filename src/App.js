// create your App component here
import React, { Component } from "react";

export default class App extends Component {
    // constructor(props) {
    //     super()
        // this.state = {key:value}
    // }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => this.setState({
            people: json
        }))
    }

    render() {
        return <div>{this.state}</div>
    }
}