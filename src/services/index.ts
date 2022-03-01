// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import isPlainObject from 'lodash/isPlainObject';
import _get from 'lodash/get';
import transform from 'lodash/transform';

export interface Data {
  [key: string]: any;
}

export type DataService = {
  data: Data;
};

export function resolveDataProps(
  props: { [key: string]: any },
  service: DataService
): { [key: string]: any } {
  return transform(
    props,
    (result, value, key) => {
      const { key: k, value: v } = resolveDataProp(
        key.toString(),
        value,
        service
      );
      result[k] = v;
    },
    {} as any
  );
}

export function resolveDataProp(key: string, value: any, service: DataService) {
  if (key.startsWith('$data-')) {
    if (isPlainObject(value)) {
      return {
        key: key.slice(6),
        value: _get(service, value.path, value.default || null),
      };
    }

    return {
      key: key.slice(6),
      value: _get(service, value),
    };
  }
  return { key, value };
}
