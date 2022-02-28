// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import isPlainObject from 'lodash/isPlainObject';
import _get from 'lodash/get';
import transform from 'lodash/transform';

export interface Context {
  [key: string]: any;
}

export type ContextService = {
  context: Context;
};

export function resolveContextProps(
  props: { [key: string]: any },
  service: ContextService
): { [key: string]: any } {
  return transform(
    props,
    (result, value, key) => {
      const { key: k, value: v } = resolveContextProp(
        key.toString(),
        value,
        service
      );
      result[k] = v;
    },
    {} as any
  );
}

export function resolveContextProp(
  key: string,
  value: any,
  service: ContextService
) {
  if (key.startsWith('$context-')) {
    if (isPlainObject(value)) {
      return {
        key: key.slice(9),
        value: _get(service.context, value.path, value.default || null),
      };
    }
    return {
      key: key.slice(9),
      value: _get(service.context, value),
    };
  }
  return { key, value };
}
