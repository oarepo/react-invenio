// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment } from 'react';
import { createRegisterableComposition } from '../components/utils';

/* A default noop composition, rendering its content as fragment */
export const DefaultComposition = createRegisterableComposition<'default'>()(
  'default',
  (contentAreas) => {
    return <Fragment>{contentAreas.default}</Fragment>;
  }
);

export default DefaultComposition;
