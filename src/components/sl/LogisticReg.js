import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import Header from '../header';
import Footer from '../footer';

import 'antd/dist/antd.css';
import '../../css/sl/LogisticReg.css';

export default class LogisticReg extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Header showBackIcon={true} title="Logistic分类算法" />
                <div className='logr-content'>
                    <span>Logistic分类算法</span>
                </div>
                <Footer/>
            </div>
        )
    }
}
