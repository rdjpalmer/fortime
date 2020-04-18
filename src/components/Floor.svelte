<script>
  import { onMount } from "svelte";
  import images from "./images";

  let canvasElm;
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

      if (play) {
        requestAnimationFrame(() => drawFloor(ctx));
      }
    };
  }

  function resizeCanvasToDisplaySize(canvas) {
    const width = ImageWidth;
    const height = document.body.clientHeight;

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

  $: {
    if (play) {
      const ctx = canvasElm.getContext("2d");
      drawFloor(ctx);
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
