import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="counter">
                <span>{this.props.fugaVal.fuga}</span>
                <button onClick={ () => this.props.handleClick() }>増加</button>
                <p>{this.props.text.inputText}</p>
            </div>
        )
    }
}