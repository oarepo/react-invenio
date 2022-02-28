// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _get from 'lodash/get';
import { ContextService, resolveContextProps } from '../services';

export const ContextMiddleware = (
  componentProps: { [key: string]: any },
  middlewareProps: { [key: string]: any },
  serviceProps: { services: ContextService },
  next: any
) => {
  const { services } = serviceProps;
  const resolvedProps = resolveContextProps(componentProps, services);

  return next(resolvedProps, middlewareProps, services);
};
