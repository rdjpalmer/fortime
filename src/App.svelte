<script>
	import { onMount } from 'svelte';
	import Timer from "./utils/Timer.js";
	import TimeInput from "./components/TimeInput.svelte";

	let time = 0;
	let counting = false;
	let hasStarted = false;
	let isFinishing = false;
	let timer = new Timer(time, {
		onUpdate: handleUpdate,
		onEnd: handleEnd
	});

	const countDownSoundPath = "/sounds/countdown.mp3";
	const finishSoundPath = "/sounds/end.mp3";

	function handleChange(nextTime) {
		time = nextTime;
		hasStarted = false;
	}

	function toggleCounting(event) {
		event.preventDefault();

		if (time < 1000) {
			return;
		}

		counting = !counting;

		if (!hasStarted && counting) {
			timer.setStartTime(time).start();
		} else if (counting) {
			timer.start();
		} else {
			timer.stop();
		}
	}

	function handleUpdate(nextTime) {
		if (nextTime <= 10500 && nextTime > 0) {
			playSoundSecond();
		}

		time = nextTime;
	}

	function handleEnd() {
		time = 0;
		counting = false;

		playSoundEnd();

		timer.stop();
	}

	function playSoundSecond() {
		const audio = new Audio();
		audio.src = countDownSoundPath;
		audio.play();
	}

	function playSoundEnd() {
		const audio = new Audio();
		audio.src = finishSoundPath;
		audio.play();
	}


	onMount(() => {
		document.querySelector('[contenteditable]').focus();
	});

	$: {
		isFinishing = time <= 10000;
	}
</script>

<main class:active={counting}>
	<div class="floor" />
	<div class="gradient" class:finishing={isFinishing} />
	<div class="input">
		<TimeInput time={time} onChange={handleChange} editing={!counting} />
	</div>
	<button disabled={time < 1000} type="button" class="playpause" on:click={toggleCounting}>{counting ? 'Pause' : 'Play'}</button>
	<audio style="opacity: 0;" src={countDownSoundPath} preload="auto" />
	<audio style="opacity: 0;" src={finishSoundPath} preload="auto" />
</main>

<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Fira+Sans:wght@500;900&display=swap" rel="stylesheet">

<style>
	:global(html) {
		height: 100%;
		width: 100%;
	}

	:global(body) {
		margin: 0;
	  font-family: 'Fira Code', monospace;
		background-color: black;
		overflow: hidden;
	}

	@keyframes moveBg {
		0% {
				background-position: 50% 0;
				transform: translate3d(0, 0, 0) perspective(400px) rotateX(42deg) scale(2);
		}
		100% {
				background-position: 50% 100%;
				transform: translate3d(0, 0, 0) perspective(400px) rotateX(42deg) scale(2);
		}
	}

	.floor:before {
		content: "";
		position: absolute;
		top: auto;
		bottom: 0;
		left: -50vw;
		width: 200vw;
		height: 800px;
		background-image: url("/images/floor.svg");
		background-repeat: repeat;
		background-position: center;
		transform-origin: center bottom;
		transform: perspective(400px) rotateX(42deg) scale(2);
		animation: moveBg 2000ms linear;
		animation-iteration-count: infinite;
		animation-play-state: paused;
	}

	.floor:after {
		content: "";
		position: absolute;
		top: auto;
		bottom: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(180deg, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%);
	}

	.active .floor:before {
		animation-play-state: running;
	}

	.input {
		color: black;
		font-size: min(25vw, 50vh);
		font-weight: 500;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		text-shadow: 0 0 5px white;
		filter: blur(1px) brightness(750%);
		caret-color: white;
	}

	.active .input:before {
		content: attr(data-time);
		font-weight: 500;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		font-size: min(25vw, 50vh);
		color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
		font-feature-settings: tnum;
		font-variant-numeric: tabular-nums;
		mix-blend-mode: multiply;

		/* Create the gradient. */
		background: linear-gradient(114.5793141156962deg, #0ecff8, #f64463, #40F292, #0ecff8, #f64463, #40F292);

		/* Set the background size and repeat properties. */
		background-size: 100%;
		background-repeat: repeat;

		/* Use the text as a mask for the background. */
		/* This will show the gradient as a text color rather than element bg. */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: blur(3px);
	}

	@keyframes Gradient {
		0% {
			background-position:28% 0%;
		}
    50% {
			background-position:73% 100%;
		}
    100% {
			background-position:28% 0%;
		}
	}

	.gradient {
		position: absolute;
		width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
		mix-blend-mode:multiply;
		z-index: 10;
		pointer-events:none;
		opacity: 0;
		transition: opacity 150ms;
		background: linear-gradient(114.5793141156962deg, #0ecff8, #f64463, #40F292, #0ecff8, #f64463, #40F292);
		background-size: 300% 300%;
		animation: Gradient 20s linear infinite;
		animation-play-state: running;
	}

	.active .gradient {
		opacity: 1;
		animation-play-state: running;
	}

	.active .gradient.finishing {
		background: linear-gradient(114.5793141156962deg, #f64463, red);
	}

	.playpause {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 21%;
		z-index: 15;
		background-color: transparent;

		width: 108px;
		height: 48px;

		font-family: Fira Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 40px;
		line-height: 0;
		/* identical to box height */

		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		letter-spacing: 0.11em;

		color: rgba(6, 227, 250,1);
		border: 4px solid rgba(6, 227, 250,1);

		width: 190px;
		height: 69px;

		backdrop-filter: blur(4px);
		/* Note: backdrop-filter has minimal browser support */

		border-radius: 75px;
		cursor: pointer;
		transition: transform 150ms, opacity 150ms;
	}

	.playpause:hover,
	.playpause:focus {
		transform: translateX(-50%) scale(1.1);
	}

	.playpause:active {
		transform: translateX(-50%) scale(0.9);
	}

	.active .playpause,
	.playpause[disabled] {
		opacity: 0.25;
		transition: none;
	}

	.active .playpause:hover {
		opacity: 1;
	}
</style>