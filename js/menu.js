// JavaScript Document
//右侧弹出菜单


$(document).ready(function(){
	$(".menuOne").hover(function(){
			$(this).addClass("hover");
			$(this).children("ul li").attr('class','');
		},function(){
			$(this).removeClass("hover");  
			$(this).children("ul li").attr('class','');
		}
	); 
	$(".menu li.no_sub").hover(function(){
			$(this).addClass("hover1");
		},function(){
			$(this).removeClass("hover1");  
		}
	); 
})





//隐藏头部banner
function spZs(){
	var banner_top = document.getElementById("spZs");
	banner_top.style.display = "none";
}

function removeAllChild()
{
    var div = document.getElementById("sczh");
    while(div.hasChildNodes()) //当div下还存在子节点时 循环继续
    {
        div.removeChild(div.firstChild);
    }
}

//tab切换
function set(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById(name+"_"+i);
	  menu.className=i==cursel?"hover":"";
	} 
  }
  
function setRt(name,cursel,n){
	  for(i=1;i<=n;i++){
	  var menu=document.getElementById(name+i);
	  var con=document.getElementById(name+"_"+i);
	  menu.className=i==cursel?"hover":"";
	  con.style.display=i==cursel?"block":"none";
	} 
  }
  
  
//列表显示隐藏
var s=5; 
var minheight=50; 
var maxheight=200; 
function shoppingcat(){ 
  var content=document.getElementById("zsbb"); 
  var key = document.getElementById("key"); 
  var t=content.style; 
  if(t.height==""||t.height==0) 
    t.height=minheight; 
  var h=parseInt(t.height); 
  if(key.innerHTML=="查看更多"){ 
    h+=s; 
    t.height=h+"px"; 
    if(h<maxheight){ 
      setTimeout("shoppingcat();",1); 
    }else{ 
      key.innerHTML="隐藏"; 
    } 
  }else{ 
    h-=s; 
    t.height=h+"px"; 
    if(h>minheight){ 
      setTimeout("shoppingcat();",1); 
    }else{ 
      key.innerHTML="查看更多"; 
    } 
  } 
} 




  
//百度分享

window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];










