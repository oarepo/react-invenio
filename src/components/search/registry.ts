// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import loadable from '@loadable/component';

export const searchComponents: any[] = [
  loadable(() =>
    import(/* webpackChunkName: 'searchComponents' */ './SearchResultItem')
  ),
];
