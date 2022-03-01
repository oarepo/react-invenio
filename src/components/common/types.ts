// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ComponentRegistration } from 'json-react-layouts';
import { ComponentClass, FunctionComponent } from 'react';
import { DataService } from '../../services';

/**
 * Base functional component registerable to layout registry.
 */
export type BFC<P = {}> = FunctionComponent<P> & {
  Registerable?: ComponentRegistration<string, any, DataService>;
};

/**
 * Base component class registerable to layout registry.
 */
export type BaseComponentClass<P = {}> = ComponentClass<P> & {
  Registerable?: ComponentRegistration<string, any, DataService>;
};
