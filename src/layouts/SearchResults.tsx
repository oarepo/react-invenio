// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LayoutRegistration } from 'json-react-layouts';
import { commonComponents, BaseComponent } from '../components/common';
import { ContextMiddleware } from '../middleware';
import { ContextService } from '../services';
import DefaultComposition from '../compositions/Default';
import ItemComposition from '../compositions/Item';

export const SearchResultsLayout = LayoutRegistration<ContextService>()
  .registerComponents((registrar) => {
    const builder = registrar.registerComponent(BaseComponent);
    commonComponents.map((cc) => builder.registerComponent(cc));

    builder.registerMiddleware(ContextMiddleware);
    return builder;
  })
  .registerCompositions((registrar) =>
    registrar
      .registerComposition(DefaultComposition)
      .registerComposition(ItemComposition)
  );

export default SearchResultsLayout;
