// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LayoutRegistration } from 'json-react-layouts';
import { commonComponents, BaseComponent } from '../components/common';
import DefaultComposition from '../compositions/Default';
import { ContextMiddleware } from '../middleware';
import { ContextService } from '../services';

export const DefaultLayout = LayoutRegistration<ContextService>()
  .registerComponents((registrar) => {
    const builder = registrar.registerComponent(BaseComponent);
    commonComponents.map((cc) => builder.registerComponent(cc));
    builder.registerMiddleware(ContextMiddleware);
    return builder;
  })
  .registerCompositions(
    (registrar) => registrar.registerComposition(DefaultComposition)
    // registrar.registerComposition(DefaultComposition)
  );

export default DefaultLayout;
