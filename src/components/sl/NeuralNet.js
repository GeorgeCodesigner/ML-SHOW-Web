import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BreadCrumbNav from '../breadCrumbNav';
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
        const bcNavData=[
            {
                location:'/',
                title:'欢迎页'
            },
            {
                location:'/sl',
                title:'监督学习'
            },
            {
                location:'/sl/neuralNet',
                title:'神经网络算法'
            },
        ];
        return (
            <div>
                <Header showBackIcon={true} title="神经网络算法" />
                <div className='nn-content'>
                    <BreadCrumbNav bcNavData={bcNavData}/>
                    <span>神经网络算法</span>
                </div>
                <Footer/>
            </div>
        )
    }
}
