import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchResultItem, ResultItemProps } from '../../src/components/search';
import fullRecord from '../fixtures/full-record.json';
import 'semantic-ui-css/semantic.min.css';

const meta: Meta = {
  title: 'Record Search/Result Item',
  component: SearchResultItem,
};

export default meta;

const Template: Story<ResultItemProps> = (args) => (
  <SearchResultItem {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const FullRecord = Template.bind({});

FullRecord.args = {
  result: fullRecord,
  index: 0,
};

export const MinimalRecord = Template.bind({});

MinimalRecord.args = {
  result: {},
  index: 0,
};
