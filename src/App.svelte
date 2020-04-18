<script>
	import { onMount } from 'svelte';
	import Timer from "./utils/Timer.js";
	import TimeInput from "./components/TimeInput.svelte";
	import Floor from "./components/Floor.svelte";

	// let time = 0;
	// let counting = false;
	// let hasStarted = false;
	// let isFinishing = false;
	// let hasFinished = false;
	// let timer = new Timer(time, {
	// 	onUpdate: handleUpdate,
	// 	onEnd: handleEnd
	// });

	// const countDownSoundPath = "/sounds/countdown.mp3";
	// const finishSoundPath = "/sounds/end.mp3";

	// function handleChange(nextTime) {
	// 	time = nextTime;
	// 	hasStarted = false;
	// }

	// function toggleCounting(event) {
	// 	event.preventDefault();

	// 	if (time < 1000) {
	// 		return;
	// 	}

	// 	counting = !counting;

	// 	if (!hasStarted && counting) {
	// 		timer.setStartTime(time).start();
	// 		isFinishing = false;
	// 		hasFinished = false;
	// 	} else if (counting) {
	// 		timer.start();
	// 	} else {
	// 		timer.stop();
	// 	}
	// }

	// function handleUpdate(nextTime) {
	// 	if (nextTime <= 10500 && nextTime > 0) {
	// 		playSoundSecond();
	// 	}

	// 	time = nextTime;
	// }

	// function handleEnd() {
	// 	time = 0;
	// 	counting = false;
	// 	hasFinished = true;

	// 	playSoundEnd();

	// 	timer.stop();
	// }

	// function playSoundSecond() {
	// 	const audio = new Audio();
	// 	audio.src = countDownSoundPath;
	// 	audio.play();
	// }

	// function playSoundEnd() {
	// 	const audio = new Audio();
	// 	audio.src = finishSoundPath;
	// 	audio.play();
	// }


	// onMount(() => {
	// 	document.querySelector('[contenteditable]').focus();
	// });

	// $: {
	// 	isFinishing = time <= 10000;
	// }
</script>

<!-- <main class:active={counting}> -->
	<Floor />
	<!-- <div class="gradient" class:finishing={isFinishing} class:finished={hasFinished} />
	<div class="input">
		<TimeInput time={time} onChange={handleChange} editing={!counting} />
	</div>
	<button disabled={time < 1000} type="button" class="playpause" on:click={toggleCounting}>{counting ? 'Pause' : 'Play'}</button> -->
	<!-- preload the audio so there isn't a delay when the countdown begins -->
	<!-- <audio style="opacity: 0;" src={countDownSoundPath} preload="auto" />
	<audio style="opacity: 0;" src={finishSoundPath} preload="auto" />
	<small class="smallprint">
		<p>
			Made with 🍷 by <a href="https://rdjpalmer.com/fortime">Richard Palmer</a>
		</p>
	</small> -->
<!-- </main> -->

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
		background-color: black;
		overflow: hidden;
	}

	/* @keyframes moveBg {
		0% {
				background-position: 50% 0;
				transform: translate3d(0, 0, 0) perspective(400px) rotateX(42deg) scale(2);
		}
		100% {
				background-position: 50% 100%;
				transform: translate3d(0, 0, 0) perspective(400px) rotateX(42deg) scale(2);
		}
	}

	.active .floor:before {
		animation-play-state: running;
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
		text-shadow: 0 0 5px white;
		filter: blur(1px) brightness(750%);
		caret-color: white;
	}

	.input > :global(*:focus) {
		outline: 0;
		text-shadow: 0 0 5px white, 0 0 10px #0ecff8;
	}

	.active .input:before {
		content: attr(data-time);
		font-family: 'Fira Code', monospace;
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

		background: linear-gradient(114.5793141156962deg, #0ecff8, #f64463, #40F292, #0ecff8, #f64463, #40F292);

		background-size: 100%;
		background-repeat: repeat;

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
	} */
</style>