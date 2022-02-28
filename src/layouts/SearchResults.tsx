// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LayoutRegistration } from 'json-react-layouts';
import { DataMiddleware } from '../middleware';
import { DataService } from '../services';
import DefaultComposition from '../compositions/Default';
import ItemComposition from '../compositions/Item';
import { searchComponents } from '../components/search/registry';
import BaseComponent from '../components/common/Base';
import { commonComponents } from '../components/common/registry';

export const SearchResultsLayout = LayoutRegistration<DataService>()
  .registerComponents((registrar) => {
    const builder = registrar.registerComponent(BaseComponent.Registerable!);
    commonComponents.map((cc) => builder.registerComponent(cc));
    searchComponents.map((cc) => builder.registerComponent(cc));

    builder.registerMiddleware(DataMiddleware);
    return builder;
  })
  .registerCompositions((registrar) =>
    registrar
      .registerComposition(DefaultComposition)
      .registerComposition(ItemComposition)
  );

export default SearchResultsLayout;
