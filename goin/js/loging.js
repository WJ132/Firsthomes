window.onload = function(){
    let $ = document.getElementById;
    // 1、产生验证码
    showCode();
    
    // 2、点击span，重新产生验证码
    $("#codeSpan").onclick = function(){
        showCode();
        $("#codeSpan").innerHTML = code;
        // 把验证码发到后端
        sendCode(code);
    }
    // 3、登录
    $("#LoG").onclick = function(){
        if($("#code").value!=$("#codeSpan").innerHTML){
            alert("验证码不正确");
            showCode();
            return;
        }
        login();
    }
}    

function showCode(){
    $("#codeSpan").innerHTML = getCode(4);
}

function getCode(n){
    let str="";
    for(let i=0;i<n;i++){
         str = str +  parseInt(Math.random()*10);
    }
    return str;
}

function sendCode(code){
    ajax({
        url:"code.php",
        params:"code="+$("#codeSpan").innerHTML
    });
}

function login(){
    ajax({
        method:"post",
        url:"loginCheck.php",
        params:`username=${$("#userId").value}&userpass=${$("#Password").value}`,
        cb:function(result){
            if(result=="1"){
                // 1、存储cookie
                addCookie("username",$("#userId").value,7);
                // 2、显示提示信息
                let count = 5;
                $("#message-box").innerHTML=`亲，恭喜您，登录成功，${count}秒钟后，跳转到<a href="home.html">首页</a>`;               
                let myTimer = setInterval(()=>{
                    count--;
                    if(count==0){
                        window.clearInterval(myTimer);
                        window.location.href="home.html";
                        return;                        
                    }
                    $("#message-box").innerHTML=`亲，恭喜您，登录成功，${count}秒钟后，跳转到<a href="home.html">首页</a>`;
                },1000);
            }else{
                $("#message-box").innerHTML=`亲，不好意思，登录失败，用户名或者密码错误！`;
                showCode();
            }
        }
    });
}