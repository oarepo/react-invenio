// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';
import { createRegisterable } from '../utils';
import { DynamicView, DynamicViewProps } from '../common/DynamicView';
import { BFC } from '../common/types';

export type SearchResultItemProps = DynamicViewProps & {
  /**
   * Index of a record in a results list
   */
  listIndex: number;
};

/**
 * An item of a record search result list.
 */
export const SearchResultItem: BFC<SearchResultItemProps> = ({
  data,
  uiConfig,
}) => {
  return <DynamicView data={data} uiConfig={uiConfig}></DynamicView>;
};

SearchResultItem.displayName = 'search-result-item';
SearchResultItem.Registerable = createRegisterable(
  SearchResultItem
);

export default SearchResultItem;
