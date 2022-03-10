import {
  FORBID_TAGS,
  FORBID_EVENTS,
  FORBID_ATTRS,
  FORBID_ATTRS_VALUES,
} from "./forbid";

const removeNode = (node) => node.parentNode.removeChild(node);

const removeAttr = (name, node) => node.removeAttribute(name);

const sanitizeTags = (currentNode) => {
  if (currentNode.nodeName.match(/[\u0080-\uFFFF]/)) {
    removeNode(currentNode);
    return true;
  }

  const tagName = currentNode.nodeName.toLowerCase();
  const templateReg = /<template/i;

  if (tagName === "select" && templateReg.test(currentNode.innerHTML)) {
    removeNode(currentNode);
    return true;
  }

  if (FORBID_TAGS.includes(tagName)) {
    removeNode(currentNode);
    return true;
  }

  return false;
};

const sanitizeAttrs = (currentNode) => {
  let attr;
  let value;

  const { attributes } = currentNode;

  if (!attributes) {
    return;
  }

  let attrsLen = attributes.length;

  while (attrsLen--) {
    attr = attributes[attrsLen];
    const { name } = attr;
    value = name === "value" ? attr.value : attr.value.trim();

    if (FORBID_EVENTS.includes(name) || FORBID_ATTRS.includes(name)) {
      if (name === "hidden") {
        removeNode(currentNode);
      } else {
        removeAttr(name, currentNode);
      }
    }

    for (let i = 0; i < FORBID_ATTRS_VALUES.length; i++) {
      if (value.includes(FORBID_ATTRS_VALUES[i])) removeAttr(name, currentNode);
    }
  }
};

const parseHtml = (html) => {
  const body = new DOMParser().parseFromString(html, "text/html").body;

  const nodeIterator = document.createNodeIterator(
    body,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT
  );
  let currentNode;

  while ((currentNode = nodeIterator.nextNode())) {
    if (currentNode.nodeType !== 1) {
      continue;
    }

    if (sanitizeTags(currentNode)) continue;

    sanitizeAttrs(currentNode);
  }

  return body.innerHTML;
};

export default parseHtml;
