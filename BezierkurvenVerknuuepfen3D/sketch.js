let seed;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    seed = random(100);
}

function draw(){
    orbitControl(3,3,0);
    background(0);
    randomSeed(seed);
    noStroke();
    noFill();

    let x1 = random(-300,300)* sin(frameCount/200);
        x2 = random(-300,300)* cos(frameCount/200);
        x3 = random(-300,300)* sin(frameCount/200);
        x4 = random(-300,300)* cos(frameCount/200);
        x5 = x3 + 2 * (x4 - x3);
        x6 = random(-300,300)* sin(frameCount/200);
        x7 = random(-300,300)* cos(frameCount/200);
        x8 = x6 + 2 * (x7 - x6);
        x9 = x2 + 2 * (x1 - x2);
        x10 = x1;

    let y1 = random(-300,300)* sin(frameCount/200);
        y2 = random(-300,300)* cos(frameCount/200);
        y3 = random(-300,300)* sin(frameCount/200);
        y4 = random(-300,300)* cos(frameCount/200);
        y5 = y3 + 2 * (y4 - y3);
        y6 = random(-300,300)* sin(frameCount/200);
        y7 = random(-300,300)* cos(frameCount/200);
        y8 = y6 + 2 * (y7 - y6);
        y9 = y2 + 2 * (y1 - y2);
        y10 = y1;

    let z1 = random(-300,300)* sin(frameCount/200);
        z2 = random(-300,300)* cos(frameCount/200);
        z3 = random(-300,300)* sin(frameCount/200);
        z4 = random(-300,300)* cos(frameCount/200);
        z5 = z3 + 2 * (z4 - z3);
        z6 = random(-300,300)* sin(frameCount/200);
        z7 = random(-300,300)* cos(frameCount/200);
        z8 = z6 + 2 * (z7 - z6);
        z9 = z2 + 2 * (z1 - z2);
        z10 = z1;

    let x11 = random((-300,300))* sin(frameCount/200);
        x12 = random(-300,300)* cos(frameCount/200);
        x13 = random(-300,300)* sin(frameCount/200);
        x14 = random(-300,300)* cos(frameCount/200);
        x15 = x13 + 2 * (x14 - x13);
        x16 = random(-300,300)* sin(frameCount/200);
        x17 = random(-300,300)* cos(frameCount/200);
        x18 = x16 + 2 * (x17 - x16);
        x19 = x12 + 2 * (x11 - x12);
        x20 = x11;

    let y11 = random(-300,300)* sin(frameCount/200);
        y12 = random(-300,300)* cos(frameCount/200);
        y13 = random(-300,300)* sin(frameCount/200);
        y14 = random(-300,300)* cos(frameCount/200);
        y15 = y13 + 2 * (y14 - y13);
        y16 = random(-300,300)* sin(frameCount/200);
        y17 = random(-300,300)* cos(frameCount/200);
        y18 = y16 + 2 * (y17 - y16);
        y19 = y12 + 2 * (y11 - y12);
        y20 = y11;

    let z11 = random(-300,300)* sin(frameCount/200);
        z12 = random(-300,300)* cos(frameCount/200);
        z13 = random(-300,300)* sin(frameCount/200);
        z14 = random(-300,300)* cos(frameCount/200);
        z15 = z13 + 2 * (z14 - z13);
        z16 = random(-300,300)* sin(frameCount/200);
        z17 = random(-300,300)* cos(frameCount/200);
        z18 = z16 + 2 * (z17 - z16);
        z19 = y12 + 2 * (z11 - z12);
        z20 = z11;
        
    for(let t=0; t<=1; t=t + 0.01){
        stroke(255);
        strokeWeight(.5);

        let x = bezierPoint(x1,x2,x3,x4,t);
        let y = bezierPoint(y1,y2,y3,y4,t);
        let z = bezierPoint(z1,z2,z3,z4,t);
        let xb = bezierPoint(x4,x5,x6,x7,t);
        let yb = bezierPoint(y4,y5,y6,y7,t);
        let zb = bezierPoint(z4,z5,z6,z7,t);
        let xc = bezierPoint(x7,x8,x9,x10,t);
        let yc = bezierPoint(y7,y8,y9,y10,t);
        let zc = bezierPoint(z7,z8,z9,z10,t);

        let xd = bezierPoint(x11,x12,x13,x14,t);
        let yd = bezierPoint(y11,y12,y13,y14,t);
        let zd = bezierPoint(z11,z12,z13,z14,t);
        let xe = bezierPoint(x14,x15,x16,x17,t);
        let ye = bezierPoint(y14,y15,y16,y17,t);
        let ze = bezierPoint(z14,z15,z16,z17,t);
        let xf = bezierPoint(x17,x18,x19,x20,t);
        let yf = bezierPoint(y17,y18,y19,y20,t);
        let zf = bezierPoint(z17,z18,z19,z20,t);

        line(x,y,z,xd,yd,zd);
        line(xb,yb,zb,xe,ye,ze);
        line(xc,yc,zc,xf,yf,zf);
    }
}
