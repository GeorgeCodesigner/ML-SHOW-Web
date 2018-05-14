import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import Header from '../header';
import Footer from '../footer';

import 'antd/dist/antd.css';
import '../../css/sl/LinealReg.css';

export default class LinealReg extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Header showBackIcon={true} title="线性回归算法" />
                <div className='lr-content'>
                    <span>线性回归算法</span>
                </div>
                <Footer/>
            </div>
        )
    }
}
