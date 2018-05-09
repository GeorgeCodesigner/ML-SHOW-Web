import React, { Component } from 'react';
import { Icon } from 'antd';

import 'antd/dist/antd.css';
import '../css/header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            showBackIcon:props.showBackIcon
        }
    }
    render() {
        return (
            <header className="header-wrap">
                {this.state.showBackIcon?
                    <Icon type="left" className="header-backicon"/> :""
                }
                <span className="header-title">{this.props.title}</span>
            </header>
        );
    }
}