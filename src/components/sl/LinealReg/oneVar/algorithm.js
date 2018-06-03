import React, { Component } from 'react';

import 'antd/dist/antd.css';
import '../../../../css/sl/LinealReg.css';

export default class Algorithm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="lr-ov-algo">
                <p>单变量线性回归的假设函数模型是：</p>
                <img src={require('../../../../resources/image/lr-ov-al/equ1.gif')} alt="公式1"/>
                <p>将输入变量x代入假设函数求出的预测变量值h(x)与实际样本输出值y之间的误差最小，也就是代价函数J最小，代价函数是：</p>
                <img style={{width:'100%'}} src={require('../../../../resources/image/lr-ov-al/equ2.png')} alt="公式2"/>
                <p>其中，m:训练样本数量。</p>
                <p>现在目的已经很明确了，需要求出假设函数中的θ_0和θ_1使得代价函数J最小化。有两种方法解决：1.梯度下降算法(又称"Betch梯度下降"),2.正规方程法。</p>
                <p>1.梯度下降算法(又称"Betch梯度下降"):每次执行梯度下降都遍历了所有的训练样本，步骤如下：</p>
                <p>重复迭代下列过程直到收敛：</p>
                <img style={{width:'100%'}} src={require('../../../../resources/image/lr-ov-al/equ3.png')} alt="公式3"/>
                <p>其中，:=是赋值符号，α是学习率。</p>
                <p>正确的赋值方式：同步更新，如下所示：</p>
                <img src={require('../../../../resources/image/lr-ov-al/equ4.png')} alt="公式4"/>
                <img src={require('../../../../resources/image/lr-ov-al/equ5.png')} alt="公式5"/>
                <p>theta_0:=temp0</p>
                <p>theta_1:=temp1</p>
                <p>化简上面的梯度下降算法变成：</p>
                <img style={{width:'100%'}} src={require('../../../../resources/image/lr-ov-al/equ6.png')} alt="公式6"/>
                <img style={{width:'100%'}} src={require('../../../../resources/image/lr-ov-al/equ7.png')} alt="公式7"/>
                <p>该算法的关键在于选取合适的学习率α，而对于不同的训练样本集，α的取值都不一样，需要人为地尝试选取，这就花费很大的气力。所以对于这个项目我选择第二种方法求解代价函数J的最小值。</p>
                <p>2.正规方程法：不需要迭代运算求解θ从而求出J的最小值，该方法可以一次性求解出θ所表示的J的最小值。经过一系列化简得出下面的公式：</p>
                <img src={require('../../../../resources/image/lr-ov-al/equ8.png')} alt="公式8"/>
                <p>这样就可以求出θ值从而求出代价函数J的最小值。上述两种方法比较如下：</p>
                <table border="1">
                    <tr>
                        <th>梯度下降算法</th>
                        <th>正规方程法</th>
                    </tr>
                    <tr style={{textAlign:'left'}}>
                        <td>1. 需要选择学习率alpha<br/>
                            2. 需要很多次迭代<br/>
                            3. 在特征值n很多的情况下也能运行得很好
                        </td>
                        <td>1. 不需要选择学习率alpha<br/>
                            2. 不需要迭代<br/>
                            3. 需要计算(X^T*X)^-1这一项，会得到(n+1)*(n+1)阶矩阵，实现求逆运算的代价是O(n^3)，所以如果n很大的话，求逆会很慢
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
