import React, {Component} from 'react';
import { Router,Route,hashHistory,Redirect,IndexRoute } from 'react-router';
import App from './components/App';
import Welcome from './components/welcome';

//引导页
const Guide = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/guide.js').default)
    },'Guide')
};
// 第二大类的list
const SecondList = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/SecondList.js').default)
    },'SecondList')
};
// 线性回归算法
const LinealReg = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/LinealReg.js').default)
    },'LinealReg')
};
// Logistic分类算法
const LogisticReg = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/LogisticReg.js').default)
    },'LogisticReg')
};
// 神经网络算法
const NeuralNet = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/NeuralNet.js').default)
    },'NeuralNet')
};
/* 是否阅读了引导从而进入主页的判断 */
function isReadGuide(nextState, replaceState) {
    const token = sessionStorage.getItem('token');
    if (!token) {
        replaceState('/guide');
    }
}
export default class Routes extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App} onEnter={isReadGuide}>
                    <IndexRoute component={Welcome} />
                    <Route path="/:secId" getComponent={SecondList}></Route>
                    {/*线性回归算法*/}
                    <Route path="/sl/linealReg" getComponent={LinealReg}></Route>
                    {/*Logistic分类算法*/}
                    <Route path="/sl/logisticReg" getComponent={LogisticReg}></Route>
                    {/*神经网络算法*/}
                    <Route path="/sl/neuralNet" getComponent={NeuralNet}></Route>
                </Route>
                <Route path="/guide" getComponent={Guide} />
            </Router>
        )
    }
}
