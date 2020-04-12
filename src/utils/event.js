export const eventMap = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true,
    },
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true,
    },
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true,
    },
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: { bubbles: true, cancelable: false },
  },
  input: {
    EventType: "InputEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  invalid: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: true },
  },
  submit: {
    EventType: "Event",
    defaultInit: { bubbles: true, cancelable: true },
  },
  reset: {
    EventType: "Event",
    defaultInit: { bubbles: true, cancelable: true },
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, button: 0, composed: true },
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: { bubbles: true, cancelable: false },
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  // UI Events
  scroll: {
    EventType: "UIEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  canPlay: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  durationChange: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  emptied: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  encrypted: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  ended: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  loadedData: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  pause: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  play: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  playing: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  rateChange: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  seeked: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  seeking: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  stalled: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  suspend: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  waiting: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  // Image Events
  load: {
    EventType: "UIEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  error: {
    EventType: "Event",
    defaultInit: { bubbles: false, cancelable: false },
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: { bubbles: true, cancelable: false },
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: { bubbles: true, cancelable: false },
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: { bubbles: true, cancelable: false },
  },
  // Transition Events
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: { bubbles: true, cancelable: true },
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: false, composed: true },
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: true, cancelable: true, composed: true },
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: false, cancelable: false },
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: { bubbles: false, cancelable: false, composed: true },
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: { bubbles: true, cancelable: false },
  },
};

export const eventAliasMap = {
  doubleClick: "dblClick",
};

function getWindowFromNode(node) {
  // I'm not sure what could cause the final else so we'll leave it uncovered.
  if (node.defaultView) {
    // node is document
    return node.defaultView;
  } else if (node.ownerDocument && node.ownerDocument.defaultView) {
    // node is a DOM node
    return node.ownerDocument.defaultView;
  } else if (node.window) {
    // node is window
    return node.window;
  } else {
    // no idea...
    throw new Error(
      `Unable to find the "window" object for the given node. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new`
    );
  }
}

export function fire(element, event) {
  if (!event) {
    throw new Error(
      `Unable to fire an event - please provide an event object.`
    );
  }
  if (!element) {
    throw new Error(
      `Unable to fire a "${event.type}" event - please provide a DOM element.`
    );
  }
  return element.dispatchEvent(event);
}

export const create = {};

Object.keys(eventMap).forEach((key) => {
  const { EventType, defaultInit } = eventMap[key];
  const eventName = key.toLowerCase();

  create[key] = (node, init) => {
    if (!node) {
      throw new Error(
        `Unable to fire a "${key}" event - please provide a DOM element.`
      );
    }
    const eventInit = { ...defaultInit, ...init };
    const { target: { value, files, ...targetProperties } = {} } = eventInit;
    if (value !== undefined) {
      setNativeValue(node, value);
    }
    if (files !== undefined) {
      // input.files is a read-only property so this is not allowed:
      // input.files = [file]
      // so we have to use this workaround to set the property
      Object.defineProperty(node, "files", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: files,
      });
    }
    Object.assign(node, targetProperties);
    const window = getWindowFromNode(node);
    const EventConstructor = window[EventType] || window.Event;
    /* istanbul ignore else  */
    if (typeof EventConstructor === "function") {
      return new EventConstructor(eventName, eventInit);
    } else {
      // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
      const event = window.document.createEvent(EventType);
      const { bubbles, cancelable, detail, ...otherInit } = eventInit;
      event.initEvent(eventName, bubbles, cancelable, detail);
      Object.keys(otherInit).forEach((eventKey) => {
        event[eventKey] = otherInit[eventKey];
      });
      return event;
    }
  };

  fire[key] = (node, init) => fire(node, create[key](node, init));
});

// function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
  const { set: valueSetter } =
    Object.getOwnPropertyDescriptor(element, "value") || {};
  const prototype = Object.getPrototypeOf(element);
  const { set: prototypeValueSetter } =
    Object.getOwnPropertyDescriptor(prototype, "value") || {};
  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else if (valueSetter) {
    valueSetter.call(element, value);
  } else {
    throw new Error("The given element does not have a value setter");
  }
}

Object.keys(eventAliasMap).forEach((aliasKey) => {
  const key = eventAliasMap[aliasKey];
  fire[aliasKey] = (...args) => fire[key](...args);
});
