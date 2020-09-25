function preload() {
    img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}
function setup() {
    canvas = createCanvas(640 , 480);
    canvas.position(550 ,160);
    video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

}

function draw() {
    image(video , 0 , 0 , 640 , 480);
}

function take_snapshot(){
    save('your-image-have-fun-with-it');
}