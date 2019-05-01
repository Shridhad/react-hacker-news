import React from 'react';

import "./Header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a href="/" className="site-name">Hacker News Client</a>
                </div>
            </div>
        );
    }
}