export default class Timer {
  constructor(startTime = 0, callbacks) {
    const {
      onStart = () => {},
      onUpdate = () => {},
      onStop = () => {},
      onEnd = () => {},
    } = callbacks;

    this.startTime = startTime;
    this.onStart = onStart;
    this.onUpdate = onUpdate;
    this.onStop = onStop;
    this.onEnd = onEnd;

    this.offset = null;
    this.interval = null;
    this.recording = false;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this._update = this._update.bind(this);
    this._calculateTimeOffset = this._calculateTimeOffset.bind(this);
  }

  start() {
    this.recording = true;
    this.offset = Date.now();
    this.interval = setInterval(this._update, 1000);
    this.onStart();
    return this;
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.recording = false;
    this.onStop();
    return this;
  }

  setStartTime(time) {
    this.startTime = time;
    return this;
  }

  _update() {
    const newTime = this.startTime - this._calculateTimeOffset();
    this.startTime = newTime;
    this.onUpdate(newTime);

    if (newTime <= 0) {
      this.stop();
      this.onEnd();
    }

    return this;
  }

  _calculateTimeOffset() {
    const now = Date.now();
    const newOffset = now - this.offset;
    this.offset = now;
    return newOffset;
  }
}
