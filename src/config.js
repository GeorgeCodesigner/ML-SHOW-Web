export default (() => {
    (function(){
        //计算不同设备的fontSize值并插入DOM调用的方法,为了使用rem
        let fontE1=document.createElement("style"),
            winWidth,
            fontSize;
        if(window.innerWidth){
            winWidth=window.innerWidth;
        }else if(document.body && document.body.clientWidth){
            winWidth=document.body.clientWidth;
        }else if(document.documentElement && document.documentElement.clientWidth){
            winWidth=document.documentElement.clientWidth;
        }
        fontSize=winWidth/750*100;
        fontE1.innerHTML="html{font-size:"+fontSize+"px!important;}";
        document.documentElement.firstElementChild.appendChild(fontE1);
    })()
})()
//点击效果的设置
export function clickWave(dom) {
    let className=dom.className;
    dom.onclick=function(){
        dom.className=className+" waveShow";
        setTimeout(function () {
            dom.className=className;
        }, 500)
    };
};
// 后台服务路径
export const url = 'http://127.0.0.1:8000';
// 地区
export const region = [{
    value: 'shenzhen',
    label: '深圳市',
    children: [{
        value: 'longgang',
        label: '龙岗区',
        children: [{
            value: 'buji',
            label: '布吉',
        },{
            value: 'lgzxc',
            label: '龙岗中心城',
        },{
            value: 'bantian',
            label: '坂田',
        },{
            value: 'henggang',
            label: '横岗',
        },{
            value: 'pinghu',
            label: '平湖',
        },{
            value: 'pingdi',
            label: '坪地',
        }],
    },{
        value: 'longhua',
        label: '龙华区',
        children: [{
            value: 'longhua',
            label: '龙华',
        },{
            value: 'dalang',
            label: '大浪',
        },{
            value: 'minzhi',
            label: '民治',
        },{
            value: 'guanlan',
            label: '观澜',
        }],
    },{
        value: 'baoan',
        label: '宝安区',
        children: [{
            value: 'xixiang',
            label: '西乡',
        },{
            value: 'bazxq',
            label: '宝安中心区',
        },{
            value: 'xinan',
            label: '新安',
        },{
            value: 'fuyong',
            label: '福永',
        },{
            value: 'songgang',
            label: '松岗',
        },{
            value: 'shajing',
            label: '沙井',
        },{
            value: 'shiyan',
            label: '石岩',
        }],
    },{
        value: 'nanshan',
        label: '南山区',
        children: [{
            value: 'qianhai',
            label: '前海',
        },{
            value: 'shekou',
            label: '蛇口',
        },{
            value: 'nantou',
            label: '南头',
        },{
            value: 'kejiyuan',
            label: '科技园',
        },{
            value: 'nszxq',
            label: '南山中心区',
        },{
            value: 'huaqiaocheng',
            label: '华侨城',
        },{
            value: 'nanyou',
            label: '南油',
        },{
            value: 'houhai',
            label: '后海',
        },{
            value: 'xili',
            label: '西丽',
        }],
    },{
        value: 'futian',
        label: '福田区',
        children: [{
            value: 'huanggang',
            label: '皇岗',
        },{
            value: 'jingtian',
            label: '景田',
        },{
            value: 'meilin',
            label: '梅林',
        },{
            value: 'huaqiang',
            label: '华强',
        },{
            value: 'xiangmihu',
            label: '香蜜湖',
        },{
            value: 'ftzxq',
            label: '福田中心区',
        },{
            value: 'shangbu',
            label: '上步',
        },{
            value: 'xinzhou',
            label: '新洲',
        },{
            value: 'shixia',
            label: '石厦',
        },{
            value: 'lianhua',
            label: '莲花',
        },{
            value: 'nkzx',
            label: '农科中心',
        },{
            value: 'shangxiasha',
            label: '上下沙',
        },{
            value: 'bagualing',
            label: '八卦岭',
        },{
            value: 'zhuzilin',
            label: '竹子林',
        },{
            value: 'baoshuiqu',
            label: '保税区',
        },{
            value: 'chegongmiao',
            label: '车公庙',
        },{
            value: 'bijiashan',
            label: '笔架山',
        }],
    },{
        value: 'luohu',
        label: '罗湖区',
        children: [{
            value: 'buxin',
            label: '布心',
        },{
            value: 'liantang',
            label: '莲塘',
        },{
            value: 'huangbeiling',
            label: '黄贝岭',
        },{
            value: 'shuiku',
            label: '水库',
        },{
            value: 'cuizhu',
            label: '翠竹',
        },{
            value: 'caiwuwei',
            label: '蔡屋围',
        },{
            value: 'dongmen',
            label: '东门',
        },{
            value: 'renminnan',
            label: '人民南',
        },{
            value: 'sungang',
            label: '笋岗',
        },{
            value: 'honghu',
            label: '洪湖',
        },{
            value: 'nigang',
            label: '泥岗',
        },{
            value: 'baoannan',
            label: '宝安南',
        },{
            value: 'yinhu',
            label: '银湖',
        }],
    },{
        value: 'pingshan',
        label: '坪山区',
        children: [{
            value: 'pingshan',
            label: '坪山',
        },{
            value: 'kengzi',
            label: '坑梓',
        }],
    },{
        value: 'guangming',
        label: '光明新区',
        children: [{
            value: 'gongming',
            label: '公明',
        },{
            value: 'guangming',
            label: '光明',
        }],
    },{
        value: 'yantian',
        label: '盐田区',
        children: [{
            value: 'shatoujiao',
            label: '沙头角',
        },{
            value: 'meisha',
            label: '梅沙',
        },{
            value: 'yantiangang',
            label: '盐田港',
        }],
    },{
        value: 'dapeng',
        label: '大鹏新区',
        children: [{
            value: 'dapeng',
            label: '大鹏',
        },{
            value: 'nanao',
            label: '南澳',
            disabled: true,
        },{
            value: 'kuichong',
            label: '葵涌',
        }],
    }],
}];

