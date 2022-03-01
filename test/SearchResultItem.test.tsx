import React from 'react';
import * as ReactDOM from 'react-dom';
import { FullRecord } from '../stories/search/SearchResultItem.stories';

describe('FullRecord', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FullRecord />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
