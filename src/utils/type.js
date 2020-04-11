 async type(element, text, userOpts = {}) {
    if (element.disabled) return;
    const defaultOpts = {
      allAtOnce: false,
      delay: 0
    };
    const opts = Object.assign(defaultOpts, userOpts);

    const computedText = text.slice(0, element.maxLength || text.length);

    const previousText = element.value;

    if (opts.allAtOnce) {
      if (element.readOnly) return;
      fireEvent.input(element, {
        target: { value: previousText + computedText }
      });
    } else {
      let actuallyTyped = previousText;
      for (let index = 0; index < text.length; index++) {
        const char = text[index];
        const key = char; // TODO: check if this also valid for characters with diacritic markers e.g. úé etc
        const keyCode = char.charCodeAt(0);

        if (opts.delay > 0) await wait(opts.delay);

        const downEvent = fireEvent.keyDown(element, {
          key: key,
          keyCode: keyCode,
          which: keyCode
        });

        if (downEvent) {
          const pressEvent = fireEvent.keyPress(element, {
            key: key,
            keyCode,
            charCode: keyCode
          });

          const isTextPastThreshold =
            (actuallyTyped + key).length > (previousText + computedText).length;

          if (pressEvent && !isTextPastThreshold) {
            actuallyTyped += key;
            if (!element.readOnly)
              fireEvent.input(element, {
                target: {
                  value: actuallyTyped
                },
                bubbles: true,
                cancelable: true
              });
          }
        }

        fireEvent.keyUp(element, {
          key: key,
          keyCode: keyCode,
          which: keyCode
        });
      }
    }
    element.addEventListener("blur", fireChangeEvent);
  },