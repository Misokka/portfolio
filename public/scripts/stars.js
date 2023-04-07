    
    
    
    
    var can = document.getElementById("canvasHead");
    resizeCanvasToDisplaySize();    		 			  
    var balls = new Array();			       		 			  
    var pause = false;
    for(var i = 0;  i < 10; i++){
        balls.push(createNewRandomBall(can));	
    }	
    draw(can);
    window.onresize = resizeCanvasToDisplaySize;	       		 			         		 			  			       		 			  
	       		 			  
    	       		 			  
    		       		 			  
			       		 			  
			       		 			  
	function resizeCanvasToDisplaySize() {
        canvas = document.getElementById("canvasHead");
        console.log("redimension");
        // look up the size the canvas is being displayed
        if(canvas){
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            // If it's resolution does not match change it
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                return true;
            }
        }
     
        return false;
     }      		 			  
			       		 			  
    function Ball(x,y,radius,color, dx, dy){			       		 			  
        this.x = x;			       		 			  
        this.y = y;			       		 			  
        this.radius = radius;			       		 			  
        this.color = color;			       		 			  
        this.dx = dx;			       		 			  
        this.dy = dy;			       		 			  
			       		 			  
        this.move = function(canvas){			       		 			  
            this.x += this.dx;			       		 			  
            this.y += this.dy;			       		 			  
            if(this.x < 0 || this.x > canvas.width){			       		 			  
                this.dx = -this.dx;			       		 			  
            }			       		 			  
            if(this.y < 0 || this.y > canvas.height){			       		 			  
                this.dy = -this.dy;			       		 			  
            }			       		 			  
        }			       		 			  
			       		 			  
    }			       		 			  
			       		 			  
    document.getElementById("canvasHead").onkeyup = function(e){			       		 			  
        if(e.keyCode==32){			       		 			  
            console.log('ok');			       		 			  
            balls.push(createNewRandomBall());			       		 			  
        }			       		 			  
			       		 			  
        if(e.keyCode==80){			       		 			  
            if(!pause){			       		 			  
                console.log('p');			       		 			  
                clearInterval(refreshIntervalId);			       		 			  
                pause = true;			       		 			  
            }			       		 			  
            else{			       		 			  
                refreshIntervalId =			       		 			  
                setInterval(			       		 			  
                    function(){			       		 			  
                        draw(can);			       		 			  
                    }, 30);			       		 			  
                pause = false;			       		 			  
            }			       		 			  
			       		 			  
        }			       		 			  
			       		 			  
        };			       		 			  
			       		 			  
    function createNewRandomBall(canvas){			       		 			  
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);			       		 			  
        var randomX = getRandomInt(canvas.width);			       		 			  
        var randomY = getRandomInt(canvas.height);			       		 			  
        var randomRadius = getRandomInt(40);			       		 			  
			       		 			  
        var negOrPosX = 1;			       		 			  
        var negOrPosY = 1;			       		 			  
        var speedX = getRandomInt(15);			       		 			  
        var speedY = getRandomInt(15);			       		 			  
			       		 			  
        var deter = getRandomInt(400);			       		 			  
        if(deter > 250){			       		 			  
            negOrPosY *= -1;			       		 			  
        }			       		 			  
        if(deter < 200){			       		 			  
            negOrPosX *= -1;			       		 			  
        }			       		 			  
			       		 			  
        speedY *= negOrPosY;			       		 			  
        speedX *= negOrPosX;			       		 			  
			       		 			  
        return new Ball(randomX,randomY,randomRadius,randomColor,speedX,speedY);			       		 			  
    }			       		 			  
			       		 			  
    function draw(canvas){		
        var size = 6	       		 			  
        var ctx = canvas.getContext('2d');			       		 			  
        ctx.clearRect(0,0, canvas.width, canvas.height);			       		 			  
        balls.forEach(function(ball){			       		 			  
            //ctx.beginPath();	       		 			  
            //ctx.fillStyle = ball.color;			       		 			  
            ///ctx.arc(ball.x, ball.y, ball.radius, 0, 2*Math.PI);			       		 			  
            //ctx.stroke();			       		 			  
            //ctx.fill();	
            
            ctx.fillStyle = "black";
         ctx.beginPath();
         ctx.moveTo(108/size+ball.x, 0.0+ball.y);
         ctx.lineTo(141/size+ball.x, 70/size+ball.y);
         ctx.lineTo(218/size+ball.x, 78.3/size+ball.y);
         ctx.lineTo(162/size+ball.x, 131/size+ball.y);
         ctx.lineTo(175/size+ball.x, 205/size+ball.y);
         ctx.lineTo(108/size+ball.x, 170/size+ball.y);
         ctx.lineTo(41.2/size+ball.x, 205/size+ball.y);
         ctx.lineTo(55/size+ball.x, 131/size+ball.y);
         ctx.lineTo(1/size+ball.x, 78/size+ball.y);
         ctx.lineTo(75/size+ball.x, 68/size+ball.y);
         ctx.lineTo(108/size+ball.x, 0+ball.y);
         ctx.closePath();
         ctx.stroke();
         ctx.fill();

            ball.move(canvas);			       		 			  
        });			       		 			  
			       		 			  
    }			       		 			  
			       		 			  
    var refreshIntervalId = setInterval(			       		 			  
        function(){			       		 			  
            draw(can);			       		 			  
        }, 30);			       		 			  
			       		 			  
    function getRandomInt(max) {			       		 			  
        return Math.floor(Math.random() * Math.floor(max));			       		 			  
    }			       		 			  
			       		 					       		 			  		       		 			  