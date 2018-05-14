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

