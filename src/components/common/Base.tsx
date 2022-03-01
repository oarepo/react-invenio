// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { Fragment, PropsWithChildren } from 'react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export const Base: BFC<PropsWithChildren<{}>> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

// Base.displayName = 'raw';
Base.Registerable = createRegisterable(Base);

export default Base;
