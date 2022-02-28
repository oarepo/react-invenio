// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { FunctionComponent } from 'react';
import { getRegistrationCreators } from 'json-react-layouts';
import { DataService } from '../services';

const {
  createRegisterableComponent,
  createRegisterableComposition,
} = getRegistrationCreators<DataService>();

function createRegisterable(
  Component: React.ComponentClass | FunctionComponent<any>,
  name?: string
) {
  return createRegisterableComponent(
    name || (Component.displayName || Component.name).toLowerCase(),
    (props: any) => {
      const { children, componentRenderPath, componentType, ...rest } = props;
      return <Component {...rest}>{children}</Component>;
    }
  );
}

export {
  createRegisterable,
  createRegisterableComponent,
  createRegisterableComposition,
};
