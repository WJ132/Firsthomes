function getGoodsDetail(goodsId){
    $.get("./php/getGoodsInfo.php",{
        goodsId
    },function(data){
        let htmlStr=`
                <a href= ""><img src="${data.goodsImg}" alt=""> </a>
        `;
        let htmlNum=` 
                    <h3>商品信息：${data.goodsName}</h3>
                    <p>价格：￥${data.goodsPrice}</p>
                    <p>库存：${data.goodsCount}</p>`;
        let htmlName=`<span>${data.goodsName}</span>`;
        $("#goodbigimg").html(htmlStr);
        $("#goodtext").html(htmlNum);
        $("#spanname").html(htmlName);
    },"json");
}

function addShoppingCar(goodsId){
    // 从cookie中获取当前登录的用户名
    // let username = getCookie();
    let username = "张三疯";
    $.post("./php/addShoppingCart.php",{
        vipName:username,
        goodsId,
        goodsCount:$("#count").val()
    },
    showMsg
    );
}

function showMsg(data){
    if(data=="1"){
        $("#message-box").html("添加成功");
    }else{
        $("#message-box").html("添加失败");
    }
    $("#message-box").css({
        display:"block"
    }).fadeOut(3000);

}


$(function(){
    let [,goodsId] = location.search.split("=") ;//?goodsId=01001
    getGoodsDetail(goodsId);
    $("#btnadd").click(function(){
        addShoppingCar(goodsId);
    });
    $("#btnbuy").click(function(){
        location.href="goodchar.html";
    });
})