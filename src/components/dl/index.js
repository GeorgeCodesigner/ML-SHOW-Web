import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import $ from 'jquery';
import { Card,List,Icon } from 'antd';
import {clickWave} from '../../config';

import 'antd/dist/antd.css';
import '../../css/dl/index.css';

export default class DlIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <div className="dl-content">
                    <span className='dl-text'>敬请期待</span>
                </div>
            </div>
        )
    }
}
