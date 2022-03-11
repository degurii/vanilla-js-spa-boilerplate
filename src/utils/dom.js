export const createEl = (html) => {
  const wrap = document.createElement('div');
  wrap.innerHTML = html;
  const children = [...wrap.children];
  return children[0];
};

export const qs = (sel, parent = document) => parent.querySelector(sel);
export const qsa = (sel, parent = document) => parent.querySelectorAll(sel);
