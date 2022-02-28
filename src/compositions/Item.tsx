// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import transform from 'lodash/transform';
import React from 'react';
import {
  Item,
  ItemDescriptionProps,
  ItemExtraProps,
  ItemHeaderProps,
  ItemMetaProps,
  ItemProps,
} from 'semantic-ui-react';
import { ContextService, resolveContextProps } from '../services';
import { createRegisterableComposition } from '../components/utils';

/* A default noop composition, rendering its content as fragment */
export const ItemComposition = createRegisterableComposition<
  'header' | 'extraTop' | 'extraBottom' | 'meta' | 'description'
>()(
  'item',
  (
    contentAreas,
    props: {
      item: ItemProps;
      extraTop: ItemExtraProps;
      extraBottom: ItemExtraProps;
      header: ItemHeaderProps;
      meta: ItemMetaProps;
      description: ItemDescriptionProps;
    },
    services: ContextService
  ) => {
    const {
      item,
      extraTop,
      extraBottom,
      header,
      meta,
      description,
    } = transform(
      props,
      (result, value, key) => {
        result[key] = resolveContextProps(value, services);
      },
      {} as any
    );

    return (
      <Item {...item}>
        <Item.Content>
          {contentAreas.extraTop && (
            <Item.Extra {...extraTop}>{contentAreas.extraTop}</Item.Extra>
          )}
          {contentAreas.header && (
            <Item.Header {...header}>{contentAreas.header}</Item.Header>
          )}
          {contentAreas.meta && (
            <Item.Meta {...meta}>{contentAreas.meta}</Item.Meta>
          )}
          {contentAreas.description && (
            <Item.Description {...description}>
              {contentAreas.description}
            </Item.Description>
          )}
          {contentAreas.extraBottom && (
            <Item.Extra {...extraBottom}>{contentAreas.extraBottom}</Item.Extra>
          )}
        </Item.Content>
      </Item>
    );
  }
);

export default ItemComposition;
