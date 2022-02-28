
const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
