<script>
  import { onMount } from "svelte";
  import imageSource from "./favicon-196.png";

  let canvasElm;

  const ImageSize = 196;
  let positionX = 0;
  let positionY = 0;
  let movingUp = false;
  let movingLeft = false;

  function drawFloor(ctx) {
    let image = new Image();
    image.src = imageSource;
    image.width = ImageSize;
    image.height = ImageSize;

    image.onload = () => {
      ctx.drawImage(image, positionX, positionY, ImageSize, ImageSize);

      console.log({ movingLeft, movingUp, positionX, positionY });

      if (movingLeft) {
        if (positionX === 1) {
          movingLeft = false;
        }

        positionX -= 1;
      } else {
        if (positionX + ImageSize === document.body.clientWidth - 1) {
          movingLeft = true;
        }

        positionX += 1;
      }

      if (movingUp) {
        if (positionY === 1) {
          movingUp = false;
        }

        positionY -= 1;
      } else {
        if (positionY + ImageSize === document.body.clientHeight - 1) {
          movingUp = true;
        }

        positionY += 1;
      }

      requestAnimationFrame(() => drawFloor(ctx));
    };
  }

  onMount(() => {
    const ctx = canvasElm.getContext("2d");
    drawFloor(ctx);

    canvasElm.width = document.body.clientWidth;
    canvasElm.height = document.body.clientHeight;
  });
</script>

<style>
  canvas {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
</style>

<canvas bind:this={canvasElm} />
