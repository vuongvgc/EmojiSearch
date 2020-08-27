import React from 'react';
import './Headers.css';
class Headers extends React.Component {
    render() {
        return (
            <header className="Header__text">
                <h1>{logoIcon.symbol}Emoji Search{logoIcon.symbol}</h1>
            </header>
        )
    }
}
const logoIcon ={   "title": "Heartbeat",
                    "symbol": "💓"}
export default Headers;