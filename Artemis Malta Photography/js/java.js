//random megethos eikonwn
var i=5;
function kolpo(){
	for(i=0;i<=20;i++){
	var w = Math.floor((Math.random() * 100) + 150);
	var h= Math.floor((Math.random() * 100) + 150);
	document.getElementById("kimage"+i).style.width = w+"px";
	document.getElementById("kimage"+i).style.height = h+"px";
	}
}
//emfanisi banner
function banners(){
	timer=window.setInterval("starting()",75);
}
function starting(){
	document.getElementById("banners").innerHTML = '<a href="image/21.jpg"><img width="50px" height="50px "src=images/facebookb.PNG></a>';
	document.getElementById("banners").innerHTML += '<a href="image/21.jpg"><img width="50px" height="50px "src=images/instagramb.jpg></a>';
	i++;  
	document.getElementById("banners").style.width = i+"px"; 
	if (i==60){
		clearInterval(timer);
    	}
}
