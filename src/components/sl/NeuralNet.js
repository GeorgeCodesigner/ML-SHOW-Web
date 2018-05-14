import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import Header from '../header';
import Footer from '../footer';

import 'antd/dist/antd.css';
import '../../css/sl/NeuralNet.css';

export default class NeuralNet extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <Header showBackIcon={true} title="神经网络算法" />
                <div className='nn-content'>
                    <span>神经网络算法</span>
                </div>
                <Footer/>
            </div>
        )
    }
}
