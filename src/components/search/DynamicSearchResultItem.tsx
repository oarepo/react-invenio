import React, { FC, Fragment } from 'react';
import { PropsWithUIConfig } from '../common';
import { resolveCompositionConfig, useComposition } from '../../compositions';

/**
 * Search result item metadata
 */
type ResultItemMetadata = {
  /**
   * Primary record identifier of a search result item.
   * */
  id: string;
  /**
   * Record metadata serialized for UI rendering.
   */
  ui?: { [key: string]: string };
};

export type DynamicResultItemProps = {
  /**
   * Metadata of the search result item.
   */
  result: ResultItemMetadata;
  /**
   * Index of the item in a search result list.
   */
  index: number;
  /**
   * UI configuration of how the result should be rendered
   */
  uiConfig: { [key: string]: any };
};

/**
 * An item of a record search result list.
 */
export const DynamicSearchResultItem: FC<PropsWithUIConfig<
  DynamicResultItemProps
>> = ({ result, index, uiConfig }) => {
  // const createdDate = _get(
  //   result,
  //   'ui.created_date_l10n_long',
  //   'No creation date found.'
  // );
  // const subjects = _get(result, 'ui.subjects', []);

  // // Derivatives
  // const viewLink = `/records/${result.id}`;

  // Create and render dynamic composition
  const { layoutApi, compositionDef } = resolveCompositionConfig(uiConfig);
  const { renderer, compositionApi } = useComposition(
    layoutApi,
    compositionDef,
    { context: { ...result, listIndex: index } }
  );
  return (
    <Fragment>
      {/* @ts-ignore: 2339 */}
      {renderer.renderCompositions(compositionApi.composition)}
    </Fragment>
  );
};
