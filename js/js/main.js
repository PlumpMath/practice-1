var num = 10;
var arr = new Array(1,3,5);
var textArr = ["曹操","刘备","周瑜"];
console.log(textArr[0]);
console.log(textArr.length);
for(var i=0;i<textArr.length;i++){
    console.log(textArr[i]);
}

//单行变色
var aLi = document.getElementsByTagName("li");
var len = aLi.length;
for(var i = 0;i<len;i++){
    if(i%2==0){
        aLi[i].className = "change";
    }
    aLi[i].onmouseover = function(){
        this.className = "change";
    }
    aLi[i].onmouseout = function(){
        this.className = "";
    }
}

//获取索引号
var aBtn = document.getElementsByTagName("button");
var aBox = document.getElementById("tab").getElementsByTagName("div");
var len = aBtn.length;
for(var i = 0;i<len;i++){
    aBtn[i].index = i;
    aBtn[i].onclick = function(){
        for(var i = 0;i<len;i++){
            aBtn[i].className="";
            aBox[i].className="";
        }
        this.className ="active";
        aBox[this.index].className = "show";
    }
}
