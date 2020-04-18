<script>
  import { onMount } from "svelte";
  import images from "./images";

  let canvasElm;
  let animationId;
  export let play = false;

  const ImageWidth = 3840;
  const ImageHeight = 1080;
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
        canvasElm.height - ImageHeight,
        ImageWidth,
        ImageHeight
      );

      index = index + 2;

      if (index === images.length) {
        index = 0;
      }
    };
  }

  function resizeCanvasToDisplaySize(canvas) {
    const width = ImageWidth;
    const height = ImageHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }

    return false;
  }

  onMount(() => {
    const ctx = canvasElm.getContext("2d");
    resizeCanvasToDisplaySize(canvasElm);
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
      startAnimating(24);
    }
  }
</script>

<style>
  canvas {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    top: auto;
    object-fit: cover;
    background-color: transparent;
  }
</style>

<canvas bind:this={canvasElm} />
