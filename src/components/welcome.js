import React, { Component } from 'react';
import '../css/welcome.css';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <h2>欢迎你！</h2>
                </div>
            </div>
        )
    }
}
