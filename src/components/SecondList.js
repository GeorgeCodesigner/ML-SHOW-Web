import React, { Component } from 'react';
import { hashHistory } from 'react-router'

import SlIndex from './sl/index';
import NslIndex from './nsl/index';
import DlIndex from './dl/index';

import Header from './header';
import Footer from './footer';
import 'antd/dist/antd.css';

export default class SecondList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dom,title;
        switch(this.props.params.secId){
            case 'sl':
                title='监督学习';
                dom=<SlIndex />;
                break;
            case 'nsl':
                title='无监督学习';
                dom=<NslIndex />;
                break;
            case 'dl':
                title='深度学习';
                dom=<DlIndex />;
                break;
            default :''
        }
        return (
            <div>
                <Header showBackIcon={true} title={title} />
                {dom}
                <Footer />
            </div>
        );
    }
}