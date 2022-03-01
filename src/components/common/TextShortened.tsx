// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _truncate from 'lodash/truncate';
import React, { Fragment, PropsWithChildren } from 'react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type TextShortenedProps = {
  /** Maximum number of characters allowed in a text. */
  length: number;
};

/**
 * A component that renders text shortened to a maximum length.
 * @param props props containing maximum length
 * @returns
 */
const TextShortened: BFC<PropsWithChildren<TextShortenedProps>> = ({
  length,
  children,
}: PropsWithChildren<TextShortenedProps>) => {
  return (
    <Fragment>{_truncate(children?.toString(), { length: length })}</Fragment>
  );
};

TextShortened.Registerable = createRegisterable(
  TextShortened,
  'text-shortened'
);

export default TextShortened;
