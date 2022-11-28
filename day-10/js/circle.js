var topLeft = new Point(250, 250);
var rectSize = new Size(150, 150);

var rect = new Rectangle(topLeft, rectSize);

var path = new Path.Circle(rect, 30);

path.fillColor = 'blue'

console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }