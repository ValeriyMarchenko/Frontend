const timezone = document.querySelector('#timezone');
const data_time = document.querySelector('#data');
const btn = document.querySelector('.j-btn');

const error = () => {
    timezone.textContent = 'No success';
    data_time.textContent = 'No success';
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    let url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
    fetch(url)
    .then(resp => resp.json())
    .then(function(data){
        let time = data.timezone;
        let dat = data.date_time_txt;
        timezone.textContent = `timezone: ${time}`;
        data_time.textContent = `data and time: ${dat}`;
    })
    
}

btn.addEventListener('click', () => {
    timezone.textContent = '';
    data_time.textContent = '';
    
    if (!navigator.geolocation) {
        timezone.textContent = 'Brauser cant..('
    } else {
        timezone.textContent = 'Try to search...'
        navigator.geolocation.getCurrentPosition(success, error);
    }
});