/**
 * Created by Administrator on 2016/9/23.
 */
window.onload = function(){
/*    var classname = document.getElementsByClassName("demo");
    var len = classname.length;
    for(var i=0;i<len;i++){
        classname[i].style.backgroundColor = "skyblue";
    }*/
    function getClass(classname){
        var dom = document.getElementsByTagName("*");
        var len = dom.length;
        /*alert(len);*/
        var arr = [];
        for(var i=0;i<len;i++){
            var aClass = dom[i].className.split(" ");
            var aLen = aClass.length;
            for(var j=0;j<aLen;j++){
                if(aClass[j] == classname){
                    arr.push(dom[i]);
                }
            }
        }
        return arr;
    }
    console.log(getClass("demo").length);
    var demo = getClass("demo");
    var dLen = demo.length;
    for(var i=0;i<dLen;i++){
        demo[i].style.backgroundColor = "skyblue";
    }
}