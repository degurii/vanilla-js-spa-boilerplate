import { createElement as e } from '../modules/vdom.js';

import { SelectedLanguage } from './SelectedLanguage.js';
import { SearchInput } from './SearchInput.js';
import { Suggestion } from './Suggestion.js';

export const App = (state, dispatch, props) => {
  const element = e(
    'main',
    { class: 'App' },
    SelectedLanguage(state, dispatch, null),
    SearchInput(state, dispatch, null),
    Suggestion(state, dispatch, null),
  );
  console.log(element);
  return element;
};
