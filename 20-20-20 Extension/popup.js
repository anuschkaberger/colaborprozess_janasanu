




let sketch = function(p) {
    let duration = 20;
    let r = 100;
    let angle;
    
    p.setup = function() {
      p.createCanvas(150,200);
    }
  
    setInterval(() => {
        let page = browser.extension.getBackgroundPage();
        let n = page.sendTimer();
    p.draw = function() {
    
      p.background(255);
      let time = p.constrain(n, 0, 20);
      angle = p.map(time, 0, duration, 0, p.TWO_PI);

        //Text
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(20);
        if(n > 20){
            p.text('Take a break!', p.width/2, 45);
        }
        else {
            p.text(n, p.width/2, 45);
        }
    
      p.translate(p.width / 2, p.height / 2 + 25);
      p.rotate(-p.HALF_PI)
      p.fill(0);
      p.noStroke();
      p.arc(0, 0, r, r, 0, angle, p.PIE);
    
    }
}, 1000);
  };
  
new p5(sketch);

