import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import $ from 'jquery';
import { Card,List,Icon } from 'antd';
import {clickWave} from '../config';

import 'antd/dist/antd.css';
import '../css/listCard.css';

export default class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount(){
        //设置clickItem的点击效果
        for(let i=0,len=$('.clickItem').length;i<len;i++){
            clickWave($('.clickItem')[i]);
        }
    }
    render() {
        return (
            <Card.Grid className="list-card">
                <List
                    dataSource={this.props.dataSource}
                    renderItem={item => (
                        <List.Item
                            className="list-card-item clickItem"
                            onClick={()=>{this.props.goNext(item.id)}}>
                            <span className="list-card-item-title">{item.title}</span>
                            <Icon type="right" className="list-card-item-gonext"/>
                        </List.Item>
                    )}
                />
            </Card.Grid>
        )
    }
}
