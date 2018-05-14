import React, { Component } from 'react';
import { hashHistory } from 'react-router'

import Header from './header';
import ListCard from './listCrad';
import Footer from './footer';
import 'antd/dist/antd.css';
import '../css/welcome.css';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    // 跳转到下一页
    goNext(id){
        console.log(id);
        hashHistory.push('/'+id);
    }
    render() {
        const ML_firstlist_data = [
            {
                title:'监督学习',
                id:'sl'
            },
            {
                title:'无监督学习',
                id:'nsl'
            },
            {
                title:'深度学习',
                id:'dl'
            }
        ];
        return (
            <div>
                <Header showBackIcon={false} title="ML SHOW欢迎你" />
                <div className="welcome-content">
                    <ListCard dataSource={ML_firstlist_data} goNext={this.goNext}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
