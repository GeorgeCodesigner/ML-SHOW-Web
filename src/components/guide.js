import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import { Card,Button } from 'antd';

import Header from './header';
import Footer from './footer';
import '../css/guide.css';
import 'antd/dist/antd.css';

export default class Guide extends Component {
    constructor(props) {
        super(props);
    }
    submit() {
        sessionStorage.setItem("token",new Date().getTime());
        hashHistory.push('/');
    }
    render() {
        return (
            <div>
                <Header showBackIcon={false} title="关于ML SHOW" />
                <Card.Grid className="guide-content">
                    <img className="gc-logo" src={require('../resources/image/logo-word.png')} alt="带字图标"/>
                    <div className="gc-body">
                        <h1 style={{textAlign:'center'}}>写在前面的话</h1>
                        <p style={{textIndent:'28px'}}>人工智能(Artificial Intelligence)无疑是当今全球最热门的技术之一,国内外无数互联网巨头企业都设立了AI研究院。
                        国外以Google、Apple、Amazon、Facebook等公司为主导,国内以阿里巴巴、腾讯、百度等公司为主导。
                        而在我们耳边时长萦绕着这些词汇:<b>人工智能,机器学习(Machine Learning),深度学习(Deep Learning)</b>。
                        下面介绍这三者的含义及其背后的关系。</p>
                        <p style={{textIndent:'28px'}}>人工智能最初以概念的形式提出来,其研究领域很广泛,包括<b>专家系统、计算机视觉、自然语言处理、推荐系统等</b>,
                        而<b>实现人工智能的方法就是机器学习</b>。机器学习主要是通过算法来解析数据并从中学习,然后对真实世界中的事件做出决策和预测。
                        机器学习算法主要分为<b>监督学习、无监督学习、深度学习</b>。所以,深度学习就是实现机器学习的一种重要的技术。 深度学习不是一种独立的学习方法,它用到监督和无监督学习的方法来训练深度神经网络。
                        因为深度学习模型需要大量训练数据样本才能展现出神奇的效果,所以在当今这个大数据爆发的时代,<b>深度学习是最热门的机器学习方法</b>。
                        <b>无人驾驶汽车、预防性医疗保健、电影推荐</b>无不是深度学习发光发热的诠释。<b>机器学习是一种实现人工智能的方法,深度学习是一种实现机器学习的技术</b>。下面这幅图展示了三者的关系。</p>
                        <img className="gc-img-1" src={require('../resources/image/AIMLDL.jpg')} alt="AI/ML/DL关系图"/>
                        <p style={{textIndent:'28px'}}>ML SHOW是所有零基础但对机器学习有着强烈求知欲的小白学习机器学习的材料。
                        ML是机器学习的缩写,这里主要<b>以算法为单元,介绍每一个算法的数学公式,用该算法做机器学习的步骤与注意事项,最后实现的demo</b>。
                        ML SHOW分为监督学习、无监督学习、深度学习三大类,每一大类又分为很多小类的算法。这里面用到的数据都是作者辛辛苦苦从网上爬下来的,
                        用到的算法绝大部分都是来自于吴恩达教授的《机器学习》和《深度学习》课程,在此为吴恩达教授如此不辞辛劳地为我们讲授机器学习和深度学习点个大大的赞。
                        最后,作者希望以这个作品向为了深度学习做出巨大贡献的"深度学习三巨头"Geoffrey Hinton、Yann LeCun、Yoshua Bengio致敬。
                        </p>
                        <h3 style={{textAlign:'center'}}>给机器灌注灵魂</h3>
                    </div>
                    <Button
                        className="gc-submit"
                        onClick={()=>{this.submit()}}
                    >我知道了,进入ML SHOW</Button>
                </Card.Grid>
                <Footer />
            </div>
        );
    }
}