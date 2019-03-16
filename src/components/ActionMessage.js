import React, { Component } from 'react';

// Styles
import '../css/ActionBar.css';

class ActionMessage extends Component {
    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }
    setClass() {
        if(this.props.message === " ") {
            return " ";
        } else {
            return "move";
        }
    }
    render() {
        return(
            <div
                id="actionMessage" 
                className={this.setClass()}>
                {this.props.message}
            </div>
        );
    }
};

export default ActionMessage;
