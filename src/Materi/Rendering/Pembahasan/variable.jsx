import React from "react";

export default class Variable extends React.Component {
    state = {
        a: null,
        b: true,
        c: "",
        d: 0
    }
    render() {
        return (
            <div>
                <div>a: {this.state.a}</div>
                <div>a: {this.state.b}</div>
                <div>a: {this.state.c}</div>
                <div>a: {this.state.d}</div>
                <div>a: {this.props.e}</div>
            </div>
        )
    }
}