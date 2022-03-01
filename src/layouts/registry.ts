// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { ComponentInformation, LayoutApi } from 'json-react-layouts';
import { DataService } from '../services';
import { DefaultLayout } from './Default';
import { SearchResultsLayout } from './SearchResults';

export type LayoutRegistrations = {
  [key: string]: LayoutApi<
    ComponentInformation<string, any>,
    any,
    DataService,
    any,
    any
  >;
};

// TODO: make lazy-loadable here
export const registeredLayouts: LayoutRegistrations = {
  _default: DefaultLayout,
  'search-results': SearchResultsLayout,
};
