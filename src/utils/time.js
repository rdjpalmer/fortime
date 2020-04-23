export function formatTime(ms) {
  const msAsDate = new Date(1000 * Math.round(ms / 1000));
  let minutes = msAsDate.getUTCMinutes();
  let seconds = msAsDate.getUTCSeconds();

  console.log({ minutes, seconds });

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else if (seconds === 60) {
    seconds = "00";
  }

  return minutes + ":" + seconds;
}

export function formatToMs(time) {
  const [minutes, seconds] = time.split(":");

  const minutesAsMs = minutes * 60 * 1000;
  const secondsAsMs = seconds * 1000;

  return minutesAsMs + secondsAsMs;
}
