import React, {Component} from 'react'
import './styles/style.css'

class Button extends Component {
    isOperator = value => {
        return !isNaN(value) || value === "." || value === "="
    }

    render() {
       return (
            <button 
                className={`button ${this.isOperator(this.props.name) ? "" : "operator"}`}
                onClick={() => this.props.handleClick(this.props.name)}
            >
                {this.props.name}
            </button>
        ) 
    }
}

export default Button;