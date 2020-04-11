export function getPosition(editable) {
  var caretPos = 0,
    sel,
    range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editable) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editable) {
      var tempEl = document.createElement("span");
      editable.insertBefore(tempEl, editable.firstChild);
      var tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
}

export function setPosition(editable, newPosition) {
  window.getSelection().collapse(editable.firstChild, newPosition);
}

export function replaceNextChar(editable, position, value) {
  var sel = window.getSelection();

  if (!sel.focusNode) {
    console.log("nope");
    return;
  }

  sel.focusNode.nodeValue =
    sel.focusNode.nodeValue.substring(0, position) +
    value +
    sel.focusNode.nodeValue.substring(position + 1);

  var range = document.createRange();

  sel.collapse(sel.focusNode, 0);
  setPosition(editable, position + 1);
}

export function replacePrevChar(editable, position, value) {
  var sel = window.getSelection();

  if (!sel.focusNode) {
    console.log("nope");
    return;
  }

  sel.focusNode.nodeValue =
    sel.focusNode.nodeValue.substring(0, position - 1) +
    value +
    sel.focusNode.nodeValue.substring(position);

  var range = document.createRange();

  sel.collapse(sel.focusNode, 0);
  setPosition(editable, position - 1);
}
