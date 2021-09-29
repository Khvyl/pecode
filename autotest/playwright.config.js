const config = {
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'on',
        reporter: 'line',
    },
};

module.exports = config;