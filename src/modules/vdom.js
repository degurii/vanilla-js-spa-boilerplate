const isDOM = (obj) => obj instanceof Element;

export const createElement = (type, props, ...children) => {
  const element = document.createElement(type);

  if (props) {
    Object.entries(props)
      .filter(([k]) => k !== 'on' && k !== 'data')
      .forEach(([key, value]) => element.setAttribute(key, value));
  }

  if (props?.on) {
    Object.entries(props.on).forEach(([eventType, listener]) =>
      element.addEventListener(eventType, listener),
    );
  }
  if (props?.data) {
    Object.entries(props.data).forEach(([key, value]) => {
      element.dataset[key] = value;
    });
  }

  children
    .map((child) => (isDOM(child) ? child : document.createTextNode(child)))
    .forEach((el) => element.appendChild(el));

  return element;
};
