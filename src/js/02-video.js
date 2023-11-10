import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const LS_PLAYER_TIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const playerStartTime = localStorage.getItem(LS_PLAYER_TIME_KEY);
player.setCurrentTime(playerStartTime ?? 0);

function savePlayerTime(time) {
    localStorage.setItem(LS_PLAYER_TIME_KEY, time);
}

const onTimeUpdate = throttle(data => savePlayerTime(data.seconds), 1000);

player.on('timeupdate', onTimeUpdate);
