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
                </Route>
                <Route path="/guide" getComponent={Guide} />
            </Router>
        )
    }
}
