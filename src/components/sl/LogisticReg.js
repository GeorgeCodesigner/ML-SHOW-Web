import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BreadCrumbNav from '../breadCrumbNav';
import Header from '../header';
import Footer from '../footer';

import 'antd/dist/antd.css';
import '../../css/sl/LogisticReg.css';

export default class LogisticReg extends Component {
    constructor(props) {
        super(props);
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
                location:'/sl/logisticReg',
                title:'Logistic分类算法'
            },
        ];
        return (
            <div>
                <Header showBackIcon={true} title="Logistic分类算法" />
                <div className='logr-content'>
                    <BreadCrumbNav bcNavData={bcNavData}/>
                    <span>Logistic分类算法</span>
                </div>
                <Footer/>
            </div>
        )
    }
}
