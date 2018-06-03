import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ListCard from '../listCard';
import BreadCrumbNav from '../breadCrumbNav';
import Header from '../header';
import Footer from '../footer';

import 'antd/dist/antd.css';
import '../../css/sl/LinealReg.css';

export default class LinealReg extends Component {
    constructor(props) {
        super(props);
    }
    // 跳转到下一页
    goNext(id){
        console.log(id);
        hashHistory.push('/sl/linealReg/'+id);
    }
    render() {
        const LinealReg_data = [
            {
                title:'单变量线性回归',
                id:'oneVar'
            },
            {
                title:'多变量线性回归',
                id:'multiVar'
            }
        ];
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
        ];
        return (
            <div>
                <Header showBackIcon={true} title="线性回归算法" />
                <div className='lr-content'>
                    <BreadCrumbNav bcNavData={bcNavData}/>
                    <ListCard dataSource={LinealReg_data} goNext={this.goNext}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
