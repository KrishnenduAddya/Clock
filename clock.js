var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 25;
ctx.lineCap = 'round';
ctx.shadowBlur= 15;
ctx.shadowColor = '#28d1fa';

function degToRad(degree){
       var factor = Math.PI/180;
       return degree*factor;
}

function renderTime(){
       var now = new Date();
       var today = now.toDateString();
       var time = now.toLocaleTimeString();
       var hours = now.getHours();
       var minutes = now.getMinutes();
       var seconds = now.getSeconds();
       var milliseconds=now.getMilliseconds();
       var newHours = hours + (minutes/60);
       var newMinutes = minutes + (seconds/60);
       var newSeconds = seconds + (milliseconds/1000);
       
       ctx.fillStyle = 'black';
       ctx.fillRect(0,0,1600,800);
       //hour
       ctx.beginPath();
	   ctx.arc(740,350,300,degToRad(270),degToRad((newHours*30)-90));
       ctx.stroke();
       //minutes
       ctx.beginPath();
	   ctx.arc(740,350,250,degToRad(270),degToRad((newMinutes*6)-90));
       ctx.stroke();
       //seconds
       ctx.beginPath();
	   ctx.arc(740,350,200,degToRad(270),degToRad((newSeconds*6)-90));
       ctx.stroke();
       //time
       ctx.font = "60px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText(time, 580, 350);
       //date
       ctx.font = "30px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText(today, 635, 295);
       //name
       ctx.font = "30px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText("Krishnendu Addya", 620, 395);
       //indices
}
setInterval(renderTime,10);