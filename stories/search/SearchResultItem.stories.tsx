import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  SearchResultItem,
  SearchResultItemProps,
} from '../../src/components/search';
import uiConfig from '../fixtures/record-search-result-item.json';
import fullRecord from '../fixtures/full-record.json';
import 'semantic-ui-css/semantic.min.css';

const meta: Meta = {
  title: 'Record Search/Dynamic Result Item',
  component: SearchResultItem,
};

export default meta;

const Template: Story<SearchResultItemProps> = (args) => (
  <SearchResultItem {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const FullRecord = Template.bind({});

FullRecord.args = {
  result: fullRecord,
  index: 10,
  uiConfig: uiConfig,
};

export const MinimalRecord = Template.bind({});

MinimalRecord.args = {
  context: {
    ...fullRecord,
    listIndex: 10,
  },
  uiConfig: uiConfig,
};
