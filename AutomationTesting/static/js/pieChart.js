/**
 * canvas code for pie chart
 */
+function(root){
	root.drawSegment = function(canvas, context, i, data, labels, colors) {
	    context.save();
	    var centerX = Math.floor(canvas.width / 2);
	    var centerY = Math.floor(canvas.height / 2);
	    radius = Math.floor(canvas.width / 2);

	    var startingAngle = degreesToRadians(sumTo(data, i));
	    var arcSize = degreesToRadians(data[i]);
	    var endingAngle = startingAngle + arcSize;

	    context.beginPath();
	    context.moveTo(centerX, centerY);
	    context.arc(centerX, centerY, radius, 
	                startingAngle, endingAngle, false);
	    context.closePath();

	    context.fillStyle = colors[i];
	    context.fill();

	    context.restore();

	    drawSegmentLabel(canvas, context, i, data, labels, colors);
	}
	
	root.degreesToRadians = function(degrees) {
	    return (degrees * Math.PI)/180;
	}
	function sumTo(a, i) {
	    var sum = 0;
	    for (var j = 0; j < i; j++) {
	      sum += a[j];
	    }
	    return sum;
	}
	
	root.drawSegmentLabel = function(canvas, context, i, data, labels, colors) {
	   context.save();
	   var x = Math.floor(canvas.width / 2);
	   var y = Math.floor(canvas.height / 2);
	   var angle = degreesToRadians(sumTo(data, i));

	   context.translate(x, y);
	   context.rotate(angle);
	   var dx = Math.floor(canvas.width * 0.35) ;
	   var dy = Math.floor(canvas.height * 0.3);

	   context.textAlign = "right";
	   var fontSize = Math.floor(canvas.height / 8);
	   context.font = fontSize + "pt Helvetica";

	   context.fillText(labels[i], dx, dy);

	   context.restore();
	}
}(window);