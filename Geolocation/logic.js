const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn');
const screenParam = document.querySelector('#screen');

const params = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    screenParam.textContent = `Your screen params. height: ${height}, width: ${width}`;
}

const error = () => {
    status.textContent = 'No geo'
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = `Latitude: ${latitude}, longitude: ${longitude}`
    mapLink.href = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
    mapLink.textContent = 'Map href'
}

btn.addEventListener('click', () => {
    mapLink.href = '';
    mapLink.textContent = ``;
    screenParam.textContent = '';

    if (!navigator.geolocation) {
        status.textContent = 'Brauser cant hold geo'
    } else {
        status.textContent = 'Try to search your geo...'
        navigator.geolocation.getCurrentPosition(success, error);
    }

    params();
});
