const analytics = require('../public/javascripts/rivraddon');

describe('trackPbjsEvent', () => {
    it('should return xhr obj', () => {
        expect(analytics.trackPbjsEvent('test')).toBeTruthy();
    });
});

describe('enableAnalytics', () => {

    it('should console a message', () => {
        const log = jest.fn()
        global.console = { log }
        analytics.enableAnalytics();
        expect(log).toHaveBeenCalledWith('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics')
    });
});