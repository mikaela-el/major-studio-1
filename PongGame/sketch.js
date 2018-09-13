var x = [];
var y = [];
var speedX = [];
var speedY = [];
var score = 0;
var quantity = 10;

function setup() {
    createCanvas(400, 400);
    for (var i=0; i<quantity; i++ ) {
        x[i] = random(400);
        y[i] = random(400);
        speedX[i] = -1.6;
        speedY[i] = 2;
    }
    rectMode(CENTER);
    textAlign(CENTER);
    noCursor();
    noStroke();
}

function draw() {
    background('#fae');
    // noStroke();
    fill('purple');
    // noFill();
    for (var i=0; i<quantity; i++ ) {
        ellipse(x[i], y[i], 10, 10);
        x[i] = x[i] + speedX[i]; // x += speedX;
        y[i] = y[i] + speedY[i]; // y += speedY;
        // // right wall
        // if (x >= 400) {
        //     speedX *= -1; // speedX = speedX * -1
        // }
        // // left wall
        // if (x <= 0) {
        //     speedX *= -1; // speedX = speedX * -1
        // }
        
        // right wall and left wall
        if (x[i] >= 400 || x[i] <= 0) {
            speedX[i] *= -1; // speedX = speedX * -1
        }
        
        // top wall
        if (y[i] <= 0) {
            speedY[i] *= -1; // speedY = speedY * -1
        }
        
        // paddle bounce
        if (x[i] <= mouseX + 35 && x[i] >= mouseX - 35 && y[i] >= 365 && y[i] <= 375) {
            speedY[i] *= -1;
            score++; // score += 1; score = score + 1;
            speedX[i]*=1.1;
            speedY[i]*=1.1;
        }
    }
    // paddle
    rect(mouseX, 370, 70, 10, 0, 0, 5, 5);
    fill('lightpink');
    text(score, mouseX, 370+5);
    
}

function mouseReleased() {
    setup();
    score = 0;
}