let timer = 0;
let limit = 25;

browser.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'timer') {
        timer++;
    }
    if (timer == limit) {
        timer = 0;
    }
});

function sendTimer() {
    return timer;
}


browser.alarms.create('timer', { periodInMinutes: 1 / 60 });


browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'getTimerValue') {
        sendResponse(timer);
    }
});
