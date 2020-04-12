<script>
	import { onMount } from 'svelte';
	import Timer from "./utils/Timer.js";
	import TimeInput from "./components/TimeInput.svelte";

	let time = 0;
	let counting = false;
	let hasStarted = false;
	let timer = new Timer(time, handleUpdate);

	function handleChange(nextTime) {
		time = nextTime;
		hasStarted = false;
	}

	function toggleCounting(event) {
		event.preventDefault();

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
		time = nextTime;
	}

	onMount(() => {
		document.querySelector('[contenteditable]').focus();
	});
</script>

<main class:active={counting}>
	<div class="floor" />
	<div class="gradient" />
	<div class="input">
		<TimeInput time={time} onChange={handleChange} editing={!counting} />
	</div>
	<button type="button" class="playpause" on:click={toggleCounting}>{counting ? 'Pause' : 'Play'}</button>
</main>

<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Fira+Sans:wght@400;900&display=swap" rel="stylesheet">

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
		}
		100% {
				background-position: 50% 100%;
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
		background: linear-gradient(180deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
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
		text-shadow: 0 0 4px white;
		filter: blur(2px) brightness(750%);
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
		background-image: linear-gradient(114.5793141156962deg, rgba(6, 227, 250,1) 4.927083333333334%,rgba(229, 151, 64,1) 97.84374999999999%);;

		/* Set the background size and repeat properties. */
		background-size: 100%;
		background-repeat: repeat;

		/* Use the text as a mask for the background. */
		/* This will show the gradient as a text color rather than element bg. */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: blur(3px);
	}

	.gradient {
		background: linear-gradient(114.5793141156962deg, rgba(6, 227, 250,1) 4.927083333333334%,rgba(229, 151, 64,1) 97.84374999999999%);
		position: absolute;
		top: 0;
		left:0;
		width: 100%;
		height:100%;
		mix-blend-mode:multiply;
		z-index: 10;
		pointer-events:none;
		opacity: 0;
		transition: opacity 150ms;
	}

	.active .gradient {
		opacity: 1;
	}

	.playpause {
		position: absolute;
		top: auto;
		bottom: 0;
		z-index: 15;
	}
</style>