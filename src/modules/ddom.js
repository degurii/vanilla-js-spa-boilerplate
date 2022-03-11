import { createEl } from '../utils/dom.js';

const isDOM = (obj) => obj instanceof Element;

const splitDOMFromChildren = (children) => {
  const ret = [[], []];
  if (!children) return ret;

  return children.reduce((res, child) => {
    if (isDOM(child)) {
      res[0].push(child);
    } else {
      res[1].push(child);
    }
    return res;
  }, ret);
};

const createDeguElement = (type, props, ...children) => {
  const [DOMChildren, normalChildren] = splitDOMFromChildren(children);

  const stringProps = props
    ? Object.entries(props)
        .filter(([k]) => k !== 'on' && k !== 'data')
        .map(([k, v]) => `${k}=${v}`)
        .join(' ')
    : '';
  const stringNormalChildren = normalChildren
    .map((child) => `${child}`)
    .join('');
  const html = `<${type} ${stringProps}>${stringNormalChildren}</${type}>`;

  const element = createEl(html);

  if (props?.on) {
    Object.entries(props.on).forEach(([eventType, listener]) =>
      element.addEventListener(eventType, listener),
    );
  }

  DOMChildren.forEach((el) => element.appendChild(el));

  return element;
};

export default createDeguElement;
