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
       
       var amPMText = "AM";
       if(hours > 11)
          amPMText = "PM"
       if(hours > 12)
          hours = hours - 12;
       if(hours < 10)
          hours = "0".concat(hours);
       if(minutes < 10)
          minutes = "0".concat(minutes);
       if(seconds < 10)
          seconds = "0".concat(seconds);
       
       let timeText = hours + ':' + minutes + ':' + seconds + ' ' + amPMText;

       ctx.fillStyle = 'black';
       ctx.fillRect(0,0,1600,3200);
       //hour
       ctx.beginPath();
	   ctx.arc(740,1500,300,degToRad(270),degToRad((newHours*30)-90));
       ctx.stroke();
       //minutes
       ctx.beginPath();
	   ctx.arc(740,1500,250,degToRad(270),degToRad((newMinutes*6)-90));
       ctx.stroke();
       //seconds
       ctx.beginPath();
	   ctx.arc(740,1500,200,degToRad(270),degToRad((newSeconds*6)-90));
       ctx.stroke();
       //time
       ctx.font = "60px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText(timeText, 560, 1500);
       //date
       ctx.font = "30px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText(today, 635, 1445);
       //name
       ctx.font = "30px Georgia";
       ctx.fillStyle = '#28d1fa';
       ctx.fillText("Krishnendu Addya", 620, 1545);
       //indices
}
setInterval(renderTime,10);