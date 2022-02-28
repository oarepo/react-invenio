// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lazy } from 'react';

export const searchComponents: any[] = [
  lazy(() =>
    import(/* webpackChunkName: searchComponents */ './SearchResultItem')
  ),
];
