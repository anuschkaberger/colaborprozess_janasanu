let mradius = 500;
let mspeed = 0.5;
let x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, x19, x20, y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16, y17, y18, y19, y20;
let m = [];


function setup() {
    createCanvas(windowWidth, windowHeight,);
    background(0);

    x1 = random((1/4)*width, (3/4)*width);
    x2 = random((1/4)*width, (3/4)*width);
    x3 = random((1/4)*width, (3/4)*width);
    x4 = random((1/4)*width, (3/4)*width);
    x5 = x3 + 2 * (x4 - x3);
    x6 = random((1/4)*width, (3/4)*width);
    x7 = random((1/4)*width, (3/4)*width);
    x8 = x6 + 2 * (x7 - x6);
    x9 = x2 + 2 * (x1 - x2);
    x10 = x1;

    y1 = random((1/4)*height, (3/4)*height);
    y2 = random((1/4)*height, (3/4)*height);
    y3 = random((1/4)*height, (3/4)*height);
    y4 = random((1/4)*height, (3/4)*height);
    y5 = y3 + 2 * (y4 - y3);
    y6 = random((1/4)*height, (3/4)*height);
    y7 = random((1/4)*height, (3/4)*height);
    y8 = y6 + 2 * (y7 - y6);
    y9 = y2 + 2 * (y1 - y2);
    y10 = y1;

    x11 = random((1/4)*width, (3/4)*width);
    x12 = random((1/4)*width, (3/4)*width);
    x13 = random((1/4)*width, (3/4)*width);
    x14 = random((1/4)*width, (3/4)*width);
    x15 = x13 + 2 * (x14 - x13);
    x16 = random((1/4)*width, (3/4)*width);
    x17 = random((1/4)*width, (3/4)*width);
    x18 = x16 + 2 * (x17 - x16);
    x19 = x12 + 2 * (x11 - x12);
    x20 = x11;

    y11 = random((1/4)*height, (3/4)*height);
    y12 = random((1/4)*height, (3/4)*height);
    y13 = random((1/4)*height, (3/4)*height);
    y14 = random((1/4)*height, (3/4)*height);
    y15 = y13 + 2 * (y14 - y13);
    y16 = random((1/4)*height, (3/4)*height);
    y17 = random((1/4)*height, (3/4)*height);
    y18 = y16 + 2 * (y17 - y16);
    y19 = y12 + 2 * (y11 - y12);
    y20 = y11;

    for(let i=0; i<12; i++ ){ // Create starting point of movment
        m.push(random(0, mradius * 2) - mradius);
    }
}

function draw(){
    randomSeed(60);
    noStroke();
    noFill();

    m.forEach((element, i, array) => { // Loop for movment
        
        if (element > 0) {
            if (i == 0) {
                x1 = x1 + mspeed;
                x10 = x10 + mspeed;
            } else if (i == 1) {
                x4 = x4 + mspeed;
            } else if (i == 2) {
                x7 = x7 + mspeed;
            } else if (i == 3) {
                x11 = x11 + mspeed;
                x20 = x20 + mspeed;
            } else if (i == 4) {
                x14 = x14 + mspeed;
            } else if (i == 5) {
                x17 = x17 + mspeed;
            } else if (i == 6) {
                y1 = y1 + mspeed;
                y10 = y10 + mspeed;
            } else if (i == 7) {
                y4 = y4 + mspeed;
            } else if (i == 8) {
                y7 = y7 + mspeed;
            } else if (i == 9) {
                y11 = y11 + mspeed;
                y20 = y20 + mspeed;
            } else if (i == 10) {
                y14 = y14 + mspeed;
            } else if (i == 11) {
                y17 = y17 + mspeed;
            }

            if (element - mspeed <= 0) {
                array[i] = mradius * -1; // Reset movment
            } else {
                array[i] = element - mspeed;
            }

        } else {
            
            if (i == 0) {
                x1 = x1 - mspeed;
                x10 = x10 - mspeed;
            } else if (i == 1) {
                x4 = x4 - mspeed;
            } else if (i == 2) {
                x7 = x7 - mspeed;
            } else if (i == 3) {
                x11 = x11 - mspeed;
                x20 = x20 - mspeed;
            } else if (i == 4) {
                x14 = x14 - mspeed;
            } else if (i == 5) {
                x17 = x17 - mspeed;
            } else if (i == 6) {
                y1 = y1 - mspeed;
                y10 = y10 - mspeed;
            } else if (i == 7) {
                y4 = y4 - mspeed;
            } else if (i == 8) {
                y7 = y7 - mspeed;
            } else if (i == 9) {
                y11 = y11 - mspeed;
                y20 = y20 - mspeed;
            } else if (i == 10) {
                y14 = y14 - mspeed;
            } else if (i == 11) {
                y17 = y17 - mspeed;
            }

            if (element + mspeed >= 0) {
                array[i] = mradius; // Reset movment
            } else {
                array[i] = element + mspeed;
            }
        }
    });

    clear();
    background(0);

    for(let t=0; t<=1; t=t + 0.01){
        stroke(255);
        strokeWeight(.5);

        let x = bezierPoint(x1,x2,x3,x4,t);
        let y = bezierPoint(y1,y2,y3,y4,t);
        let xb = bezierPoint(x4,x5,x6,x7,t);
        let yb = bezierPoint(y4,y5,y6,y7,t);
        let xc = bezierPoint(x7,x8,x9,x10,t);
        let yc = bezierPoint(y7,y8,y9,y10,t);

        let xd = bezierPoint(x11,x12,x13,x14,t);
        let yd = bezierPoint(y11,y12,y13,y14,t);
        let xe = bezierPoint(x14,x15,x16,x17,t);
        let ye = bezierPoint(y14,y15,y16,y17,t);
        let xf = bezierPoint(x17,x18,x19,x20,t);
        let yf = bezierPoint(y17,y18,y19,y20,t);

        line(x,y,xd,yd);
        line(xb,yb,xe,ye);
        line(xc,yc,xf,yf);
    }
}

window.addEventListener('resize', function(event) {
    setup();
}, true);