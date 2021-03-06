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
// 监督学习
const SupLearn = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/index.js').default)
    },'SupLearn')
};
// 线性回归算法
const LinealReg = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/LinealReg.js').default)
    },'LinealReg')
};
// 线性回归算法下的各个算法
const lrTypeIndex = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/sl/LinealReg/lrTypeIndex').default)
    },'lrTypeIndex')
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
// 无监督学习
const NotSupLearn = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/nsl/index.js').default)
    },'NotSupLearn')
};
// 深度学习
const DeepLearn = (location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./components/dl/index.js').default)
    },'DeepLearn')
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
                    {/*监督学习*/}
                    <Route path="/sl" getComponent={SupLearn}></Route>
                    {/*线性回归算法*/}
                    <Route path="/sl/linealReg" getComponent={LinealReg}></Route>
                    {/*线性回归算法下的各个算法*/}
                    <Route path="/sl/linealReg/:type" getComponent={lrTypeIndex}></Route>
                    {/*Logistic分类算法*/}
                    <Route path="/sl/logisticReg" getComponent={LogisticReg}></Route>
                    {/*神经网络算法*/}
                    <Route path="/sl/neuralNet" getComponent={NeuralNet}></Route>

                    {/*无监督学习*/}
                    <Route path="/nsl" getComponent={NotSupLearn}></Route>
                    {/*深度学习*/}
                    <Route path="/dl" getComponent={DeepLearn}></Route>
                </Route>
                <Route path="/guide" getComponent={Guide} />
            </Router>
        )
    }
}
