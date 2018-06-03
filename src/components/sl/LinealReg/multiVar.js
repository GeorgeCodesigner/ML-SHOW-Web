import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BreadCrumbNav from '../../breadCrumbNav';

import 'antd/dist/antd.css';
import '../../../css/sl/LinealReg.css';

export default class MultiVar extends Component {
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
                location:'/sl/linealReg',
                title:'线性回归算法'
            },
            {
                location:'/sl/linealReg/multiVar',
                title:'多变量线性回归算法'
            },
        ];
        return (
            <div className='lr-mv-content'>
                <BreadCrumbNav bcNavData={bcNavData}/>
                多变量线性回归算法
            </div>
        )
    }
}
