// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _get from 'lodash/get';
import {
  CheckedCompositionInformation,
  ComponentInformation,
  LayoutApi,
  RenderLayouts,
} from 'json-react-layouts';
import { registeredLayouts } from '../layouts/registry';
import { DataService } from '../services';

export type LayoutComposition = {
  renderer: RenderLayouts;
  compositionApi: CheckedCompositionInformation;
};

export type ResolvedCompositionConfig = {
  compositionDef: CheckedCompositionInformation;
  layoutApi: LayoutApi<
    ComponentInformation<string, any>,
    any,
    DataService,
    any,
    any
  >;
};

export function useCompositionConfig(config: {
  layout?: string;
  [key: string]: any;
}): ResolvedCompositionConfig {
  const { layout, ...compositionConfig } = config;

  const layoutApi = _get(registeredLayouts, config.layout || '_default');
  const compositionDef = layoutApi.composition(compositionConfig);

  return { layoutApi, compositionDef };
}

export function useComposition(
  layout: LayoutApi<
    ComponentInformation<string, any>,
    any,
    DataService,
    any,
    any
  >,
  definition: any,
  services?: DataService
): LayoutComposition {
  const renderer = layout.createRenderers({ services });
  const compositionApi = layout.composition(definition);
  return {
    renderer,
    compositionApi,
  };
}
