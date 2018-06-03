import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Cascader,Spin,Alert,Input,Modal } from 'antd';
import $ from 'jquery';
import {region,url} from '../../../../config';
import EchartCp from '../../../echartCp';

import 'antd/dist/antd.css';
import '../../../../css/antdStyle.css';
import '../../../../css/sl/LinealReg.css';

export default class QueryHP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options:region,
            showTable:false,
            showSpin:false,
            showAlert:false
        };
    }
    selectRegion(value, selectedOptions) {
        this.setState({
            showSpin:true
        });
        // console.log(value.toString());
        // 发送请求
        $.ajax({
            url:url+'/sl/linealReg/oneVar?region='+value.toString(),
            type: 'get',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success:res=>{
                // console.log(res);
                this.setState({
                    showSpin:false
                });
                if(res.success){
                    this.setState({
                        showAlert:true,
                        message:res.message,
                        alertType:'success',
                        xdata:res.x,
                        ydata:res.y,
                        thetaData:res.theta,
                        Jdata:res.J,
                        region:selectedOptions[selectedOptions.length-1].label,
                        showTable:true
                    })
                }else{
                    this.setState({
                        showAlert:true,
                        message:res.message,
                        alertType:'error'
                    })
                }
                let that=this;
                setTimeout(function(){
                    that.setState({
                        showAlert:false
                    })
                },1000)
            }
        })
    }
    // 搜索时的过滤函数
    filter(inputValue, path) {
        // return true
        return (path.some(option => (option.label).indexOf(inputValue) > -1));
    }
    // 查询自己房价的函数
    searchHP(value){
        // console.log(value);
        let myhp=Number((this.state.thetaData[1]*parseFloat(value)+this.state.thetaData[0]).toFixed(2));
        console.log(myhp);
        if(myhp<0){
            Modal.error({
                content: (
                    <div>
                        <img style={{width:'220px',height:'240px'}}
                             src={require('../../../../resources/image/sl-ov-face00.png')}
                             alt="房价查询表情0"/>
                        <h3>房子面积太小，计算不出来价格！</h3>
                    </div>
                )
            });
        }else if(myhp<100){
            Modal.success({
                content: (
                    <div>
                        <img style={{width:'220px',height:'240px'}}
                             src={require('../../../../resources/image/sl-ov-face01.png')}
                             alt="房价查询表情1"/>
                        <p>您的房子价格是:{myhp}万元</p>
                        <h3>土豪，我们做朋友吧！</h3>
                    </div>
                )
            });
        }else if(myhp<1000){
            Modal.success({
                content: (
                    <div>
                        <img style={{width:'220px',height:'240px'}}
                             src={require('../../../../resources/image/sl-ov-face02.png')}
                             alt="房价查询表情2"/>
                        <p>您的房子价格是:{myhp}万元</p>
                        <h3>哇！我身边有个百万富翁！</h3>
                    </div>
                )
            });
        }else if(myhp<10000){
            Modal.success({
                content: (
                    <div>
                        <img style={{width:'220px',height:'240px'}}
                             src={require('../../../../resources/image/sl-ov-face03.png')}
                             alt="房价查询表情3"/>
                        <p>您的房子价格是:{myhp}万元</p>
                        <h3>一个亿的小目标已经很接近了！</h3>
                    </div>
                )
            });
        }else{
            myhp=Number(parseFloat(myhp/10000).toFixed(2));
            Modal.success({
                content: (
                    <div>
                        <img style={{width:'220px',height:'240px'}}
                             src={require('../../../../resources/image/sl-ov-face04.png')}
                             alt="房价查询表情4"/>
                        <p>您的房子价格是:{myhp}亿元</p>
                        <h3>您这么rich，说什么都是对的！</h3>
                    </div>
                )
            });
        }
    }
    render() {
        let echartStyle={
            width:'6.5rem',
            height:'6rem'
        };
        const Search = Input.Search;
        return (
            <div style={{marginTop:'10px'}}>
                {this.state.showSpin?<Spin tip="Loading..." />:""}
                {this.state.showAlert?<Alert message={this.state.message} type={this.state.alertType} showIcon />:""}
                {/*选择框*/}
                <span style={{float:'left'}}>选择需要查询的区域</span>
                <Cascader
                    style={{width:'6.5rem'}}
                    options={this.state.options}
                    onChange={(value, selectedOptions)=>{this.selectRegion(value, selectedOptions)}}
                    placeholder="可选择或输入地区"
                    showSearch={(inputValue, path)=>{this.filter(inputValue, path)}}
                />
                {this.state.showTable?
                <div className="lr-ov-query">
                    {/*图表*/}
                    <EchartCp
                        key={"hpchart_"+new Date().getTime()}
                        title={this.state.region+"房价查询图"}
                        style={echartStyle}
                        xdata={this.state.xdata}
                        ydata={this.state.ydata}
                        thetaData={this.state.thetaData}
                        Jdata={this.state.Jdata}
                    />
                    <p>数据来源:房天下-深圳二手房</p>
                    {/*总结信息*/}
                    <div style={{marginTop:'10px'}}>
                        <p>假设函数:{'y='+this.state.thetaData[1]+'*x'+(this.state.thetaData[0]>0?"+"+this.state.thetaData[0]:this.state.thetaData[0])}</p>
                        <p>代价函数最小值J_min:{this.state.Jdata}</p>
                        {this.state.Jdata<4000?<p>假设函数拟合得很好</p>:
                            this.state.Jdata<8000?<p>假设函数拟合得较好</p>:
                                this.state.Jdata<12000?<p>假设函数拟合得一般</p>:
                                    this.state.Jdata<16000?<p>假设函数拟合得较好</p>:
                                        this.state.Jdata<20000?<p>假设函数拟合得较差</p>:<p>假设函数拟合得很差</p>
                        }
                    </div>
                    {/*查房价*/}
                    <h3 style={{float:'left'}}>查我的房子价格</h3>
                    <Search
                        type="number"
                        style={{width:'5rem'}}
                        placeholder="输入房子面积(平方米)"
                        enterButton="查询"
                        size="small"
                        onSearch={value => {this.searchHP(value)}}
                    />

                </div>
                :""}

            </div>
        )
    }
}
