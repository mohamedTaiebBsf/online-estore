const FORBID_TAGS = [
  "script",
  "style",
  "iframe",
  "noscript",
  "noembed",
  "head",
  "meta",
];

const FORBID_EVENTS = [
  "onabort",
  "onblur",
  "onchange",
  "onclick",
  "ondblclick",
  "ondragdrop",
  "onerror",
  "onfocus",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmove",
  "onreset",
  "onresize",
  "onselect",
  "onsubmit",
  "onunload",
];

const FORBID_ATTRS = ["action", "style", "hidden"];

const FORBID_ATTRS_VALUES = ["javascript:", "<script", "expression"];

export { FORBID_TAGS, FORBID_EVENTS, FORBID_ATTRS, FORBID_ATTRS_VALUES };
