import React from 'react';
import './Headers.css';
class Headers extends React.Component {
    render() {
        const status = this.props.status
        return (
            <header className="Header__text">
                <h1>{status}Emoji Search{status}</h1>
            </header>
        )
    }
}
export default Headers;