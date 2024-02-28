const urlParam = new URLSearchParams(window.location.search).get('timestamp');
const formParam = new URLSearchParams(window.location.search).get('form');
const hkTimezone = 'Asia/Hong_Kong';
const currentTimestamp = Math.floor(moment().tz(hkTimezone).valueOf());

try {
    const urlTimestamp = Math.floor(moment.unix(parseFloat(urlParam)).tz(hkTimezone).valueOf());

    const diff = Math.abs(currentTimestamp - urlTimestamp);
    if (diff < 60*1000) {
        window.location.href = formParam;
    } else {
        window.location.href = 'https://www.google.com/';
    }
} catch (error) {
    window.location.href = 'https://www.google.com/';
}
