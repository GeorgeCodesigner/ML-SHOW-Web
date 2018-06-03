import React, { Component } from 'react';
import { hashHistory,Link } from 'react-router'
import { Breadcrumb } from 'antd';

import 'antd/dist/antd.css';
import '../css/antdStyle.css';

export default class BreadCrumbNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.bcNavData && this.props.bcNavData.length>0?
                <Breadcrumb separator=">" style={{marginBottom: '10px',fontSize:'0.24rem'}}>
                    {this.props.bcNavData.map((item,index)=>{
                        return(
                            <Breadcrumb.Item key={index}>
                                <Link to={item.location}>
                                    {item.title}
                                </Link>
                            </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            :""
        )
    }
}
