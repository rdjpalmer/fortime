<script>
  import * as timeUtils from "../utils/time";
  import * as caretUtils from "../utils/caret";
  import * as eventUtils from "../utils/event";

  export let time = 0;
  export let onChange = () => {};

  const Numeric = /^[0-9]$/g;
  const Key = {
    Colon: ':',
    Backspace: 'Backspace',
    ArrowRight: 'ArrowRight',
    ArrowLeft: 'ArrowLeft',
    Space: " ",
  }

  async function updateInput(event) {
    const { target, key } = event;
    const position = caretUtils.getPosition(target);

    // Number(falsy) === 0
    if (Number(key) >= 0 && key !== Key.Space) {
      event.preventDefault();

      if (position === 5) {
        return;
      } else if (position === 2) {
        caretUtils.replaceNextChar(target, position + 1, key);
        return;
      }

      caretUtils.replaceNextChar(target, position, key);
    } else if (key === Key.Backspace) {
      event.preventDefault();

      if (position === 0) {
        return;
      } else if (position === 3) {
        caretUtils.setPosition(target, position - 1);
        return;
      }

      caretUtils.replacePrevChar(target, position, "0");
    } else if (key === Key.Colon) {
      if (position !== 2) {
        event.preventDefault();
        return;
      } else {
        event.preventDefault();
        caretUtils.replaceNextChar(target, position, key);
      }
    } else if ([Key.ArrowLeft, Key.ArrowRight].indexOf(key) === -1) {
      event.preventDefault();
      return;
    }
  }

  async function handleKeyDown(event) {
    await updateInput(event);

    /**
     * `event.preventDefault()` will prevent all events after keyDown (above)
     * Refire `input` so we don't break the contenteditables "onChange" handling
     * Being real good, we could fire the other events too (per user-event's type method)
     */
    eventUtils.fire.input(event.target, {
      ...event,
      handled: true
    });
  }

  function handleInput(event) {
    const nextValue = event.target.textContent;
    onChange(timeUtils.formatToMs(nextValue));
  }

  $: value = timeUtils.formatTime(time);
</script>

<div
  contenteditable
  on:input={handleInput}
  on:keydown={handleKeyDown}
  bind:innerHTML={value}
/>