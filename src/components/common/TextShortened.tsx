// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import _truncate from 'lodash/truncate';
import React, { FC, Fragment, PropsWithChildren } from 'react';
import { registerSimpleComponent } from '../utils';

export type TextShortenedProps = {
  /** Maximum number of characters allowed in a text. */
  length: number;
};

/**
 * A raw component that renders anything passed as children.
 * @param props props containing children content
 * @returns
 */
const TextShortened: FC<PropsWithChildren<TextShortenedProps>> = (
  props: PropsWithChildren<TextShortenedProps>
) => {
  return (
    <Fragment>
      {_truncate(props.children?.toString(), { length: props.length })}
    </Fragment>
  );
};

TextShortened.displayName = 'text-shortened';

export const TextShortenedComponent = registerSimpleComponent(TextShortened);
