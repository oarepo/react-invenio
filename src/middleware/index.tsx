// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _get from 'lodash/get';
import { DataService, resolveDataProps } from '../services';

export const DataMiddleware = (
  componentProps: { [key: string]: any },
  middlewareProps: { [key: string]: any },
  serviceProps: { services: DataService },
  next: any
) => {
  const { services } = serviceProps;
  const resolvedProps = resolveDataProps(componentProps, services);

  return next(resolvedProps, middlewareProps, services);
};
