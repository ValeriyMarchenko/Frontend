window.onload = function () {
    var conn;
    var msg = document.getElementById("msg");
    var log = document.getElementById("log");

    function appendLog(item) {
        var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
        log.appendChild(item);
        if (doScroll) {
            log.scrollTop = log.scrollHeight - log.clientHeight;
        }
    }

    document.getElementById("form").onsubmit = function () {
        if (!conn) {
            return false;
        }
        if (!msg.value) {
            return false;
        }
        conn.send(msg.value);
        msg.value = "";
        return false;
    };

    document.getElementById("send_geo").onclick = function () {
        if (!conn) {
            return false;
        }
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
                conn.send(JSON.stringify({lat:coords.latitude, lng:coords.longitude}));
            });
        }
       
        return false;
    }

    if (window["WebSocket"]) {
        conn = new WebSocket("wss://echo.websocket.org/");
        conn.onclose = function (evt) {
            var item = document.createElement("div");
            item.innerHTML = "<b>Connection closed.</b>";
            appendLog(item);
        };
        conn.onmessage = function (evt) {
            var messages = evt.data.split('\n');
            for (var i = 0; i < messages.length; i++) {
                var item = document.createElement("div");
                let message = messages[i]
                try{
                    message = JSON.parse(message);
                    message = `https://www.openstreetmap.org/#map=18/${message.lat}/${message.lng}`;
                } catch (e) {
                    // Тут не надо ничего делать
                }
                item.innerText = message;
                appendLog(item);
            }
        };
    } else {
        var item = document.createElement("div");
        item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
        appendLog(item);
    }
};