// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Label } from 'semantic-ui-react';
import { createRegisterable } from '../utils';
import { BaseComponentClass } from './types';

export const SLabel = Label as BaseComponentClass;
SLabel.Registerable = createRegisterable(Label);

export default SLabel;
