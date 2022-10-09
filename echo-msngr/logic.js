const wsUrl = "wss://echo.websocket.org/";
const msgInput = document.querySelector('#textWindow');
const msgBtn = document.querySelector('.j-btn-msg');
const geoBtn = document.querySelector('.j-btn-geo');
const textSpace = document.querySelector('#messages');

const placeholder = 'Input text';

let websocket = new WebSocket(wsUrl);

