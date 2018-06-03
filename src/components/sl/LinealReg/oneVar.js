import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BreadCrumbNav from '../../breadCrumbNav';
import QueryHP from './oneVar/queryHP';
import Algorithm from './oneVar/algorithm';
import { Collapse,Radio } from 'antd';

import 'antd/dist/antd.css';
import '../../../css/antdStyle.css';
import '../../../css/sl/LinealReg.css';

const Panel = Collapse.Panel; //折叠面板
export default class OneVar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab:'query'
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
                location:'/sl/linealReg',
                title:'线性回归算法'
            },
            {
                location:'/sl/linealReg/oneVar',
                title:'单变量线性回归算法'
            },
        ];
        return (
            <div className='lr-ov-content'>
                <BreadCrumbNav bcNavData={bcNavData}/>
                <Collapse
                    accordion
                    bordered={false}
                    defaultActiveKey={['1']}>
                    <Panel header="房价查询" key="1">
                        <Radio.Group value={this.state.tab}
                                     onChange={(e)=>{
                                         this.setState({
                                             tab:e.target.value
                                         })
                                     }}>
                            <Radio.Button value="query">查询房价</Radio.Button>
                            <Radio.Button value="algorithm">算法简介</Radio.Button>
                        </Radio.Group>
                        {this.state.tab==="query"?
                            <QueryHP />:this.state.tab==="algorithm"?
                                <Algorithm />:""
                        }
                    </Panel>
                </Collapse>
            </div>
        )
    }
}
