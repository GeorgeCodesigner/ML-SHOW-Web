import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import ListCard from '../listCrad';

import 'antd/dist/antd.css';
import '../../css/sl/index.css';

export default class SlIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
        return (
            <div>
                <div className="sl-content">
                    <ListCard dataSource={ML_seclist_data} goNext={this.goNext}/>
                </div>
            </div>
        )
    }
}
