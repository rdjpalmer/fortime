<script>
	import { onMount } from 'svelte';
	import Timer from "./utils/Timer.js";
	import TimeInput from "./components/TimeInput.svelte";
	import Floor from "./components/Floor.svelte";

	let time = 0;
	let counting = false;
	let hasStarted = false;
	let isFinishing = false;
	let hasFinished = false;
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
			isFinishing = false;
			hasFinished = false;
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
		hasFinished = true;

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
	<Floor play={counting} />
	<div class="overlay" />
	<div class="input">
		<TimeInput time={time} onChange={handleChange} editing={!counting} />
	</div>
	<div class="gradient" class:finishing={isFinishing} class:finished={hasFinished} />

	<button disabled={time < 1000} type="button" class="playpause" on:click={toggleCounting}>{counting ? 'Pause' : 'Play'}</button>
	<!-- preload the audio so there isn't a delay when the countdown begins -->
	<audio style="opacity: 0;" src={countDownSoundPath} preload="auto" />
	<audio style="opacity: 0;" src={finishSoundPath} preload="auto" />
	<small class="smallprint">
		<p>
			Made with 🍷 by <a href="https://rdjpalmer.com/fortime">Richard Palmer</a>
		</p>
	</small>
</main>

<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Fira+Sans:wght@500;900&display=swap" rel="stylesheet">

<style>
	:global(html) {
		height: 100%;
		width: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	  font-family: 'Fira Sans', Helvetica, Arial, sans-serif, monospace;
		overflow: hidden;
	}

	.overlay {
		position: absolute;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(180deg, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)
	}

	.input > :global(*:focus) {
		outline: 0;
		text-shadow: 0 0 5px white, 0 0 10px #0ecff8;
	}

	.input {
		font-family: 'Fira Code', monospace;
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
		filter: blur(1px) brightness(750%);
		caret-color: white;
		text-shadow: 0 0 5px white;
	}

	.gradient {
		position: absolute;
		width: 100vw;
		height: 100vh;
		mix-blend-mode: multiply;
		pointer-events:none;
		z-index: 15;
	}

	.active .gradient {
		background: linear-gradient(114.5793141156962deg, #40F292, #0ecff8, #f64463);
	}

	.active .gradient.finishing {
		background: linear-gradient(114.5793141156962deg, #f64463, red);
	}

	@keyframes Flash {
		0% {
			opacity: 0;
		}

		17% {
			opacity: 1;
		}

		34% {
			opacity: 0;
		}

		51% {
			opacity: 1;
		}

		68% {
			opacity: 0;
		}

		85% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	.gradient.finished {
		background: linear-gradient(114.5793141156962deg, #f64463, red);
		animation: Flash 1s step-end forwards;
	}

	.playpause {
		align-items: center;
		backdrop-filter: blur(4px);
		background-color: transparent;
		border-radius: 75px;
		border: 4px solid rgba(6, 227, 250,1);
		bottom: 18%;
		color: rgba(6, 227, 250,1);
		cursor: pointer;
		display: flex;
		font-family: Fira Sans;
		font-size: 2rem;
		font-style: normal;
		font-weight: 500;
		height: 3rem;
		justify-content: center;
		left: 50%;
		letter-spacing: 0.11em;
		line-height: 0;
		position: absolute;
		text-align: center;
		transform: translateX(-50%);
		transition: transform 150ms, opacity 150ms;
		width: 10rem;
		z-index: 15;
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

	.smallprint {
		display: block;
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 0.75rem;
		z-index: 20;
		color: white;
		color: rgba(255, 255, 255, 0.75);
	}

	.smallprint p {
		margin: 0;
	}

	a {
		display: inline-block;
		color: rgba(6, 227, 250,1);
		text-decoration: underline;
		transition: transform 150ms;
		transform: scale(1);
	}

	a:hover {
		transform: scale(0.9);
	}
</style>