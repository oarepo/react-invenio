// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { LayoutRegistration } from 'json-react-layouts';
import BaseComponent from '../components/common/Base';
import { commonComponents } from '../components/common/registry';
import DefaultComposition from '../compositions/Default';
import { DataMiddleware } from '../middleware';
import { DataService } from '../services';

export const DefaultLayout = LayoutRegistration<DataService>()
  .registerComponents((registrar) => {
    const builder = registrar.registerComponent(BaseComponent.Registerable!);
    commonComponents.map(
      (cc) => cc.Registerable && builder.registerComponent(cc.Registerable)
    );
    builder.registerMiddleware(DataMiddleware);
    return builder;
  })
  .registerCompositions((registrar) =>
    registrar.registerComposition(DefaultComposition)
  );

export default DefaultLayout;
