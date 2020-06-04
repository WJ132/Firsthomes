window.onload = function(){
    $("#goodbigimg").onmousemove = function(event){
        // 一、数据处理
        //1、数据计算(镜子的位置)
        let e = event || window.event;
        // 数据距离事件源的横向位置-镜子宽度的一半
        let left1 = (e.pageX-this.offsetLeft)-$("#littlebox").offsetWidth/2;
        let top1 = (e.pageY-this.offsetTop)-$("#littlebox").offsetHeight/2;

        //2、边界处理
        if(left1<0){
            left1=0;
        }else if(left1>this.offsetWidth-$("#littlebox").offsetWidth){
            left1=this.offsetWidth-$("#littlebox").offsetWidth
        }
        
        if(top1<0){
            top1=0;
        }else if(top1>this.offsetHeight-$("#littlebox").offsetHeight){
            top1=this.offsetHeight-$("#littlebox").offsetHeight;
        }

        // 二、外观呈现
        $("#littlebox").style.left = left1+"px";
        $("#littlebox").style.top = top1+"px" ;
        $("#showimg").style.backgroundPosition = `${-left1}px ${-top1}px`;
    }
}    


function $(str) {
    if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1))
    } else {
        return document.getElementsByTagName(str);
    }
}
