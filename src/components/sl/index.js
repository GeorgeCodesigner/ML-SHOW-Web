import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import ListCard from '../listCard';
import BreadCrumbNav from '../breadCrumbNav';

import 'antd/dist/antd.css';
import '../../css/sl/index.css';
import Header from '../header';
import Footer from '../footer';

export default class SlIndex extends Component {
    constructor(props) {
        super(props);
    }
    // 跳转到下一页
    goNext(id){
        console.log(id);
        hashHistory.push('/sl/'+id);
    }
    render() {
        const ML_seclist_data = [
            {
                title:'线性回归算法',
                id:'linealReg'
            },
            {
                title:'Logistic分类算法',
                id:'logisticReg'
            },
            {
                title:'神经网络算法',
                id:'neuralNet'
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
        ];
        return (
            <div>
                <Header showBackIcon={true} title="监督学习"/>
                <div className="sl-content">
                    <BreadCrumbNav bcNavData={bcNavData}/>
                    <ListCard dataSource={ML_seclist_data} goNext={this.goNext}/>
                </div>
                <Footer />
            </div>
        )
    }
}
