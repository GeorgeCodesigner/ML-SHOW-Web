import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ListCard from '../listCard';
import BreadCrumbNav from '../breadCrumbNav';

import 'antd/dist/antd.css';
import '../../css/dl/index.css';
import Header from '../header';
import Footer from '../footer';

export default class DlIndex extends Component {
    constructor(props) {
        super(props);
    }
    // 跳转到下一页
    goNext(id){
        console.log(id);
        hashHistory.push('/sl/'+id);
    }
    render() {
        const bcNavData=[
            {
                location:'/',
                title:'欢迎页'
            },
            {
                location:'/dl',
                title:'深度学习'
            },
        ];
        return (
            <div>
                <Header showBackIcon={true} title="深度学习" />
                <div className="dl-content">
                    <BreadCrumbNav bcNavData={bcNavData}/>
                    <span className='dl-text'>敬请期待</span>
                </div>
                <Footer />
            </div>
        )
    }
}
