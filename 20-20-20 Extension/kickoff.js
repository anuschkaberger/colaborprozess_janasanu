
let allExtensions = [
    {
        "startTime": 20,
        "start": function () {

            console.log('First Extention started');
            replaceText(document.body);
            replaceImage(document.body);
            setTimeout(() => {
                // End the event or do something else after 20 seconds
                console.log('Event ended');
                restoreText(document.body);
                restoreImage(document.body);
            }, 5000); // 20000 milliseconds = 20 seconds
        }

    },
    {
        "startTime": 15,
        "start": function () {
            console.log('Second Extension Started')
            const sketch = function(p5) {
                let squareWidth;
                let squareHeight;
                let startTopY;
                let targetTopY;
                let startBottomY;
                let targetBottomY;
                let startTime;
                let duration = 5000; // 30 seconds
            
                let myFont;
                let myFont1;
                p5.preload = function () {
                    let url = browser.runtime.getURL("PPNeueBit-Bold.otf")
                    myFont = p5.loadFont(url);
            
                    let url1 = browser.runtime.getURL("ABCDiatype-Bold-Trial.otf")
                    myFont1 = p5.loadFont(url1);
                }
            
                p5.setup = function () {
                    let c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
                    c.style('position', 'fixed');
                    c.style('top', '0px');
                    c.style('left', '0px');
                    c.style('pointer-events', 'none');
                    c.style('z-index', '99999999');
            
                    squareWidth = p5.windowWidth; // Set square width to the browser width
                    squareHeight = p5.windowHeight / 2; // Set square height to half of the browser height
                    startTopY = -squareHeight; // Start the top square above the screen
                    targetTopY = p5.height * 0.25 - squareHeight / 2; // Set the target position for the top square
                    startBottomY = p5.height; // Start the bottom square below the screen
                    targetBottomY = p5.height * 0.75 - squareHeight / 2; // Set the target position for the bottom square
                    startTime = p5.millis(); // Get the starting time
                    p5.rectMode(p5.CENTER);
                    p5.noLoop();
                };
            
                p5.draw = function nastia() {
                    p5.clear();
            
                    // Animate the top square
                    let elapsedTime = p5.millis() - startTime; // Calculate the elapsed time
                    if (elapsedTime > duration) {
                        elapsedTime = duration; // Cap the elapsed time to the duration
                    }
                    let progress = elapsedTime / duration; // Calculate the progress from 0 to 1
                    let currentTopY = p5.lerp(startTopY, targetTopY, progress); // Interpolate the current Y position for the top square
                    p5.fill(0); // Set fill color to blue
                    p5.rect(p5.width / 2, currentTopY + squareHeight / 2, squareWidth, squareHeight);
                    p5.fill(255); // Set text color to white
                    p5.textFont(myFont);
                    p5.textSize(p5.height / 3.7); // Set text size to 24 pixels
                    p5.textLeading(p5.height / 5.7);
                    p5.textAlign(p5.CENTER, p5.CENTER); // Set text alignment to center
                    p5.text("TAKE\nA BREAK", p5.width / 2, currentTopY + squareHeight / 2);
            
                    // Add small text below the first rectangle
                    p5.fill(255); // Set text color to white
                    p5.textFont(myFont1);
                    p5.textSize(p5.height / 70); // Set text size to 10 pixels
                    p5.textAlign(p5.CENTER, p5.TOP); // Set text alignment to center and top
                    p5.text("Every 20 minutes, take a 20-second break and focus your eyes on something at least 20 feet away", p5.width / 2, currentTopY + squareHeight / 2 + p5.height / 4.5);
            
            
                    // Animate the bottom square
                    let currentBottomY = p5.lerp(startBottomY, targetBottomY, progress); // Interpolate the current Y position for the bottom square
                    p5.fill(0); // Set fill color to blue
                    p5.rect(p5.width / 2, currentBottomY + squareHeight / 2, squareWidth, squareHeight);
                    p5.fill(255); // Set text color to white
                    p5.textFont(myFont);
                    p5.textSize(p5.height / 3.7); // Set text size to 24 pixels
                    p5.textLeading(p5.height / 5.7);
                    p5.textAlign(p5.CENTER, p5.CENTER); // Set text alignment to center
                    p5.text("FOR\n20 SEC", p5.width / 2, currentBottomY + squareHeight / 2 - p5.height / 25);
            
                    if (elapsedTime < duration) {
                        p5.loop(); // Continue looping until the duration is reached
                    } 
            
                };
            };
            
            let my_sketch = new p5(sketch);

            setTimeout(() => {
                // End the event or do something else after 20 seconds
                console.log('Event ended');
                const sketch = document.getElementById('defaultCanvas0');
                sketch.remove();
            }, 10000);
        }

    },
    {
        "startTime": 10,
        "start": function () {
            console.log('Third Extension Started');
            twenty();
            setTimeout(() => {
                // End the event or do something else after 20 seconds
                console.log('Event ended');
                restoreTwenty();
            }, 15000); // 20000 milliseconds = 20 seconds
        }
    }
]

let w = 0;
let timer = setInterval(() => {
    browser.runtime.sendMessage('getTimerValue', (response) => {
        console.log('Timer value:', response);
        if (response < 2) {
            w = Math.floor(Math.random() * allExtensions.length);
            let currentExtension = allExtensions[w];
        }

        // Check if the timer value is equal to 10 seconds
        if (response === allExtensions[w].startTime) {
            // Start the event or do something for 20 seconds
            allExtensions[w].start();
        }
    });
}, 1000);