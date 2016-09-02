import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.props.text.inputText)
        this.props.handleSubmit(this.props.text.inputText)
    }

    handleChange(e) {
        this.props.handleChange(e.target.value)
    }


    render() {
        let message = 'テキストを入れて送信を押してください。'
        if(this.props.text.isFetching == true){
            message = '保存中...'
        }
        return (
            <div className="form">
                <p>{message}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button type="submit">送信</button>
                </form>
                <p style={{color:this.props.text.inputText}}>{this.props.text.inputText}</p>
                <hr />
                <p>{this.props.text.presentText}</p>
            </div>
        )
    }
}