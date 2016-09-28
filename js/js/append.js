/**
 * Created by Administrator on 2016/9/24.
 */
window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    var par = $("demo");
    var childrens = par.children;
    var chi = document.createElement("nav");
    var test = document.createElement("div");
    par.appendChild(chi);
    par.insertBefore(test,childrens[0]);
}