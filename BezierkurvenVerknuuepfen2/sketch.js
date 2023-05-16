function setup() {
    createCanvas(windowWidth, windowHeight,);
    background(0);
}

function draw(){
    randomSeed(60);
    noStroke();
    noFill();

    let x1 = random((1/4)*width, (3/4)*width);
        x2 = random((1/4)*width, (3/4)*width);
        x3 = random((1/4)*width, (3/4)*width);
        x4 = random((1/4)*width, (3/4)*width);
        x5 = x3 + 2 * (x4 - x3);
        x6 = random((1/4)*width, (3/4)*width);
        x7 = random((1/4)*width, (3/4)*width);
        x8 = x6 + 2 * (x7 - x6);
        x9 = x2 + 2 * (x1 - x2);
        x10 = x1;

    let y1 = random((1/4)*height, (3/4)*height);
        y2 = random((1/4)*height, (3/4)*height);
        y3 = random((1/4)*height, (3/4)*height);
        y4 = random((1/4)*height, (3/4)*height);
        y5 = y3 + 2 * (y4 - y3);
        y6 = random((1/4)*height, (3/4)*height);
        y7 = random((1/4)*height, (3/4)*height);
        y8 = y6 + 2 * (y7 - y6);
        y9 = y2 + 2 * (y1 - y2);
        y10 = y1;

    let x11 = random((1/4)*width, (3/4)*width);
        x12 = random((1/4)*width, (3/4)*width);
        x13 = random((1/4)*width, (3/4)*width);
        x14 = random((1/4)*width, (3/4)*width);
        x15 = x13 + 2 * (x14 - x13);
        x16 = random((1/4)*width, (3/4)*width);
        x17 = random((1/4)*width, (3/4)*width);
        x18 = x16 + 2 * (x17 - x16);
        x19 = x12 + 2 * (x11 - x12);
        x20 = x11;

    let y11 = random((1/4)*height, (3/4)*height);
        y12 = random((1/4)*height, (3/4)*height);
        y13 = random((1/4)*height, (3/4)*height);
        y14 = random((1/4)*height, (3/4)*height);
        y15 = y13 + 2 * (y14 - y13);
        y16 = random((1/4)*height, (3/4)*height);
        y17 = random((1/4)*height, (3/4)*height);
        y18 = y16 + 2 * (y17 - y16);
        y19 = y12 + 2 * (y11 - y12);
        y20 = y11;
        
    // // Bezier 1
    // beginShape();
    // vertex(x1, y1);
    // bezierVertex(x2, y2, x3, y3, x4, y4);
    // bezierVertex(x5, y5, x6, y6, x7, y7);
    // bezierVertex(x8, y8, x9, y9, x10, y10);
    // endShape();

    // // Bezier 2
    // beginShape();
    // vertex(x11, y11);
    // bezierVertex(x12, y12, x13, y13, x14, y14);
    // bezierVertex(x15, y15, x16, y16, x17, y17);
    // bezierVertex(x18, y18, x19, y19, x20, y20);
    // endShape();


    

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
