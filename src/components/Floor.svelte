<script>
  import { onMount } from "svelte";
  import images from "./images";

  let canvasElm;
  let animationId;
  export let play = false;

  let ImageWidth;
  let ImageHeight;
  let index = 0;

  function drawFloor(ctx) {
    let image = new Image();
    image.src = images[index];
    image.width = ImageWidth;
    image.height = ImageHeight;

    image.onload = () => {
      ctx.clearRect(0, 0, canvasElm.width, canvasElm.height);
      ctx.drawImage(
        image,
        0,
        0,
        ImageWidth,
        ImageHeight
      );

      index = index + 1;

      if (index === images.length) {
        index = 0;
      }
    };
  }

  function resizeCanvasToDisplaySize(canvas) {
    canvas.width = document.querySelector('canvas').clientWidth;
    canvas.height = document.querySelector('canvas').clientHeight;
  }

  onMount(() => {
    const ctx = canvasElm.getContext("2d");
    resizeCanvasToDisplaySize(canvasElm);

    ImageWidth = document.querySelector('canvas').clientWidth;
    ImageHeight =document.querySelector('canvas').clientHeight;
    // insert the first frame
    drawFloor(ctx);
  });

  function animate(ctx) {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      drawFloor(ctx);
    }

    if (play) {
      requestAnimationFrame(() => animate(ctx));
    }
  }

  let stop = false;
  let frameCount = 0;
  let fps, fpsInterval, startTime, now, then, elapsed;

  function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;

    const ctx = canvasElm.getContext("2d");
    animationId = animate(ctx);
  }

  $: {
    if (play) {
      startAnimating(30);
    }
  }
</script>

<style>
  canvas {
    width: 100vw;
    height: 60vh;
    object-fit: contain;
    background-color: transparent;
  }
</style>

<canvas bind:this={canvasElm} />
