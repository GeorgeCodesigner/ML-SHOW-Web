import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Header from '../../header';
import Footer from '../../footer';
import OneVar from './oneVar';
import MultiVar from './multiVar';

import 'antd/dist/antd.css';
import '../../../css/sl/LinealReg.css';

export default class LrTypeIndex extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dom;
        switch(this.props.params.type){
            case 'oneVar':
                dom = <div>
                        <Header showBackIcon={true} title="单变量线性回归算法" />
                        <OneVar insideId={this.props.params.insideId}/>
                        <Footer/>
                    </div>;
                break;
            case 'multiVar':
                dom = <div>
                        <Header showBackIcon={true} title="多变量线性回归算法" />
                        <MultiVar insideId={this.props.params.insideId}/>
                        <Footer/>
                    </div>;
                break;
        }
        return dom
    }
}
