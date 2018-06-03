import React, { Component } from 'react';
import $ from 'jquery';
import * as echarts from 'echarts';

import 'antd/dist/antd.css';

export default class EchartCp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:[]
        };
    }
    componentDidMount(){
        let hpChart = echarts.init(document.getElementById('hp_chart')),
        xmin=Math.min.apply(null, this.props.xdata),
        ymin=Math.min.apply(null, this.props.ydata),
        xmax=Math.max.apply(null, this.props.xdata),
        ymax=Math.max.apply(null, this.props.ydata),
        yMin=(this.props.thetaData[1] * xmin + this.props.thetaData[0])<ymin?ymin:Number((this.props.thetaData[1] * xmin + this.props.thetaData[0]).toFixed(2)),
        yMax=(this.props.thetaData[1] * xmax + this.props.thetaData[0])>ymax?ymax:Number((this.props.thetaData[1] * xmax + this.props.thetaData[0]).toFixed(2));

        for(let i=0,xlen=this.props.xdata.length;i<xlen;i++){
            let data=[];
            data.push(this.props.xdata[i]);
            data.push(this.props.ydata[i]);
            this.state.chartData.push(data);
        }
        // console.log(xmin,yMin,xmax,yMax);
        // 配置项
        let hpMarkLineOpt = {
            animation: false,
            label: {
                normal: {
                    formatter: 'y='+this.props.thetaData[1]+'*x'+(this.props.thetaData[0]>0?"+"+this.props.thetaData[0]:this.props.thetaData[0]),
                    textStyle: {
                        fontWeight: 'bold'
                    },
                    position:'middle'
                }
            },
            lineStyle: {
                normal: {
                    type: 'solid',
                    color:'#20077C'
                }
            },
            tooltip: {
                formatter: 'y='+this.props.thetaData[1]+'*x'+(this.props.thetaData[0]>0?"+"+this.props.thetaData[0]:this.props.thetaData[0])
            },
            data: [[{
                name:'假设函数',
                coord: [xmin, yMin],
                symbol: 'none'
            }, {
                coord: [xmax, yMax],
                symbol: 'none'
            }]]
        },
        hpOption ={
            title: {
                text: this.props.title,
                x: 'center',
                y: 0
            },
            grid: [
                {x: 'center', y: '12%', width: '75%', height: '75%'}
            ],
            legend:{
                right: '15%',
                bottom:'15%',
                data: [{
                    name: '房价数据'
                }]
            },
            tooltip: {
                formatter: '({c})'
            },
            xAxis: [
                {
                    name: '房子面积(平方米)',
                    nameLocation:'center',
                    nameGap:'25',
                }
            ],
            yAxis: [
                {
                    name:'房价(万元)',
                    nameGap:'5',
                    axisLabel:{
                        inside:true
                    }
                }
            ],
            series: [
                {
                    name: '房价数据',
                    type: 'scatter',
                    data: this.state.chartData,
                    markLine: hpMarkLineOpt
                }
            ]
        };
        hpChart.setOption(hpOption);
    }
    render() {
        return (
            <div id='hp_chart'
                 style={this.props.style}>
            </div>
        )
    }
}
