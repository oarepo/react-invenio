// Copyright (c) 2022 Miroslav Bauer
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React, { PropsWithChildren } from 'react';
import { createRegisterable } from '../utils';
import { BFC } from './types';

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

/**
 * A component for rendering hyperlinked content.
 * @param props hyperlink attributes and children content
 * @returns
 */
export const Link: BFC<PropsWithChildren<LinkProps>> = ({
  children,
  ...rest
}: PropsWithChildren<LinkProps>) => {
  return <a {...rest}>{children}</a>;
};

Link.displayName = 'link';
Link.Registerable = createRegisterable(Link);

export default Link;
