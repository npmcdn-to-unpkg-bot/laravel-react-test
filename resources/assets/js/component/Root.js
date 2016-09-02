import React from 'react'
import { Link } from 'react-router'

export default class Root extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="appTitle">test</h1>
                <ul role="nav">
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}