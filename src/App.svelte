<script>
	import TimeInput from "./components/TimeInput.svelte";

	let time = 0;

	function handleChange(nextTime) {
		time = nextTime;
	}

	$: {
		console.log({ time });
	}
</script>

<main>
	<TimeInput time={time} onChange={handleChange} />
</main>