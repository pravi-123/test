const analytics = {
    enableAnalytics: () => {
        const text ='SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics';
        console.log(text);
    },
    trackPbjsEvent: (event) => {
        const url = 'https://tracker.simplaex-code-challenge.com';
        const body = { "eventType": event };
        const json = JSON.stringify(body);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send([json]);

        return xhr;
    }
};
window.rivraddon = { analytics };
module.exports = analytics;