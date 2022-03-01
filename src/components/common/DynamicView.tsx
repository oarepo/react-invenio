// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment } from 'react';
import { DataService } from '../../services';
import { useCompositionConfig, useComposition } from '../../compositions/hooks';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type DynamicViewProps = {
  /**
   * Any contextual data passed down
   * to components for rendering content
   */
  data: DataService;
  /**
   * UI laoyout and composition configuration
   */
  uiConfig: { [key: string]: any };
};

/**
 * A component rendering its contents in an externally
 * configurable layout & compositions.
 * @param props props containing component view configuration
 * @returns
 */
export const DynamicView: BFC<DynamicViewProps> = ({ data, uiConfig }) => {
  // Create and render dynamic composition
  const { layoutApi, compositionDef } = useCompositionConfig(uiConfig);
  const { renderer, compositionApi } = useComposition(
    layoutApi,
    compositionDef,
    { ...data }
  );
  return (
    <Fragment>
      {/* @ts-ignore: 2339 */}
      {renderer.renderCompositions(compositionApi.composition)}
    </Fragment>
  );
};

DynamicView.Registerable = createRegisterable(DynamicView, 'dynamic-view');

export default DynamicView;
