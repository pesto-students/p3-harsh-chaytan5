import React, { Component } from "react";

export class ErrorBoundary extends Component{
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                alert('Invalid Input')
            )
        } else {
            return this.props.children;
        }
    }
}