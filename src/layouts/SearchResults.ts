// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LayoutRegistration } from 'json-react-layouts';
import { DataMiddleware } from '../middleware';
import { DataService } from '../services';
import DefaultComposition from '../compositions/Default';
import BaseComponent from '../components/common/Base';
import { commonComponents } from '../components/common/registry';
import { ItemComposition } from '../compositions/Item';

export const SearchResultsLayout = LayoutRegistration<DataService>()
  .registerComponents((registrar) => {
    const builder = registrar.registerComponent(BaseComponent.Registerable!);
    commonComponents.map(async (cc) => {
      // TODO: find a way that we can register a lazy reference and load on-demand
      const module = await cc.load();
      const component = module.default;
      if (component.Registerable) {
        builder.registerComponent(component.Registerable);
      }
    });

    builder.registerMiddleware(DataMiddleware);
    return builder;
  })
  .registerCompositions((registrar) =>
    registrar
      .registerComposition(DefaultComposition)
      .registerComposition(ItemComposition)
  );

export default SearchResultsLayout;
