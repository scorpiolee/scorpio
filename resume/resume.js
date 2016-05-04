/**
 * Created by nanianxiaL on 2016/5/2.
 */

var oUl = document.getElementById('list');
var aLi = oUl.getElementsByTagName('li');
var num = 0;
var oMov1 = document.getElementById('mov1');
var oMov2 = document.getElementById('mov2');
var oMov3 = document.getElementById('mov3');


oMov1.onmouseenter = function (  ) {
        move( oMov1, 'height' );
        move( oMov1, 'width' );
}
oMov1.onmouseleave = function (  ) {
        oMov1.style.height = 253 + 'px';
        oMov1.style.width = 202 + 'px';
}
oMov2.onmouseenter = function (  ) {
        move( oMov2, 'height' );
        move( oMov2, 'width' );
}
oMov2.onmouseleave = function (  ) {
        oMov2.style.height = 253 + 'px';
        oMov2.style.width = 202 + 'px';
}
oMov3.onmouseenter = function (  ) {
        move( oMov3, 'height' );
        move( oMov3, 'width' );
}
oMov3.onmouseleave = function (  ) {
        oMov3.style.height = 253 + 'px';
        oMov3.style.width = 202 + 'px';
}

function move ( obj, attr) {
        var pos = 0;
        pos = parseInt( getStyle( obj, attr)  );
        clearInterval( obj.timer );  //清除定时器
        obj.timer = setInterval( function (  ) {
                obj.style[attr] =parseInt( getStyle( obj, attr)  ) + 2 +'px';
                if (parseInt(obj.style[attr])>(pos+20)){
                        clearInterval( obj.timer );
                }
        },50);
}
function getStyle ( obj, attr ){
        return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

for(var i=0; i<aLi.length; i++){
        aLi[i].index = i;
        aLi[0].style.background =  'hotpink';
        aLi[i].onclick = function(){
                num = this.index;
                 fntab();
        }
}


function fntab(){
        for(var i=0; i<aLi.length;i++){
                aLi[i].style.background = '#FFFFFF';
        }
        aLi[num].style.background = 'hotpink';
}
