export function formatTime(ms) {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
}

export function formatToMs(time) {
  const [minutes, seconds] = time.split(":");

  const minutesAsMs = minutes * 60 * 1000;
  const secondsAsMs = seconds * 1000;

  return minutesAsMs + secondsAsMs;
}
