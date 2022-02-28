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
import { registeredLayouts } from '../layouts';
import { ContextService } from '../services';

export * from './Default';
export * from './Item';

export type LayoutComposition = {
  renderer: RenderLayouts;
  compositionApi: CheckedCompositionInformation;
};

export type ResolvedCompositionConfig = {
  compositionDef: CheckedCompositionInformation;
  layoutApi: LayoutApi<
    ComponentInformation<string, any>,
    any,
    ContextService,
    any,
    any
  >;
};

export function resolveCompositionConfig(config: {
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
    ContextService,
    any,
    any
  >,
  definition: any,
  services?: ContextService
): LayoutComposition {
  const renderer = layout.createRenderers({ services });
  const compositionApi = layout.composition(definition);
  return {
    renderer,
    compositionApi,
  };
}
